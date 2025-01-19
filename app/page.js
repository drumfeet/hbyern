"use client"

import { Button } from "@/components/ui/button"
import {
  Facebook,
  Heart,
  Mail,
  MessageCircle,
  Calendar,
  DollarSign,
  Gift,
  Instagram,
} from "lucide-react"
import Image from "next/image"

// Custom TikTok Icon component
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-400 via-purple-400 to-orange-300">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="relative w-48 h-48 mx-auto mb-14">
            <Image
              src="/hbyern.jpg?q=80&w=400&h=400&fit=crop"
              alt="Bry and Ron"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-pink-500 rounded-full p-2">
              <Heart className="w-6 h-6 text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-transparent bg-clip-text mb-2">
            Bry and Ron
          </h1>
          <p className="text-lg text-purple-800 mb-2">@hbyern</p>
          <p className="text-purple-900 max-w-2xl mx-auto mb-6">
            Annoying each other and Funny Videos, LGBTQ lovers, HB Yern?
            <br />
            For Event/Collab, email: ronnelcui2017@gmail.com
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full bg-white hover:bg-pink-100 transition-colors"
            >
              <a
                href="https://facebook.com/hbyern"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-blue-600" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full bg-white hover:bg-purple-100 transition-colors"
            >
              <a
                href="https://instagram.com/hb_yern"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full bg-white hover:bg-orange-100 transition-colors"
            >
              <a
                href="https://tiktok.com/@shikcui3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full bg-white hover:bg-pink-100 transition-colors"
            >
              <a href="mailto:ronnelcui2017@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5 text-pink-500" />
              </a>
            </Button>
          </div>
        </div>

        {/* TikTok Embed */}
        <div className="mb-8 bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-[calc(100vh-6rem)] bg-gradient-to-r from-pink-300 to-purple-300">
            <iframe
              src="https://www.tiktok.com/embed/v2/7420921071873871120"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>

        {/* Interactive Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Comment Section */}
          <div className="bg-gradient-to-br from-pink-300 to-purple-300 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-900">
              <MessageCircle className="w-5 h-5" />
              Join the Conversation
            </h3>
            <p className="text-purple-800 mb-4">
              We&apos;d love to hear your thoughts! Share your ideas, questions,
              or just say hi.
            </p>
            <a
              href="https://drumfeet.notion.site/Post-18045d53d2b880c884dbfff3ab966316?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-center rounded-md transition-colors duration-300"
            >
              Leave a Comment
            </a>
          </div>

          {/* Schedule Meeting */}
          <div className="bg-gradient-to-br from-purple-300 to-orange-300 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-900">
              <Calendar className="w-5 h-5" />
              Let&apos;s Connect
            </h3>
            <p className="text-purple-800 mb-4">
              Want to collaborate or just chat? We&apos;re excited to meet you!
            </p>
            <a
              href="https://calendly.com/drumfeet/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 px-4 bg-gradient-to-r w-full bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white text-center rounded-md transition-colors duration-300"
            >
              Schedule a Meeting
            </a>
          </div>
        </div>

        {/* Donate Section */}
        <div className="bg-gradient-to-r from-pink-300 to-orange-300 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2 text-purple-900">
            <Gift className="w-5 h-5" />
            Support Our Creative Journey
          </h3>
          <p className="text-purple-800 mb-4">
            Your support helps us create more fun, engaging content and keeps
            the laughter flowing. Every contribution, big or small, makes a
            difference!
          </p>

          <a
            href="https://drumfeet.notion.site/Donate-18045d53d2b880f6a9e1e20d7243c8f6?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white text-center rounded-md transition-colors duration-300"
          >
            Buy Us a Coffee
          </a>
        </div>
      </div>
    </main>
  )
}
