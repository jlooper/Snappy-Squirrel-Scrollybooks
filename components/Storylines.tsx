// types/storylines.ts
export interface Story {
    book: number;
    tagline: string;
    id: number;
    header: string;
    content: string;
    imageUrl: string;
  }
  
  // storylines.ts
export const stories: Story[] = [
    {
      book: 1,
      tagline: "Snappy needs to save nuts for winter.",
      id: 11,
      header: "Snappy and the Nuts",
      content: "Snappy was a busy, happy squirrel. All day long in the fall he searched through the leaves on the forest floor for tasty nuts to store for the long winter. He squeaked with excitement each time he found a nut and quickly buried it where he was sure he'd find it in the coming months. He had to hide them because other animals wanted to eat them, too.",
      imageUrl: "0.png",
    },
    {
      book: 1,
      tagline: "",
      id: 12,
      header: "The Nuts",
      content: "Sometimes the Deer brothers trampled them and broke the nut shells. Often the naughty Chipmunk family stole them. Sometimes, Snappy couldn't quite remember where he put the piles of nuts. Snappy had been working for a long time and had saved many nuts. They would taste so good all winter when the ground is covered with snow.",
      imageUrl: "1.png",
    },
    {
      book: 1,
      tagline: "",
      id: 13,
      header: "Auntie Pip",
      content: "Snappy thought for a long time about the best place to store them safely where no one could break or steal the nuts. Finally he smiled happily, thinking: \"I'll ask Auntie Pip. She knows all kinds of interesting things.\"",
      imageUrl: "2.png",
    },
    {
      book: 2,
      tagline: "Snappy needs a warm home!",
      id: 21,
      header: "Snappy Needs a Nest",
      content: "Copy",
      imageUrl: "1.png",
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