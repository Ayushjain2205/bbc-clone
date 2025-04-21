"use client"

import Image from "next/image"
import Link from "next/link"
import { Bookmark, ChevronLeft, ChevronRight } from "lucide-react"
import { newsData } from "@/data/news"

interface PodcastCardProps {
  title: string
  subtitle: string
  duration: string
  image: {
    src: string
    alt: string
  }
}

const BBCLogo = () => (
  <div className="flex">
    <div className="bg-black w-4 h-4 flex items-center justify-center">
      <span className="text-white font-bold text-[10px]">B</span>
    </div>
    <div className="bg-black w-4 h-4 flex items-center justify-center ml-[1px]">
      <span className="text-white font-bold text-[10px]">B</span>
    </div>
    <div className="bg-black w-4 h-4 flex items-center justify-center ml-[1px]">
      <span className="text-white font-bold text-[10px]">C</span>
    </div>
  </div>
)

const AudioWaveform = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="2" height="8" x="1" y="4" fill="white" />
    <rect width="2" height="10" x="4" y="3" fill="white" />
    <rect width="2" height="12" x="7" y="2" fill="white" />
    <rect width="2" height="8" x="10" y="4" fill="white" />
    <rect width="2" height="10" x="13" y="3" fill="white" />
  </svg>
)

const PodcastCard = ({ title, subtitle, duration, image }: PodcastCardProps) => (
  <div className="min-w-[190px] w-[190px] flex-shrink-0">
      <div className="relative aspect-square mb-2">
        <Image
          src={image.src}
          width={190}
          height={190}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
          <AudioWaveform />
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-[13px] text-gray-600 leading-tight font-roboto">{title}</h3>
        <p className="text-[15px] leading-tight font-bold font-merriweather">{subtitle}</p>
      </div>
      <div className="flex items-center mt-2 text-xs text-gray-600">
        <div className="flex items-center">
          <button className="w-6 h-6 hover:bg-gray-100 rounded-full flex items-center justify-center mr-1.5">
            <Bookmark className="w-3.5 h-3.5" />
          </button>
          <span>Save</span>
        </div>
        <span className="ml-2">{duration}</span>
      </div>
  </div>
)

export const AudioSection = () => {
  return (
    <div className="mt-12 border-t-2 border-black py-8">
      <div className="mb-6">
        <h2 className="text-base uppercase font-roboto font-bold">THIS WEEK IN AUDIO</h2>
      </div>
      <div className="flex justify-end mb-4">
        <div className="flex">
          <button className="w-10 h-10 bg-gray-200 flex items-center justify-center">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button className="w-10 h-10 bg-gray-800 flex items-center justify-center ml-1">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-5 pb-4 -mx-1 px-1">
        {newsData.weeklyAudio.map((podcast) => (
          <PodcastCard key={podcast.id} {...podcast} />
        ))}
      </div>
    </div>
  )
}
