"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/button"
import { cn } from "@/lib/utils"
import { redirectToExtension } from "./installExtension"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Mail className="h-6 w-6 text-purple-600" />
          <span className="font-bold text-xl text-purple-800">MailWizard</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/document" className="text-gray-700 hover:text-purple-700 transition-colors">
            Docs
          </Link>
          <Link href="/#tutorial" className="text-gray-700 hover:text-purple-700 transition-colors">
            Tutorial
          </Link>
          <Link href="/#feedback" className="text-gray-700 hover:text-purple-700 transition-colors">
            Feedback
          </Link>
          <Button onClick={redirectToExtension} className="bg-purple-600 hover:bg-purple-700">Install Extension</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/document"
              className="text-gray-700 hover:text-purple-700 transition-colors py-2"
              onClick={toggleMenu}
            >
              Docs
            </Link>
            <Link
              href="/#tutorial"
              className="text-gray-700 hover:text-purple-700 transition-colors py-2"
              onClick={toggleMenu}
            >
              Tutorial
            </Link>
            <Link
              href="/#feedback"
              className="text-gray-700 hover:text-purple-700 transition-colors py-2"
              onClick={toggleMenu}
            >
              Feedback
            </Link>
            <Button onClick={redirectToExtension} className="bg-purple-600 hover:bg-purple-700 w-full">Install Extension</Button>
          </div>
        </div>
      )}
    </header>
  )
}

