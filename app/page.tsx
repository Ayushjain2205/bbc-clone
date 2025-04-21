"use client"

import Link from "next/link"
import NewsGrid from "@/components/stories/news-grid";
import WeekendReads from "@/components/stories/weekend-reads";
import USCanadaNews from "@/components/stories/us-canada-news";
import WorldNews from "@/components/stories/world-news";
import SportNews from "@/components/stories/sport-news";
import BusinessNews from "@/components/stories/business-news";
import { ChevronDown, Search } from "lucide-react"
import { EditorsPicks } from '@/components/editors-picks/EditorsPicks';
import { useState } from "react"
import { StoriesOverlay } from "@/components/stories/stories-overlay"
import { AudioSection } from "@/components/audio/audio-section"
import { Navbar } from "@/components/navbar/navbar"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [storiesOpen, setStoriesOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white relative">
      {/* Stories Overlay */}
      <StoriesOverlay isOpen={storiesOpen} onClose={() => setStoriesOpen(false)} />

      <Navbar 
        onMenuToggle={setMenuOpen}
        onStoriesOpen={() => setStoriesOpen(true)}
        isStoriesOpen={storiesOpen}
      />

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40"
          style={{ top: "var(--header-height, 56px)" }}
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 bottom-0 w-[320px] bg-white z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ top: "var(--header-height, 56px)" }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200">
            <div className="flex">
              <input
                type="text"
                placeholder="Search news, topics and more"
                className="flex-1 p-3 border border-r-0 border-gray-300 focus:outline-none"
              />
              <button className="bg-black p-3">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <nav>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>Home</span>
              </Link>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>News</span>
                <ChevronDown className="w-5 h-5" />
              </Link>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>Sport</span>
              </Link>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>Business</span>
                <ChevronDown className="w-5 h-5" />
              </Link>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>Innovation</span>
                <ChevronDown className="w-5 h-5" />
              </Link>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>Culture</span>
                <ChevronDown className="w-5 h-5" />
              </Link>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>Arts</span>
                <ChevronDown className="w-5 h-5" />
              </Link>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>Travel</span>
                <ChevronDown className="w-5 h-5" />
              </Link>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>Earth</span>
                <ChevronDown className="w-5 h-5" />
              </Link>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>Audio</span>
                <ChevronDown className="w-5 h-5" />
              </Link>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>Video</span>
              </Link>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>Live</span>
                <ChevronDown className="w-5 h-5" />
              </Link>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>Weather</span>
              </Link>
              <Link href="#" className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
                <span>Newsletters</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Navigation - This will be covered by the menu when it's open */}
      <nav className={`border-b border-gray-200 relative ${menuOpen ? "z-30" : "z-40"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 py-3 overflow-x-auto">
            <Link href="#" className="text-sm font-bold border-b-2 border-black pb-2">
              Home
            </Link>
            <Link href="#" className="text-sm font-bold hover:border-b-2 hover:border-black pb-2">
              News
            </Link>
            <Link href="#" className="text-sm font-bold hover:border-b-2 hover:border-black pb-2">
              Sport
            </Link>
            <Link href="#" className="text-sm font-bold hover:border-b-2 hover:border-black pb-2">
              Business
            </Link>
            <Link href="#" className="text-sm font-bold hover:border-b-2 hover:border-black pb-2">
              Innovation
            </Link>
            <Link href="#" className="text-sm font-bold hover:border-b-2 hover:border-black pb-2">
              Culture
            </Link>
            <Link href="#" className="text-sm font-bold hover:border-b-2 hover:border-black pb-2">
              Arts
            </Link>
            <Link href="#" className="text-sm font-bold hover:border-b-2 hover:border-black pb-2">
              Travel
            </Link>
            <Link href="#" className="text-sm font-bold hover:border-b-2 hover:border-black pb-2">
              Earth
            </Link>
            <Link href="#" className="text-sm font-bold hover:border-b-2 hover:border-black pb-2">
              Audio
            </Link>
            <Link href="#" className="text-sm font-bold hover:border-b-2 hover:border-black pb-2">
              Video
            </Link>
            <Link href="#" className="text-sm font-bold hover:border-b-2 hover:border-black pb-2">
              Live
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className={`container mx-auto px-4 py-6 relative ${menuOpen ? "z-30" : "z-40"}`}>
        <NewsGrid />

        {/* Weekend Reads Section */}
        <WeekendReads />

        <AudioSection />

        {/* More News Section */}
        <div className="mt-12 border-t-2 border-black py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-base uppercase font-roboto font-bold">MORE NEWS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Link href="#" className="group block">
                <h3 className="text-xl font-merriweather font-bold group-hover:underline">Breaking News Story 1</h3>
                <p className="text-base font-merriweather mt-2">Details about the breaking news story.</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>1 hr ago</span>
                  <span className="mx-2">|</span>
                  <span>World</span>
                </div>
              </Link>
            </div>

            <div>
              <Link href="#" className="group block">
                <h3 className="text-xl font-merriweather font-bold group-hover:underline">
                  Another Important Headline
                </h3>
                <p className="text-base font-merriweather mt-2">Summary of the important news.</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>2 hrs ago</span>
                  <span className="mx-2">|</span>
                  <span>Politics</span>
                </div>
              </Link>
            </div>

            <div>
              <Link href="#" className="group block">
                <h3 className="text-xl font-merriweather font-bold group-hover:underline">Developing Story Update</h3>
                <p className="text-base font-merriweather mt-2">Latest updates on the developing situation.</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>3 hrs ago</span>
                  <span className="mx-2">|</span>
                  <span>Technology</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Editor's Picks Section */}
        <EditorsPicks />

        {/* News Categories Section */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* US & CANADA NEWS */}
            <USCanadaNews />

            <WorldNews />

            <SportNews />

            <BusinessNews />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} BBC News. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
