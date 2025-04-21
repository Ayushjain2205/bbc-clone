export interface Story {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  time: string
}

export const storiesData: Story[] = [
  {
    id: "1",
    title: "Ukraine and Russia trade blame for breaking 'Easter truce'",
    description:
      "Kyiv says Russian shelling has increased, as Moscow accuses Ukraine of launching hundreds of drone attacks.",
    imageUrl: "/ukraine-destruction.jpg",
    category: "Europe",
    time: "47 mins ago",
  },
  {
    id: "2",
    title: "'Professional failures' led to killing of Gaza medics",
    description:
      "Fourteen emergency workers and a UN worker were killed when the Israeli military opened fire on a convoy of vehicles in Gaza last month.",
    imageUrl: "/gaza-ambulance.jpg",
    category: "Middle East",
    time: "17 mins ago",
  },
  {
    id: "3",
    title: "Inside the rural Texas town where Elon Musk is basing his business empire",
    description:
      "The tycoon and Donald Trump adviser has moved his businesses from California to a mostly rural central Texas county.",
    imageUrl: "/aftermath-cityscape.png",
    category: "US & Canada",
    time: "21 hrs ago",
  },
  {
    id: "4",
    title: "The men behind the Great Train Robbery",
    description:
      "Twelve suspects were put on trial in April 1964. More than a decade later, several of them talked to the BBC about the notorious heist.",
    imageUrl: "/great-train-robbery.jpg",
    category: "Culture",
    time: "6 days ago",
  },
  {
    id: "5",
    title: "Designed in US, made in China: Why Apple is stuck",
    description:
      "China sits at the heart of Apple's supply chain - and it has benefited hugely from it. Can they break up?",
    imageUrl: "https://ichef.bbci.co.uk/news/1536/cpsprodpb/f86a/live/3d6b7190-16a2-11f0-b2d2-fdaed6fdfe2b.jpg.webp",
    category: "Business",
    time: "7 days ago",
  },
]
