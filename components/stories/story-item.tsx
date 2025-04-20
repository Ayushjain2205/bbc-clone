import type React from "react"
import { AbsoluteFill, Img } from "remotion"
import type { Story } from "./stories-data"

interface StoryItemProps {
  story: Story
  progress: number
}

export const StoryItem: React.FC<StoryItemProps> = ({ story }) => {
  return (
    <AbsoluteFill>
      {/* Background image */}
      <AbsoluteFill>
        <Img
          src={story.imageUrl}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Dark overlay for better text readability - much darker now */}
        <AbsoluteFill
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.9) 60%)",
          }}
        />
      </AbsoluteFill>

      {/* BBC Logo */}
      <div className="absolute top-8 left-8 flex">
        <div className="bg-black w-10 h-10 flex items-center justify-center">
          <span className="text-white font-bold text-xl">B</span>
        </div>
        <div className="bg-black w-10 h-10 flex items-center justify-center ml-0.5">
          <span className="text-white font-bold text-xl">B</span>
        </div>
        <div className="bg-black w-10 h-10 flex items-center justify-center ml-0.5">
          <span className="text-white font-bold text-xl">C</span>
        </div>
      </div>

      {/* Story content - no animation, always visible, much larger text */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-black bg-opacity-50">
        <div className="mb-4 text-base font-bold uppercase tracking-wider text-red-500">{story.category}</div>
        <h2 className="text-5xl font-merriweather font-bold mb-6 leading-tight">{story.title}</h2>
        <p className="text-2xl mb-8 font-merriweather leading-relaxed">{story.description}</p>
        <div className="text-base opacity-80 mb-4">{story.time}</div>
      </div>
    </AbsoluteFill>
  )
}
