import type { Metadata } from "next"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Tutorial from "@/components/tutorial"
import Feedback from "@/components/feedback"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "MailWizard",
  description: "Automate your email workflows with MailWizard Chrome extension",
  icons: {
    icon: "favicon.ico",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      <Hero />
      <Tutorial id="tutorial" />
      <Feedback id="feedback" />
      <Footer />
    </main>
  )
}

