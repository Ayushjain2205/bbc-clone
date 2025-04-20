"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Player, type PlayerRef } from "@remotion/player"
import { X } from "lucide-react"
import { TopStoriesComposition } from "./top-stories-composition"
import { storiesData } from "./stories-data"

interface StoriesOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export const StoriesOverlay: React.FC<StoriesOverlayProps> = ({ isOpen, onClose }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [playerRef, setPlayerRef] = useState<PlayerRef>(null)

  const storyDuration = 10 // seconds per story (increased to give more time to read)
  const totalStories = storiesData.length

  // Handle story navigation
  const goToNextStory = useCallback(() => {
    if (currentStoryIndex < totalStories - 1) {
      setCurrentStoryIndex((prev) => prev + 1)
    } else {
      onClose() // Close overlay when all stories are viewed
    }
  }, [currentStoryIndex, totalStories, onClose])

  const goToPrevStory = useCallback(() => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1)
    }
  }, [currentStoryIndex])

  // Reset to first story when overlay is opened
  useEffect(() => {
    if (isOpen) {
      setCurrentStoryIndex(0)
      setIsPaused(false)
    }
  }, [isOpen])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "ArrowRight" || e.key === " ") {
        goToNextStory()
      } else if (e.key === "ArrowLeft") {
        goToPrevStory()
      } else if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, goToNextStory, goToPrevStory, onClose])

  // Handle automatic progression to next story
  useEffect(() => {
    if (!isOpen || isPaused) return

    const timer = setTimeout(() => {
      goToNextStory()
    }, storyDuration * 1000)

    return () => clearTimeout(timer)
  }, [isOpen, currentStoryIndex, isPaused, goToNextStory])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[80vh] bg-black">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Story progress indicators */}
        <div className="absolute top-2 left-0 right-0 z-40 flex px-2 gap-1">
          {Array.from({ length: totalStories }).map((_, idx) => (
            <div key={idx} className="h-2 bg-white bg-opacity-30 flex-1 rounded-full overflow-hidden">
              <div
                className={`h-full bg-white ${idx === currentStoryIndex ? "animate-progress" : idx < currentStoryIndex ? "w-full" : "w-0"}`}
                style={idx === currentStoryIndex ? { animationDuration: `${storyDuration}s` } : {}}
              />
            </div>
          ))}
        </div>

        {/* Story navigation areas */}
        <div className="absolute inset-0 z-30 flex">
          <div className="w-1/3 h-full cursor-pointer" onClick={goToPrevStory} />
          <div className="w-1/3 h-full cursor-pointer" onClick={() => setIsPaused(!isPaused)} />
          <div className="w-1/3 h-full cursor-pointer" onClick={goToNextStory} />
        </div>

        {/* Remotion player */}
        <Player
          ref={setPlayerRef}
          component={TopStoriesComposition}
          inputProps={{ storyIndex: currentStoryIndex, stories: storiesData }}
          durationInFrames={storyDuration * 30} // 30fps * seconds
          compositionWidth={1080}
          compositionHeight={1920}
          fps={30}
          style={{ width: "100%", height: "100%" }}
          controls={false}
          loop={false}
          autoPlay={true}
          showVolumeControls={false}
          spaceKeyToPlayOrPause={false}
          doubleClickToFullscreen={false}
          clickToPlay={false}
          pauseOnBlur={false}
          pauseOnUnmount={true}
        />
      </div>
    </div>
  )
}
