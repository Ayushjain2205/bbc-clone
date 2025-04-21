export interface EditorsPick {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category?: string;
  link: string;
}

export const editorsPicksData: EditorsPick[] = [
  {
    id: "1",
    title: "The life and legacy of Pope Francis",
    description: "The BBC's Aleem Maqbool takes us through the life of Pope Frances, and the challenges he faced as pontiff.",
    image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/2fb3/live/0c544370-f055-11ef-a819-277e390a7a08.jpg.webp",
    date: "2 hrs ago",
    link: "/news/videos/c5yr0nx50zzo"
  },
  {
    id: "2",
    title: "The ancient history of Iceland's warring Viking families",
    description: "The Travel Show visits an immersive experience that brings to life a brutal battle between Iceland's Vikings.",
    image: "https://ichef.bbci.co.uk/images/ic/480x270/p0l4kt4q.jpg.webp",
    date: "2 hrs ago",
    category: "Adventures",
    link: "/reel/video/p0l4kk08/the-ancient-history-of-iceland-s-warring-viking-families"
  },
  {
    id: "3",
    title: "Archive: Zoo welcomes UK's first polar bear twins",
    description: "Newsreel footage from 1960 shows cubs Aurora and Polaris playing in their enclosure at Whipsnade.",
    image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/b96d/live/236efb90-1c51-11f0-b1b3-7358f8d35a35.jpg.webp",
    date: "1 day ago",
    category: "Beds, Herts & Bucks",
    link: "/news/videos/cjdx0r19110o"
  },
  {
    id: "4",
    title: "Moment Vladimir Putin announces 'Easter truce'",
    description: "It is unclear if Ukraine has accepted the terms or already discussed the plans for the pause in fighting with Russia.",
    image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/e915/live/53613a20-1d2d-11f0-80b3-83959215671c.jpg.webp",
    date: "2 days ago",
    category: "Europe",
    link: "/news/videos/crkx7enk254o"
  },
  {
    id: "5",
    title: "Robots race in Chinese half-marathon",
    description: "The Yizhuang half marathon is the first time robots have raced alongside humans over such a distance.",
    image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/eb4f/live/c9b3f6c0-1d02-11f0-b265-abe347419ae3.jpg.webp",
    date: "2 days ago",
    category: "Asia",
    link: "/news/videos/ce8gz5vl2z1o"
  },
  {
    id: "6",
    title: "Minecraft players: 'We've spent five years rebuilding London'",
    description: "Minecraft players have spent about 15,000 hours in total on the project to build London and the UK",
    image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/d907/live/f58c5de0-1c4a-11f0-8a1e-3ff815141b98.jpg.webp",
    date: "2 days ago",
    category: "London",
    link: "/news/videos/clyq10vyvnqo"
  },
  {
    id: "7",
    title: "'We barricaded both doors': Fear and chaos at Florida State University",
    description: "As alarms blared across campus, students hid under tables and barricaded themselves in classrooms.",
    image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/5795/live/86297d30-1c76-11f0-a455-cf1d5f751d2f.jpg.webp",
    date: "3 days ago",
    category: "US & Canada",
    link: "/news/videos/cj68n028e00o"
  },
  {
    id: "8",
    title: "'I have 16 feral cats living in my back garden'",
    description: "Michelle's hedgehog-feeding attracted cats which began breeding, and the colony has decided to stay.",
    image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/cf1c/live/e34dade0-1ce6-11f0-b265-abe347419ae3.jpg.webp",
    date: "2 days ago",
    category: "Wear",
    link: "/news/videos/cz018vld7xko"
  }
];
