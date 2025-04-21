"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Play, ArrowRight, CircleDot, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { EditorsPicks } from '@/components/editors-picks/EditorsPicks';
import { useState } from "react"
import { StoriesOverlay } from "@/components/stories/stories-overlay"
import { newsData } from "@/data/news"
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <Link href="#" className="group">
                <Image
                  src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/3faa/live/50f03c10-1ddb-11f0-b265-abe347419ae3.jpg.webp"
                  width={500}
                  height={300}
                  alt="Ukraine Russia meeting"
                  className="w-full h-auto"
                />
                <h2 className="text-xl font-merriweather font-bold mt-2 group-hover:underline">
                  Rosenberg: Is Putin&apos;s &apos;Easter truce&apos; cause for scepticism or chance for peace?
                </h2>
                <p className="text-base font-merriweather mt-2">
                  Ukraine and Russia have accused each other of violating a 36-hour truce, but it comes as diplomatic
                  efforts pick up, Russia Editor Steve Rosenberg writes.
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>10 hrs ago</span>
                  <span className="mx-2">|</span>
                  <span>Europe</span>
                </div>
              </Link>
            </div>

            <div className="mb-6">
              <Link href="#" className="group">
                <Image
                  src="/ukraine-destruction.jpg"
                  width={500}
                  height={300}
                  alt="Ukraine destruction"
                  className="w-full h-auto"
                />
                <h2 className="text-xl font-merriweather font-bold mt-2 group-hover:underline">
                  Ukraine and Russia trade blame for breaking &apos;Easter truce&apos;
                </h2>
                <p className="text-base font-merriweather mt-2">
                  Kyiv says Russian shelling has increased, as Moscow accuses Ukraine of launching hundreds of drone
                  attacks.
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>47 mins ago</span>
                  <span className="mx-2">|</span>
                  <span>Europe</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Middle Column */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <Link href="#" className="group">
                <Image
                  src="/gaza-ambulance.jpg"
                  width={600}
                  height={400}
                  alt="Gaza ambulance with red circles highlighting details"
                  className="w-full h-auto"
                />
                <h2 className="text-2xl font-merriweather font-bold mt-2 group-hover:underline">
                  &apos;Professional failures&apos; led to killing of Gaza medics, IDF inquiry says
                </h2>
                <p className="text-base font-merriweather mt-2">
                  Fourteen emergency workers and a UN worker were killed when the Israeli military opened fire on a
                  convoy of vehicles in Gaza last month.
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>17 mins ago</span>
                  <span className="mx-2">|</span>
                  <span>Middle East</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3">
            <div className="mb-6">
              <Link href="#" className="group">
                <h2 className="text-xl font-merriweather font-bold group-hover:underline">
                  DHL suspends high value US deliveries over tariffs
                </h2>
                <p className="text-base font-merriweather mt-2">
                  The postal giant will stop shipping packages to American consumers after a rise in red tape at
                  customs.
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>12 hrs ago</span>
                  <span className="mx-2">|</span>
                  <span>Business</span>
                </div>
              </Link>
            </div>

            <div className="mb-6">
              <Link href="#" className="group">
                <div className="flex items-center">
                  <div className="mr-2">▶</div>
                  <h2 className="text-xl font-merriweather font-bold group-hover:underline">
                    Celebrations usher in the dawn of Easter Sunday
                  </h2>
                </div>
                <p className="text-base font-merriweather mt-2">
                  The most important date in the Christian calendar is being marked around the world.
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>13 hrs ago</span>
                  <span className="mx-2">|</span>
                  <span>Europe</span>
                </div>
              </Link>
            </div>

            <div className="mb-6">
              <Link href="#" className="group">
                <h2 className="text-xl font-merriweather font-bold group-hover:underline">
                  Inside the rural Texas town where Elon Musk is basing his business empire
                </h2>
                <p className="text-base font-merriweather mt-2">
                  The tycoon and Donald Trump adviser has moved his businesses from California to a mostly rural central
                  Texas county.
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>21 hrs ago</span>
                  <span className="mx-2">|</span>
                  <span>US & Canada</span>
                </div>
              </Link>
            </div>

            <div className="mb-6">
              <Link href="#" className="group">
                <h2 className="text-xl font-merriweather font-bold group-hover:underline">
                  &apos;Why I hesitate to tell people I&apos;m a Gypsy&apos;
                </h2>
                <p className="text-base font-merriweather mt-2">
                  Romany women share their experiences of hiding their heritage for fear of prejudice.
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>21 hrs ago</span>
                  <span className="mx-2">|</span>
                  <span>UK</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Weekend Reads Section */}
        <div className="mt-8 border-t-2 border-black py-6">
          <h2 className="text-base uppercase font-roboto font-bold mb-6">WEEKEND READS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Link href="#" className="group">
                <Image
                  src="https://ichef.bbci.co.uk/images/ic/1920x1080/p0l3l1vq.jpg.webp"
                  width={600}
                  height={400}
                  alt="Police officers with suspects from the Great Train Robbery"
                  className="w-full h-auto"
                />
                <h3 className="text-xl font-merriweather font-bold mt-3 group-hover:underline">
                  The men behind the Great Train Robbery
                </h3>
                <p className="text-base font-merriweather mt-2">
                  Twelve suspects were put on trial in April 1964. More than a decade later, several of them talked to
                  the BBC about the notorious heist.
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>6 days ago</span>
                  <span className="mx-2">|</span>
                  <span>Culture</span>
                </div>
              </Link>
            </div>
            <div>
              <Link href="#" className="group">
                <Image
                  src="https://ichef.bbci.co.uk/images/ic/1024xn/p0l56fjv.jpg.webp"
                  width={600}
                  height={400}
                  alt="Stately home with lake from Pride and Prejudice"
                  className="w-full h-auto"
                />
                <h3 className="text-xl font-merriweather font-bold mt-3 group-hover:underline">
                  The stunning landscapes behind Pride and Prejudice
                </h3>
                <p className="text-base font-merriweather mt-2">
                  As the UK celebrates Jane Austen's 250th birthday, there's never been a better time to explore the
                  picture-perfect villages connected to her most famous novel.
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>7 hrs ago</span>
                  <span className="mx-2">|</span>
                  <span>Travel</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

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
            <div>
              <div className="flex items-center border-b-2 border-black pb-2 mb-4">
                <h2 className="text-base uppercase font-roboto font-bold">US & CANADA NEWS</h2>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>

              <div className="mb-6">
                <Link href="#" className="group block">
                  <Image
                    src="/anti-trump-protests.jpg"
                    width={300}
                    height={200}
                    alt="Anti-Trump protests"
                    className="w-full h-auto mb-2"
                  />
                  <h3 className="text-lg font-merriweather font-bold group-hover:underline">
                    Thousands join anti-Trump protests across US
                  </h3>
                  <p className="text-sm font-merriweather mt-1">
                    Demonstrations, taking place on the 250th anniversary of the start of the American Revolutionary
                    War, addressed a range of grievances.
                  </p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span>21 hrs ago</span>
                    <span className="mx-2">|</span>
                    <span>US & Canada</span>
                  </div>
                </Link>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200">
                <Link href="#" className="group block">
                  <h3 className="text-base font-merriweather font-bold group-hover:underline">
                    US Supreme Court halts deportation of detained Venezuelans
                  </h3>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span>24 hrs ago</span>
                    <span className="mx-2">|</span>
                    <span>US & Canada</span>
                  </div>
                </Link>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200">
                <Link href="#" className="group block">
                  <h3 className="text-base font-merriweather font-bold group-hover:underline">
                    Why everyone is suddenly so interested in US bond markets
                  </h3>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span>2 days ago</span>
                    <span className="mx-2">|</span>
                    <span>US & Canada</span>
                  </div>
                </Link>
              </div>

              <div className="mb-4">
                <Link href="#" className="group block">
                  <h3 className="text-base font-merriweather font-bold group-hover:underline">
                    Anxiety at US colleges as foreign students are detained and visas revoked
                  </h3>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span>2 days ago</span>
                    <span className="mx-2">|</span>
                    <span>US & Canada</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* MORE WORLD NEWS */}
            <div>
              <div className="flex items-center border-b-2 border-black pb-2 mb-4">
                <h2 className="text-base uppercase font-roboto font-bold">MORE WORLD NEWS</h2>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>

              <div className="mb-6">
                <Link href="#" className="group block">
                  <Image
                    src="/south-african-politician.jpg"
                    width={300}
                    height={200}
                    alt="South African politician"
                    className="w-full h-auto mb-2"
                  />
                  <h3 className="text-lg font-merriweather font-bold group-hover:underline">
                    South African politician condemned for visiting fugitive pastor
                  </h3>
                  <p className="text-sm font-merriweather mt-1">
                    Top MK official Floyd Shivambu attended an Easter service at Shepherd Bushiri's church in Malawi.
                  </p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span>4 hrs ago</span>
                    <span className="mx-2">|</span>
                    <span>Africa</span>
                  </div>
                </Link>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200">
                <Link href="#" className="group block">
                  <h3 className="text-base font-merriweather font-bold group-hover:underline">
                    Pope wishes worshippers Happy Easter after serious illness
                  </h3>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span>9 hrs ago</span>
                    <span className="mx-2">|</span>
                    <span>Europe</span>
                  </div>
                </Link>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200">
                <Link href="#" className="group block">
                  <h3 className="text-base font-merriweather font-bold group-hover:underline">
                    DR Congo bans ex-president's party over alleged rebel links
                  </h3>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span>10 hrs ago</span>
                    <span className="mx-2">|</span>
                    <span>Africa</span>
                  </div>
                </Link>
              </div>

              <div className="mb-4">
                <Link href="#" className="group block">
                  <h3 className="text-base font-merriweather font-bold group-hover:underline">
                    Attacks continue despite Putin's 'Easter truce' pledge, Zelensky says
                  </h3>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span>11 hrs ago</span>
                    <span className="mx-2">|</span>
                    <span>Europe</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* SPORT */}
            <div>
              <div className="flex items-center border-b-2 border-black pb-2 mb-4">
                <h2 className="text-base uppercase font-roboto font-bold">SPORT</h2>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>

              <div className="mb-6">
                <Link href="#" className="group block">
                  <Image
                    src={newsData.sports.featured.image.src}
                    width={300}
                    height={200}
                    alt={newsData.sports.featured.image.alt}
                    className="w-full h-auto mb-2"
                  />
                  <h3 className="text-lg font-merriweather font-bold group-hover:underline">
                    {newsData.sports.featured.title}
                  </h3>
                </Link>
              </div>

              {newsData.sports.articles.map((story, index) => (
                <div key={story.id} className="mb-4 pb-4 border-b border-gray-200">
                  <Link href="#" className="group block">
                    {story.isLive ? (
                      <div className="flex items-center">
                        <CircleDot className="w-4 h-4 text-red-600 mr-2" />
                        <h3 className="text-base font-merriweather font-bold group-hover:underline">
                          {story.timeAgo.toUpperCase()} {story.title}
                        </h3>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-base font-merriweather font-bold group-hover:underline">
                          {story.title}
                        </h3>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <span>{story.timeAgo}</span>
                          <span className="mx-2">|</span>
                          <span>{story.category}</span>
                        </div>
                      </>
                    )}
                  </Link>
                </div>
              ))}

              {newsData.topStories.map((story) => (
                <div key={story.id} className="mb-4">
                  <Link href="#" className="group block">
                    <h3 className="text-base font-merriweather font-bold group-hover:underline">
                      {story.title}
                    </h3>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <span>{story.timeAgo}</span>
                      <span className="mx-2">|</span>
                      <span>{story.category}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* BUSINESS */}
            <div>
              <div className="flex items-center border-b-2 border-black pb-2 mb-4">
                <h2 className="text-base uppercase font-roboto font-bold">BUSINESS</h2>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>

              {newsData.business.map((story, index) => (
                <div key={story.id} className={`mb-${index === 0 ? '6' : '4'} ${index > 0 ? 'pb-4 border-b border-gray-200' : ''}`}>
                  <Link href="#" className="group block">
                    {story.image && (
                      <Image
                        src={story.image.src}
                        width={300}
                        height={200}
                        alt={story.image.alt}
                        className="w-full h-auto mb-2"
                      />
                    )}
                    <h3 className={`${index === 0 ? 'text-lg' : 'text-base'} font-merriweather font-bold group-hover:underline`}>
                      {story.title}
                    </h3>
                    {story.description && (
                      <p className="text-sm font-merriweather mt-1">
                        {story.description}
                      </p>
                    )}
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <span>{story.timeAgo}</span>
                      <span className="mx-2">|</span>
                      <span>{story.category}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
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
