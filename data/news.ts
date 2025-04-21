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
  link: string;
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
      title: "Good Bad Billionaire",
      subtitle: "Vince McMahon: Wrestling's ringmaster",
      duration: "48 mins",
      image: {
        src: "/podcast-vince-mcmahon.jpg",
        alt: "Vince McMahon podcast"
      },
      link: "/audio/play/p0l5hwwl"
    },
    {
      id: "p0l5hpbc",
      title: "The Climate Question",
      subtitle: "How can we cut the world's shipping emissions?",
      duration: "27 mins",
      image: {
        src: "/podcast-climate-question.jpg",
        alt: "Climate Question podcast"
      },
      link: "/audio/play/p0l5hpbc"
    },
    {
      id: "p0l5j0sh",
      title: "History's Heroes",
      subtitle: "Leif Larsen and the Shetland Bus",
      duration: "28 mins",
      image: {
        src: "/podcast-history-heroes.jpg",
        alt: "History's Heroes podcast"
      },
      link: "/audio/play/p0l5j0sh"
    },
    {
      id: "p0l5b8p6",
      title: "Lives Less Ordinary",
      subtitle: "Swimming blind: my journey to self-acceptance",
      duration: "38 mins",
      image: {
        src: "/podcast-lives-less-ordinary.jpg",
        alt: "Lives Less Ordinary podcast"
      },
      link: "/audio/play/p0l5b8p6"
    },
    {
      id: "p0l5b8p7",
      title: "The Documentary Podcast",
      subtitle: "Assignment: New Zealand - what counts as Māori equality",
      duration: "27 mins",
      image: {
        src: "/podcast-documentary.jpg",
        alt: "Documentary Podcast"
      },
      link: "/audio/play/p0l5b8p7"
    },
    {
      id: "p0l5b8p8",
      title: "CrowdScience",
      subtitle: "Why do animals swallow rocks?",
      duration: "29 mins",
      image: {
        src: "/podcast-crowdscience.jpg",
        alt: "CrowdScience podcast"
      },
      link: "/audio/play/p0l5b8p8"
    },
    {
      id: "p0l5b8p9",
      title: "Lives Less Ordinary",
      subtitle: "Rewind: The woman who wanted to bring down apartheid from within",
      duration: "41 mins",
      image: {
        src: "/podcast-lives-less-ordinary-2.jpg",
        alt: "Lives Less Ordinary podcast"
      },
      link: "/audio/play/p0l5b8p9"
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
        src: "/liverpool-player.jpg",
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
        src: "/apple-china-manufacturing.jpg",
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
