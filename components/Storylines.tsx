// types/storylines.ts
export interface Story {
    book: number;
    title: string;
    tagline: string;
    id: number;
    header: string;
    content: string;
    imageUrl: string;
    funFact: string;
  }
  
  // storylines.ts
export const stories: Story[] = [
    {
      book: 1,
      title: "Snappy and the Nuts",
      tagline: "Snappy needs to save nuts for winter.",
      id: 10,
      header: "Snappy and the Nuts",
      content: "Snappy was a busy, happy squirrel. All day long in the fall he searched through the leaves on the forest floor for tasty nuts to store for the long winter. He squeaked with excitement each time he found a nut and quickly buried it where he was sure he'd find it in the coming months. He had to hide them because other animals wanted to eat them, too.",
      imageUrl: "0.png",
      funFact: "What kinds of valuable things do you like to save? Money? Items to trade?",
    },
    {
      book: 1,
      title: "",
      tagline: "",
      id: 11,
      header: "The Nuts",
      content: "Sometimes the Deer brothers trampled them and broke the nut shells. Often the naughty Chipmunk family stole them. Sometimes, Snappy couldn't quite remember where he put the piles of nuts. Snappy had been working for a long time and had saved many nuts. They would taste so good all winter when the ground is covered with snow.",
      imageUrl: "1.png",
      funFact: "Where do you store your valuable things? How do you make sure they are safe?",
    },
    {
      book: 1,
      title: "",
      tagline: "",
      id: 12,
      header: "Auntie Pip",
      content: "Snappy thought for a long time about the best place to store them safely where no one could break or steal the nuts. Finally he smiled happily, thinking: \"I'll ask Auntie Pip. She knows all kinds of interesting things.\"",
      imageUrl: "2.png",
      funFact: "Whom do you ask about important money matters?",
    },
    {
      book: 1,
      title: "",
      tagline: "",
      id: 13,
      header: "A Safe Box",
      content: "Auntie Pip told Snappy that the forest has lots of good places to store his property.  \"If you want them back within the next year or so, they\'ll have to be where we can find them easily but will be held safe from other Forest creatures.  I\'d suggest Owl\'s Forest Bank.  You can put them in his safe box where he can watch it all the time.  Lots of animals store their things with Owl. He is awake all night and during the day he has several salamanders who watch what is held in the bank.\"",
      imageUrl: "3.png",
      funFact: "Where do you store your valuable things? How do you make sure they are safe? Have you ever seen a bank\'s safe deposit box area?",
    },
    {
      book: 1,
      title: "",
      tagline: "",
      id: 14,
      header: "Mr. Fox",
      content: "Mr. Fox, who always seemed interested in other peoples’ business, ambled over to Snappy and Auntie Pip. “I have a bank as well, much better than Owl’s. It’s called ‘Fox’s Friends’ Bank’. I will give you three pine nuts for every acorn that you deposit in my bank.”",
      imageUrl: "",
      funFact: "What are the names of your local banks?",
    },
    {
      book: 1,
      title: "",
      tagline: "",
      id: 15,
      header: "A Sharp Customer",
      content: "Auntie Pip looked severely at Fox. “Mr. Fox, I know very well that you make this offer to everyone. I also know that you will not allow Snappy to take his nuts back until a whole year has passed. And you say you give more pine nuts, but you won’t let Snappy have those either until the year has passed. It’s not quite fair.”",
      imageUrl: "",
      funFact: "Are there banks in your town or city that seem to offer more to their customers, but really offer less?",
    },
    {
      book: 1,
      title: "",
      tagline: "",
      id: 16,
      header: "A Better Bank",
      content: "Mr. Fox walked away in a huff. Auntie Pip looked kindly at Snappy. “Many banks want you to deposit your property with them so that they can use it to buy other things, but you have to be careful. Owl is a good banker and won’t take advantage of you. He will give you only two pine nuts for each acorn, but you can get your acorns back any time and you get your pine nuts right away.”",
      imageUrl: "4.png",
      funFact: "What other kinds of business practices would a bank offer to attract customers?",
    },
    {
      book: 1,
      title: "",
      tagline: "",
      id: 17,
      header: "A Deposit",
      content: "Snappy thought that this sounded like a great plan. He worked hard all day digging up his nuts and carrying them to Owl’s Bank. Finally he had a large pile of nuts ready for Owl to take, and knocked at the bank’s door in Owl’s big tree stump. Owl put on his spectacles and turned his head this way and that to look at the beautiful pile of nuts. “You’re welcome to store these nuts in my bank, Snappy,” said Owl, “but you’ll need to open an account.”",
      imageUrl: "5.png",
      funFact: "When is your local bank open?",
    },
    {
      book: 1,
      title: "",
      tagline: "",
      id: 18,
      header: "Safe",
      content: "Snappy wrote his name on the leaf that Owl showed him.  Owl accepted it and signed it carefully. Together with Aunt Pip, Snappy and Owl carried the nuts to a safe storeroom in the base of Owl’s tree stump. “Now,” Snappy thought, “my property is safe from the Chipmunks and the Deer brothers - and Mr. Fox as well!”",
      imageUrl: "",
      funFact: "Do you own a bank account? Why or Why not? What are your goals?",
    },
    {
      book: 2,
      title: "Snappy Needs a Nest",
      tagline: "Snappy needs a warm home!",
      id: 19,
      header: "Snappy Needs a Nest",
      content: "",
      imageUrl: "coming-soon.png",
      funFact: "fact context here",
    },
    {
      book: 3,
      title: "Snappy Plays the Stock Market",
      tagline: "Snappy loses some and wins some",
      id: 20,
      header: "Snappy Plays the Stock Market",
      content: "",
      imageUrl: "coming-soon.png",
      funFact: "fact context here",
    },
    {
      book: 4,
      title: "Snappy Loses",
      tagline: "A risky investment",
      id: 21,
      header: "Snappy Loses",
      content: "",
      imageUrl: "coming-soon.png",
      funFact: "fact context here",
    },
    {
      book: 5,
      title: "Snappy Buys a Bond",
      tagline: "A safer way to invest",
      id: 22,
      header: "Snappy Buys a Bond",
      content: "",
      imageUrl: "coming-soon.png",
      funFact: "fact context here",
    }
  ];
  
  export const getStoriesByBook = (bookNumber: number): Story[] => {
    return stories.filter(story => story.book === bookNumber);
  };
  
  // Get first story from each unique book
export const getFirstStoryPerBook = (stories: Story[]): Story[] => {
  const bookMap = new Map<number, Story>();
  
  stories.forEach(story => {
    if (!bookMap.has(story.book)) {
      bookMap.set(story.book, story);
    }
  });

  return Array.from(bookMap.values());
};