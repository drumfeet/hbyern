"use client"

import { Button } from "@/components/ui/button"
import {
  Facebook,
  Mail,
  Gift,
  Instagram,
  ExternalLink,
  Youtube,
  Heart,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Call-to-Action Section - Now outside the main content div */}
        <div className="bg-gradient-to-r from-yellow-300 to-pink-300 p-6 rounded-2xl shadow-lg text-center mb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2 text-purple-800">
            <Gift className="w-8 h-8" />
            Support Our Creative Journey
          </h3>
          <p className="text-purple-700 mb-6 text-lg">
            Your support helps us create more fun content and keeps the laughter
            flowing. Every contribution adds a spark to our creative fire!
          </p>
          <Button
            asChild
            className="w-full py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xl font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Buy Us a Coffee
              <ExternalLink className="w-6 h-6" />
            </a>
          </Button>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            {/* Content Column */}
            <div className="md:w-1/2 p-8 bg-gradient-to-br from-red-400 to-indigo-600 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/confetti.png')] opacity-10 animate-pulse"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="relative w-48 h-48 mx-auto mb-20">
                    <Image
                      src="/hbyern.jpg?q=80&w=400&h=400&fit=crop"
                      alt="Bok and Bagz"
                      width={200}
                      height={200}
                      className="rounded-full border-8 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-fuchsia-400 rounded-full p-3 animate-bounce">
                      <Heart className="w-8 h-8 text-violet-700" />
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">
                    Bok and Bagz
                  </h1>
                  <p className="text-xl text-yellow-300 mb-2 font-semibold">
                    HB Yern?
                  </p>
                </div>
                <p className="text-lg text-white mb-6 text-center font-medium bg-indigo-700 bg-opacity-50 p-4 rounded-lg shadow-inner">
                  Annoying each other and Funny Videos, LGBTQ lovers, HB Yern?
                </p>
                <div className="flex justify-center gap-4 mb-8">
                  <SocialLink
                    href="https://facebook.com/hbyern"
                    icon={<Facebook className="w-5 h-5" />}
                    label="Facebook"
                    bgColor="bg-blue-500"
                  />
                  <SocialLink
                    href="https://instagram.com/hb_yern"
                    icon={<Instagram className="w-5 h-5" />}
                    label="Instagram"
                    bgColor="bg-pink-500"
                  />
                  <SocialLink
                    href="https://tiktok.com/@shikcui3"
                    icon={<TikTokIcon />}
                    label="TikTok"
                    bgColor="bg-black"
                  />
                  <SocialLink
                    href="https://youtube.com/@hbyern08"
                    icon={<Youtube className="w-5 h-5" />}
                    label="YouTube"
                    bgColor="bg-red-600"
                  />
                  <SocialLink
                    href="mailto:ronnelcui2017@gmail.com"
                    icon={<Mail className="w-5 h-5" />}
                    label="Email"
                    bgColor="bg-yellow-500"
                  />
                </div>
                <div className="text-center mb-8">
                  <p className="text-lg mb-2 text-yellow-300 font-semibold">
                    For Event/Collab, email:
                  </p>
                  <a
                    href="mailto:ronnelcui2017@gmail.com"
                    className="text-xl font-bold text-white hover:underline transition-all duration-300 hover:text-yellow-300"
                  >
                    ronnelcui2017@gmail.com
                  </a>
                </div>
              </div>
              <Sparkles className="absolute bottom-4 right-4 w-12 h-12 text-yellow-300 animate-spin-slow" />
            </div>

            {/* Video Column */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-red-400 to-purple-500 p-4 md:p-8">
              <div className="relative w-full pb-[177.77%] rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500"></div>
                <iframe
                  src="https://www.tiktok.com/embed/v2/7420921071873871120"
                  className="absolute top-0 left-0 w-full h-full z-10"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const SocialLink = ({ href, icon, label, bgColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bgColor} p-2 md:p-3 rounded-full hover:opacity-80 transition-opacity`}
      aria-label={label}
    >
      {icon}
    </a>
  )
}
