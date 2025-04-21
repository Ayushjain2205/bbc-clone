"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, Search, X } from "lucide-react"
import { useState } from "react"

interface NavbarProps {
  onMenuToggle: (isOpen: boolean) => void
  onStoriesOpen: () => void
  isStoriesOpen: boolean
}

const BBCLogo = () => (
  <Image
    src="/bbc.svg"
    alt="BBC Logo"
    width={105}
    height={32}
    priority
  />
)

export const Navbar = ({ onMenuToggle, onStoriesOpen, isStoriesOpen }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    const newMenuState = !menuOpen
    setMenuOpen(newMenuState)
    onMenuToggle(newMenuState)
  }

  return (
    <header className="border-b border-gray-200 relative z-50 h-16">
      <div className="h-full mx-auto px-4">
        <div className="flex items-center justify-between h-full">
          <button onClick={handleMenuToggle} className="flex items-center space-x-2">
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <>
                <Menu className="w-6 h-6" />
                <Search className="w-6 h-6" />
              </>
            )}
          </button>
          <div className="flex items-center justify-center">
            <Link href="/" className="flex items-center">
              <BBCLogo />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            {!isStoriesOpen && (
              <button
                onClick={onStoriesOpen}
                className="bg-black text-white px-4 py-2 text-base font-bold"
              >
                View Top
              </button>
            )}
            <button className="text-black text-base font-bold">Sign In</button>
          </div>
        </div>
      </div>
    </header>
  )
}
