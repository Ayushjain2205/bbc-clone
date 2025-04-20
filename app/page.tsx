"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Search, X, ChevronDown, ChevronLeft, ChevronRight, Play, ArrowRight, CircleDot } from "lucide-react"
import { useState } from "react"
import { StoriesOverlay } from "@/components/stories/stories-overlay"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [storiesOpen, setStoriesOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white relative">
      {/* Stories Overlay */}
      <StoriesOverlay isOpen={storiesOpen} onClose={() => setStoriesOpen(false)} />

      {/* Header */}
      <header className="border-b border-gray-200 relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center space-x-1">
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <>
                  <Menu className="w-5 h-5" />
                  <Search className="w-5 h-5" />
                </>
              )}
            </button>
            <div className="flex items-center justify-center">
              <Link href="/" className="flex items-center">
                <div className="flex">
                  <div className="bg-black w-8 h-8 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <div className="bg-black w-8 h-8 flex items-center justify-center ml-0.5">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <div className="bg-black w-8 h-8 flex items-center justify-center ml-0.5">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {!storiesOpen && (
                <button
                  onClick={() => setStoriesOpen(true)}
                  className="bg-black text-white px-3 py-1.5 text-sm font-bold"
                >
                  View Top
                </button>
              )}
              <button className="text-black text-sm font-bold">Sign In</button>
            </div>
          </div>
        </div>
      </header>

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
                  src="/ukraine-russia-meeting.jpg"
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
                  src="/great-train-robbery.jpg"
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
                  src="/pride-prejudice-landscape.jpg"
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

        {/* This Week in Audio Section */}
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
            <div className="min-w-[190px] w-[190px] flex-shrink-0">
              <Link href="#" className="group block">
                <div className="relative aspect-square mb-2">
                  <Image
                    src="/podcast-vince-mcmahon.jpg"
                    width={190}
                    height={190}
                    alt="Vince McMahon podcast"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-white px-1">
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
                  </div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="2" height="8" x="1" y="4" fill="white" />
                      <rect width="2" height="10" x="4" y="3" fill="white" />
                      <rect width="2" height="12" x="7" y="2" fill="white" />
                      <rect width="2" height="8" x="10" y="4" fill="white" />
                      <rect width="2" height="10" x="13" y="3" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[13px] text-gray-600 leading-tight font-roboto">Good Bad Billionaire</h3>
                  <p className="text-[15px] leading-tight font-bold font-merriweather">
                    Vince McMahon: Wrestling's ringmaster
                  </p>
                </div>
                <div className="flex items-center mt-2 text-xs text-gray-600">
                  <div className="flex items-center">
                    <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                        <polyline points="7 3 7 8 15 8"></polyline>
                      </svg>
                    </button>
                    <span>Save</span>
                  </div>
                  <span className="ml-2">48 mins</span>
                </div>
              </Link>
            </div>

            <div className="min-w-[190px] w-[190px] flex-shrink-0">
              <Link href="#" className="group block">
                <div className="relative aspect-square mb-2">
                  <Image
                    src="/podcast-climate-question.jpg"
                    width={190}
                    height={190}
                    alt="Climate Question podcast"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-white px-1">
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
                  </div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="2" height="8" x="1" y="4" fill="white" />
                      <rect width="2" height="10" x="4" y="3" fill="white" />
                      <rect width="2" height="12" x="7" y="2" fill="white" />
                      <rect width="2" height="8" x="10" y="4" fill="white" />
                      <rect width="2" height="10" x="13" y="3" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[13px] text-gray-600 leading-tight font-roboto">The Climate Question</h3>
                  <p className="text-[15px] leading-tight font-bold font-merriweather">
                    How can we cut the world's shipping emissions?
                  </p>
                </div>
                <div className="flex items-center mt-2 text-xs text-gray-600">
                  <div className="flex items-center">
                    <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                        <polyline points="7 3 7 8 15 8"></polyline>
                      </svg>
                    </button>
                    <span>Save</span>
                  </div>
                  <span className="ml-2">27 mins</span>
                </div>
              </Link>
            </div>

            <div className="min-w-[190px] w-[190px] flex-shrink-0">
              <Link href="#" className="group block">
                <div className="relative aspect-square mb-2">
                  <Image
                    src="/podcast-history-heroes.jpg"
                    width={190}
                    height={190}
                    alt="History's Heroes podcast"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-white px-1">
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
                  </div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="2" height="8" x="1" y="4" fill="white" />
                      <rect width="2" height="10" x="4" y="3" fill="white" />
                      <rect width="2" height="12" x="7" y="2" fill="white" />
                      <rect width="2" height="8" x="10" y="4" fill="white" />
                      <rect width="2" height="10" x="13" y="3" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[13px] text-gray-600 leading-tight font-roboto">History's Heroes</h3>
                  <p className="text-[15px] leading-tight font-bold font-merriweather">
                    Leif Larsen and the Shetland Bus
                  </p>
                </div>
                <div className="flex items-center mt-2 text-xs text-gray-600">
                  <div className="flex items-center">
                    <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                        <polyline points="7 3 7 8 15 8"></polyline>
                      </svg>
                    </button>
                    <span>Save</span>
                  </div>
                  <span className="ml-2">28 mins</span>
                </div>
              </Link>
            </div>

            <div className="min-w-[190px] w-[190px] flex-shrink-0">
              <Link href="#" className="group block">
                <div className="relative aspect-square mb-2">
                  <Image
                    src="/podcast-lives-less-ordinary.jpg"
                    width={190}
                    height={190}
                    alt="Lives Less Ordinary podcast"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-white px-1">
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
                  </div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="2" height="8" x="1" y="4" fill="white" />
                      <rect width="2" height="10" x="4" y="3" fill="white" />
                      <rect width="2" height="12" x="7" y="2" fill="white" />
                      <rect width="2" height="8" x="10" y="4" fill="white" />
                      <rect width="2" height="10" x="13" y="3" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[13px] text-gray-600 leading-tight font-roboto">Lives Less Ordinary</h3>
                  <p className="text-[15px] leading-tight font-bold font-merriweather">
                    Swimming blind: my journey to self-acceptance
                  </p>
                </div>
                <div className="flex items-center mt-2 text-xs text-gray-600">
                  <div className="flex items-center">
                    <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                      </svg>
                    </button>
                    <span>Save</span>
                  </div>
                  <span className="ml-2">38 mins</span>
                </div>
              </Link>
            </div>

            <div className="min-w-[190px] w-[190px] flex-shrink-0">
              <Link href="#" className="group block">
                <div className="relative aspect-square mb-2">
                  <Image
                    src="/podcast-documentary.jpg"
                    width={190}
                    height={190}
                    alt="Documentary Podcast"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-white px-1">
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
                  </div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="2" height="8" x="1" y="4" fill="white" />
                      <rect width="2" height="10" x="4" y="3" fill="white" />
                      <rect width="2" height="12" x="7" y="2" fill="white" />
                      <rect width="2" height="8" x="10" y="4" fill="white" />
                      <rect width="2" height="10" x="13" y="3" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[13px] text-gray-600 leading-tight font-roboto">The Documentary Podcast</h3>
                  <p className="text-[15px] leading-tight font-bold font-merriweather">
                    Assignment: New Zealand - what counts as Māori equality
                  </p>
                </div>
                <div className="flex items-center mt-2 text-xs text-gray-600">
                  <div className="flex items-center">
                    <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                      </svg>
                    </button>
                    <span>Save</span>
                  </div>
                  <span className="ml-2">27 mins</span>
                </div>
              </Link>
            </div>

            <div className="min-w-[190px] w-[190px] flex-shrink-0">
              <Link href="#" className="group block">
                <div className="relative aspect-square mb-2">
                  <Image
                    src="/podcast-crowdscience.jpg"
                    width={190}
                    height={190}
                    alt="CrowdScience podcast"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-white px-1">
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
                  </div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="2" height="8" x="1" y="4" fill="white" />
                      <rect width="2" height="10" x="4" y="3" fill="white" />
                      <rect width="2" height="12" x="7" y="2" fill="white" />
                      <rect width="2" height="8" x="10" y="4" fill="white" />
                      <rect width="2" height="10" x="13" y="3" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[13px] text-gray-600 leading-tight font-roboto">CrowdScience</h3>
                  <p className="text-[15px] leading-tight font-bold font-merriweather">Why do animals swallow rocks?</p>
                </div>
                <div className="flex items-center mt-2 text-xs text-gray-600">
                  <div className="flex items-center">
                    <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                      </svg>
                    </button>
                    <span>Save</span>
                  </div>
                  <span className="ml-2">29 mins</span>
                </div>
              </Link>
            </div>

            <div className="min-w-[190px] w-[190px] flex-shrink-0">
              <Link href="#" className="group block">
                <div className="relative aspect-square mb-2">
                  <Image
                    src="/podcast-lives-less-ordinary-2.jpg"
                    width={190}
                    height={190}
                    alt="Lives Less Ordinary podcast"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-white px-1">
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
                  </div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="2" height="8" x="1" y="4" fill="white" />
                      <rect width="2" height="10" x="4" y="3" fill="white" />
                      <rect width="2" height="12" x="7" y="2" fill="white" />
                      <rect width="2" height="8" x="10" y="4" fill="white" />
                      <rect width="2" height="10" x="13" y="3" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[13px] text-gray-600 leading-tight font-roboto">Lives Less Ordinary</h3>
                  <p className="text-[15px] leading-tight font-bold font-merriweather">
                    Rewind: The woman who wanted to bring down apartheid from within
                  </p>
                </div>
                <div className="flex items-center mt-2 text-xs text-gray-600">
                  <div className="flex items-center">
                    <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                      </svg>
                    </button>
                    <span>Save</span>
                  </div>
                  <span className="ml-2">41 mins</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

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
        <div className="mt-12 border-t-2 border-black bg-black text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-2">
              <h2 className="text-base uppercase font-roboto font-bold">EDITOR'S PICKS</h2>
              <div className="flex">
                <button className="w-10 h-10 bg-transparent flex items-center justify-center">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button className="w-10 h-10 bg-transparent flex items-center justify-center ml-1">
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="flex overflow-x-auto space-x-4 pb-4">
              <div className="min-w-[250px] w-[250px] flex-shrink-0">
                <Link href="#" className="group block">
                  <div className="relative">
                    <Image
                      src="/morning-lark-night-owl.jpg"
                      width={250}
                      height={150}
                      alt="Morning lark or night owl"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 rounded-full p-1">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mt-2 group-hover:underline text-white">
                    Are you a 'morning lark' or a 'night owl'?
                  </h3>
                  <p className="text-sm mt-2 text-gray-300">
                    Most of us have a sense of whether we are a lark or an owl, but is it really as black and white as
                    it may seem?
                  </p>
                  <div className="flex items-center mt-2 text-xs text-gray-400">
                    <span>12 Jun 2024</span>
                    <span className="mx-2">|</span>
                    <span>Sleep</span>
                  </div>
                </Link>
              </div>

              <div className="min-w-[250px] w-[250px] flex-shrink-0">
                <Link href="#" className="group block">
                  <div className="relative">
                    <Image
                      src="/human-impact-earth.jpg"
                      width={250}
                      height={150}
                      alt="Human impact on Earth"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 rounded-full p-1">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mt-2 group-hover:underline text-white">
                    Ten striking images of human impact on the Earth
                  </h3>
                  <p className="text-sm mt-2 text-gray-300">
                    From a shipwrecking yard in Bangladesh to a river of iron dioxide in Canada, here's a deep dive into
                    photographer Ed Burtynsky's work.
                  </p>
                  <div className="flex items-center mt-2 text-xs text-gray-400">
                    <span>5 days ago</span>
                    <span className="mx-2">|</span>
                    <span>Earth</span>
                  </div>
                </Link>
              </div>

              <div className="min-w-[250px] w-[250px] flex-shrink-0">
                <Link href="#" className="group block">
                  <div className="relative">
                    <Image
                      src="/deadliest-street.jpg"
                      width={250}
                      height={150}
                      alt="Deadliest street in American history"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 rounded-full p-1">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mt-2 group-hover:underline text-white">
                    The deadliest street in American history
                  </h3>
                  <p className="text-sm mt-2 text-gray-300">
                    Doyers Street in Chinatown, New York, was once known as 'Murder Alley' and the 'Bloody Angle'.
                  </p>
                  <div className="flex items-center mt-2 text-xs text-gray-400">
                    <span>9 Aug 2023</span>
                    <span className="mx-2">|</span>
                    <span>History</span>
                  </div>
                </Link>
              </div>

              <div className="min-w-[250px] w-[250px] flex-shrink-0">
                <Link href="#" className="group block">
                  <div className="relative">
                    <Image
                      src="/hurtful-truth-parents.jpg"
                      width={250}
                      height={150}
                      alt="Hurtful truth parents"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 rounded-full p-1">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mt-2 group-hover:underline text-white">
                    The hurtful truth I never told my parents
                  </h3>
                  <p className="text-sm mt-2 text-gray-300">
                    Angel Yau is an Asian American comedian with OCD, anxiety and bipolar disorder.
                  </p>
                  <div className="flex items-center mt-2 text-xs text-gray-400">
                    <span>23 Feb 2022</span>
                    <span className="mx-2">|</span>
                    <span>Wellbeing</span>
                  </div>
                </Link>
              </div>

              <div className="min-w-[250px] w-[250px] flex-shrink-0">
                <Link href="#" className="group block">
                  <div className="relative">
                    <Image
                      src="/invasive-species.jpg"
                      width={250}
                      height={150}
                      alt="Invasive species"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 rounded-full p-1">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mt-2 group-hover:underline text-white">
                    The moment a species is captured
                  </h3>
                  <p className="text-sm mt-2 text-gray-300">
                    When invasive animals threaten Florida's native wildlife, scientists come up with a plan: bring them
                    in.
                  </p>
                  <div className="flex items-center mt-2 text-xs text-gray-400">
                    <span>24 Mar 2024</span>
                    <span className="mx-2">|</span>
                    <span>Earth</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

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
                    src="/liverpool-player.jpg"
                    width={300}
                    height={200}
                    alt="Liverpool player celebrating"
                    className="w-full h-auto mb-2"
                  />
                  <h3 className="text-lg font-merriweather font-bold group-hover:underline">
                    'Iconic moment in a special Liverpool career - but was it a farewell?'
                  </h3>
                  <p className="text-sm font-merriweather mt-1">
                    Trent Alexander-Arnold enjoyed wild celebrations with Liverpool fans after scoring them to within
                    touching distance of the Premier League title. But was it a farewell?
                  </p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span>1 hr ago</span>
                    <span className="mx-2">|</span>
                    <span>Liverpool</span>
                  </div>
                </Link>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200">
                <Link href="#" className="group block">
                  <div className="flex items-center">
                    <CircleDot className="w-4 h-4 text-red-600 mr-2" />
                    <h3 className="text-base font-merriweather font-bold group-hover:underline">
                      LIVE La Liga: Vinicius opener disallowed as Real being held by Athletic
                    </h3>
                  </div>
                </Link>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200">
                <Link href="#" className="group block">
                  <h3 className="text-base font-merriweather font-bold group-hover:underline">
                    Piastri wins in Saudi Arabia and takes title lead
                  </h3>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span>2 hrs ago</span>
                    <span className="mx-2">|</span>
                    <span>Formula 1</span>
                  </div>
                </Link>
              </div>

              <div className="mb-4">
                <Link href="#" className="group block">
                  <h3 className="text-base font-merriweather font-bold group-hover:underline">
                    Saka's ankle injury nothing serious - Arteta
                  </h3>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span>4 hrs ago</span>
                    <span className="mx-2">|</span>
                    <span>Arsenal</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* BUSINESS */}
            <div>
              <div className="flex items-center border-b-2 border-black pb-2 mb-4">
                <h2 className="text-base uppercase font-roboto font-bold">BUSINESS</h2>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>

              <div className="mb-6">
                <Link href="#" className="group block">
                  <Image
                    src="/apple-china-manufacturing.jpg"
                    width={300}
                    height={200}
                    alt="Apple manufacturing in China"
                    className="w-full h-auto mb-2"
                  />
                  <h3 className="text-lg font-merriweather font-bold group-hover:underline">
                    Designed in US, made in China: Why Apple is stuck
                  </h3>
                  <p className="text-sm font-merriweather mt-1">
                    China sits at the heart of Apple's supply chain - and it has benefited hugely from it. Can they
                    break up?
                  </p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span>7 days ago</span>
                    <span className="mx-2">|</span>
                    <span>Asia</span>
                  </div>
                </Link>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200">
                <Link href="#" className="group block">
                  <h3 className="text-base font-merriweather font-bold group-hover:underline">
                    Starmer and Trump discuss 'productive' trade talks
                  </h3>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span>2 days ago</span>
                    <span className="mx-2">|</span>
                    <span>UK</span>
                  </div>
                </Link>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200">
                <Link href="#" className="group block">
                  <h3 className="text-base font-merriweather font-bold group-hover:underline">
                    What we know about US-Ukraine minerals deal
                  </h3>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span>2 days ago</span>
                    <span className="mx-2">|</span>
                    <span>World</span>
                  </div>
                </Link>
              </div>

              <div className="mb-4">
                <Link href="#" className="group block">
                  <h3 className="text-base font-merriweather font-bold group-hover:underline">
                    US lays out plans to hit Chinese ships with port fees
                  </h3>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <span>2 days ago</span>
                    <span className="mx-2">|</span>
                    <span>Business</span>
                  </div>
                </Link>
              </div>
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
