// game.js
const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 480,
    height: 320,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const gameState = {
    gameIsActive: false,
    distance: 0,
    score: 0,
    levelSpeed: 1,
    singleJump: false,
    doubleJump: false,
    gameOverCalled: false
};

function preload() {
    // Load assets
    this.load.image('background', 'images/stump-tree-bush.jpg');
    this.load.image('stone', 'images/stones.png');
    this.load.image('nut', 'images/nut.png');
    this.load.spritesheet('player', 
        'images/playerSprite.png',
        { frameWidth: 62, frameHeight: 53 }
    );
    this.load.audio('jumpSound', 'sounds/Jump.mp3');
    this.load.audio('collectSound', 'sounds/Collect.mp3');
}

function create() {

    const scene = this;

    this.stones = this.physics.add.group({
        allowGravity: false,
        immovable: true
    });

    this.nuts = this.physics.add.group({
        allowGravity: false,
        immovable: true
    });

    this.createStones = function() {
        const stone = this.stones.create(
            config.width + 100,
            Phaser.Math.Between(300,300),
            'stone'
        );
        
        // Set stone velocity to match background scroll speed
        stone.setVelocityX(-gameState.levelSpeed * 30);
    };

    this.createNuts = function() {
        const nut = this.nuts.create(
            Phaser.Math.Between(10, config.width - 50), // Random x position across screen width
            0, // Start above the screen
            'nut'
        );
        // Make sure the nut is visible
        nut.setScale(0.5);
        // Make sure the nut is visible
        nut.setGravityY(300); // Adjust this value to change falling speed
    
        // Add a slight random horizontal movement
        nut.setVelocityY(Phaser.Math.Between(-50, 100));

        
    };
    
    this.gameOver = () => {
        if (!gameState.gameOverCalled) {
            gameState.gameOverCalled = true;
            gameState.gameIsActive = false;
            this.player.flipY = false;
            // Save high score
            const highScore = localStorage.getItem('highScore') || 0;
            if (gameState.score > highScore) {
                localStorage.setItem('highScore', gameState.score);
            }
    
            // Add restart functionality
            this.input.on('pointerdown', () => {
                this.scene.restart();
            });
        }
    }
    // Create animations
    this.anims.create({
        key: 'run',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'jump',
        frames: this.anims.generateFrameNumbers('player', { start: 3, end: 0 }),
        frameRate: 10,
        repeat: 0
    });

    // Create background for parallax
    this.background = this.add.tileSprite(640, 200, 1280, 400, "background");
    // Create player
    this.player = this.physics.add.sprite(150, config.height - 100, 'player');
  
    // Create player physics properties
    this.player.setBounce(0);
    this.player.setCollideWorldBounds(true);

    // Create cursor keys for jumping (optional, in addition to pointer/mouse)
    this.cursors = this.input.keyboard.createCursorKeys();
    
    // Jump handler function
    this.handleJump = () => {
        if (gameState.gameIsActive) {
            
            this.player.setVelocityY(-400);
            gameState.singleJump = true;
            this.player.play('jump');
            
            const bottomTolerance = 5;
                if (this.player.y + this.player.height >= config.height - bottomTolerance) {
                    this.sound.play('jumpSound');
                    this.player.play('run');
                }
        }
    };
    // Create spacebar key
    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.player.play('run');

    this.background.tilePositionX += gameState.levelSpeed;
    
    // Add colliders
    this.physics.add.collider(this.player, this.stones, () => {
        gameState.gameIsActive = false;
        scene.stones.getChildren().forEach(stone => {
            this.stones.setVelocityX(0);
        });
        // Stop the player
        this.player.setVelocityX(0);
        this.player.setVelocityY(0);
        this.player.flipY = true;
        
        // Stop animations
        this.player.anims.stop();
        
        // Optional: Add game over text
        scene.add.text(config.width/2, config.height/2, 'Game Over!', {
            fontSize: '32px',
            fill: '#000'
        }).setOrigin(0.5);

        // Add spacebar handler for restart
        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.restart();
        });
        
    });

   // In the create function, add this after your other collision handlers
    this.physics.add.overlap(this.player, this.nuts, (player, nut) => {
        // Increase score when collecting nuts
        gameState.score += 10;
        this.sound.play('collectSound');
        this.scoreText.setText('Score: ' + gameState.score);
        
        // Remove the collected nut
        nut.destroy();
    });
    // Add score text
    this.scoreText = this.add.text(16, 16, 'Score: 0', 
        { fontSize: '32px', fill: '#000' });

    // Input handling
    this.input.on('pointerdown', () => {
        if (gameState.gameIsActive) {
            if (!gameState.singleJump) {
                this.player.setVelocityY(-400);
                gameState.singleJump = true;
                this.sound.play('jumpSound');
                this.player.play('jump');
            } else if (!gameState.doubleJump) {
                this.player.setVelocityY(-300);
                gameState.doubleJump = true;
                this.sound.play('jumpSound');
                this.player.play('jump');
            }
        }
    });

    gameState.gameIsActive = true;
}

function update() {
    if (gameState.gameIsActive) {
        gameState.distance += 1;
        if (Phaser.Input.Keyboard.JustDown(this.spaceBar)) {
            this.handleJump();
        }
        
        // Update background
        this.background.tilePositionX += gameState.levelSpeed;
        
        
        // Separate stone and nut spawning
        if (gameState.distance % 500 === 0) {
            if (Math.random() > 0.6) {
                this.createStones();
            }
            // Always create a nut (or adjust probability as needed)
            this.createNuts();
            console.log('Creating a nut at distance:', gameState.distance);
        }

        // Update level speed
        if (gameState.distance % 1000 === 0) {
            gameState.levelSpeed += 1;
        }

        this.nuts.getChildren().forEach(nut => {
            if (nut.x < -nut.width) {
                nut.destroy();
            }
        });

        this.stones.getChildren().forEach(stone => {
            if (stone.x < -stone.width) {
                stone.destroy();
            }
        }); 

        // Check for game over
        if (this.player.y > config.height) {
            this.gameOver();
        }
    }
}

const game = new Phaser.Game(config);
