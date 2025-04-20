import type React from "react"
import { AbsoluteFill, Sequence } from "remotion"
import { StoryItem } from "./story-item"
import type { Story } from "./stories-data"

interface TopStoriesCompositionProps {
  storyIndex: number
  stories: Story[]
}

export const TopStoriesComposition: React.FC<TopStoriesCompositionProps> = ({ storyIndex, stories }) => {
  // Get current story
  const currentStory = stories[storyIndex]

  if (!currentStory) return null

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {/* Current story - no animation to ensure consistent display */}
      <Sequence from={0}>
        <StoryItem story={currentStory} progress={1} />
      </Sequence>
    </AbsoluteFill>
  )
}
