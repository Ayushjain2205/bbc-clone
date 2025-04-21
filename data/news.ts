export interface AudioItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  image: {
    src: string;
    alt: string;
    srcSet?: string;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  image?: {
    src: string;
    alt: string;
  };
  timeAgo: string;
  section: string;
  isLive?: boolean;
}

export const newsData = {
  weeklyAudio: [
    {
      id: "p0l5hwwl",
      title: "Business Daily",
      subtitle: "The cost of smog",
      duration: "48 mins",
      image: {
        src: "https://ichef.bbci.co.uk/images/ic/1376x774/p0k6r7vm.jpg.webp",
        alt: "Business Daily podcast"
      }
    },
    {
      id: "p0l5hpbc",
      title: "The Climate Question",
      subtitle: "Are electric planes the future",
      duration: "27 mins",
      image: {
        src: "https://ichef.bbci.co.uk/images/ic/1376x774/p0kq8n5g.jpg.webp",
        alt: "Climate Question podcast"
      }
    },
    {
      id: "p0l5j0sh",
      title: "History's Heroes",
      subtitle: "Leif Larsen and the Shetland Bus",
      duration: "28 mins",
      image: {
        src: "https://ichef.bbci.co.uk/images/ic/1376x774/p0d7m6zz.jpg.webp",
        alt: "History's Heroes podcast"
      }
    },
    {
      id: "p0l5b8p6",
      title: "Lives Less Ordinary",
      subtitle: "Swimming blind: my journey to self-acceptance",
      duration: "38 mins",
      image: {
        src: "https://ichef.bbci.co.uk/images/ic/1376x774/p0d7m6zz.jpg.webp",
        alt: "Lives Less Ordinary podcast"
      }
    },
    {
      id: "p0l5b8p7",
      title: "The Documentary Podcast",
      subtitle: "Assignment: New Zealand - what counts as Māori equality",
      duration: "27 mins",
      image: {
        src: "https://ichef.bbci.co.uk/images/ic/480x270/p0ks8w6j.jpg.webp",
        alt: "Documentary Podcast"
      }
    },
    {
      id: "p0l5b8p8",
      title: "CrowdScience",
      subtitle: "Why do animals swallow rocks?",
      duration: "29 mins",
      image: {
        src: "https://ichef.bbci.co.uk/images/ic/480x270/p0l5hpby.jpg.webp",
        alt: "CrowdScience podcast"
      }
    },
    {
      id: "p0l5b8p9",
      title: "Lives Less Ordinary",
      subtitle: "Rewind: The woman who wanted to bring down apartheid from within",
      duration: "41 mins",
      image: {
        src: "https://ichef.bbci.co.uk/images/ic/1376x774/p0d7m6zz.jpg.webp",
        alt: "Lives Less Ordinary podcast"
      }
    }
  ],
  topStories: [
    {
      id: "1",
      title: "Saka's ankle injury nothing serious - Arteta",
      category: "Arsenal",
      timeAgo: "4 hrs ago",
      section: "Sports"
    }
  ],
  sports: {
    featured: {
      id: "sf1",
      title: "'Iconic moment in a special Liverpool career - but was it a farewell?'",
      category: "Liverpool",
      timeAgo: "1 hr ago",
      section: "Sports",
      image: {
        src: "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/04ce/live/fdc33cc0-1e90-11f0-b1b3-7358f8d35a35.jpg.webp",
        alt: "Liverpool player celebrating"
      }
    },
    articles: [
      {
        id: "s1",
        title: "Liverpool 'not good enough' in defeat - Klopp",
        category: "Liverpool",
        timeAgo: "1 hr ago",
        section: "Sports"
      },
      {
        id: "s2",
        title: "La Liga: Vinicius opener disallowed as Real being held by Athletic",
        category: "Football",
        timeAgo: "Live",
        section: "Sports",
        isLive: true
      },
      {
        id: "s3",
        title: "Piastri wins in Saudi Arabia and takes title lead",
        category: "Formula 1",
        timeAgo: "2 hrs ago",
        section: "Sports"
      }
    ]
  },
  business: [
    {
      id: "b1",
      title: "Designed in US, made in China: Why Apple is stuck",
      description: "China sits at the heart of Apple's supply chain - and it has benefited hugely from it. Can they break up?",
      category: "Asia",
      image: {
        src: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/f86a/live/3d6b7190-16a2-11f0-b2d2-fdaed6fdfe2b.jpg.webp",
        alt: "Apple manufacturing in China"
      },
      timeAgo: "7 days ago",
      section: "Business"
    },
    {
      id: "b2",
      title: "Starmer and Trump discuss 'productive' trade talks",
      category: "UK",
      timeAgo: "2 days ago",
      section: "Business"
    },
    {
      id: "b3",
      title: "What we know about US-Ukraine minerals deal",
      category: "World",
      timeAgo: "2 days ago",
      section: "Business"
    },
    {
      id: "b4",
      title: "US lays out plans to hit Chinese ships with port fees",
      category: "Business",
      timeAgo: "2 days ago",
      section: "Business"
    }
  ]
}
