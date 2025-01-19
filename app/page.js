import Image from "next/image"
import Link from "next/link"
import { Facebook, Mail, TwitterIcon as TikTok } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex flex-col items-center justify-center p-4">
      <main className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 max-w-3xl w-full space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/profile-photo.jpg"
            alt="Bry and Ron"
            width={150}
            height={150}
            className="rounded-full border-4 border-pink-400"
          />
          <h1 className="text-4xl font-bold text-center text-purple-800">
            Bry and Ron
          </h1>
          <p className="text-xl text-center text-gray-600">@hbyern</p>
        </div>

        <p className="text-center text-lg text-gray-700">
          Annoying each other and Funny Videos, LGBTQ lovers, HB Yern? For
          Event/Collab email: ronnelcui2017@gmail.com
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            href="https://www.facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-8 h-8 text-blue-600 hover:text-blue-800" />
          </Link>
          <Link href="mailto:ronnelcui2017@gmail.com">
            <Mail className="w-8 h-8 text-red-600 hover:text-red-800" />
          </Link>
          <Link
            href="https://www.tiktok.com/@hbyern"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TikTok className="w-8 h-8 text-black hover:text-gray-800" />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="default">Post a comment</Button>
          <Button variant="outline">Schedule a meeting</Button>
          <Button variant="secondary">Donate</Button>
        </div>

        <div className="tiktok-video">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@bia.qe/video/7455435691338501398"
            data-video-id="7455435691338501398"
            style={{ maxWidth: "605px", minWidth: "325px" }}
          >
            <section>
              <a
                target="_blank"
                title="@bia.qe"
                href="https://www.tiktok.com/@bia.qe?refer=embed"
              >
                @bia.qe
              </a>
              How to make your pc run better? . . •Open google, then search
              "rammp" and click on the first site • Go to "system info" -&gt;
              RAMmap •Open it •Open "RAMMap64" •Go to "empty" and select "empty
              standby list" Here you go! 🙃 by the way, happy new year! 🎉 . .
              <a
                title="pctip"
                target="_blank"
                href="https://www.tiktok.com/tag/pctip?refer=embed"
              >
                #pctip
              </a>
              <a
                title="pctips"
                target="_blank"
                href="https://www.tiktok.com/tag/pctips?refer=embed"
              >
                #pctips
              </a>
              <a
                title="biaqe"
                target="_blank"
                href="https://www.tiktok.com/tag/biaqe?refer=embed"
              >
                #biaqe
              </a>
              <a
                title="microsoft"
                target="_blank"
                href="https://www.tiktok.com/tag/microsoft?refer=embed"
              >
                #microsoft
              </a>
              <a
                title="ram"
                target="_blank"
                href="https://www.tiktok.com/tag/ram?refer=embed"
              >
                #ram
              </a>
              <a
                title="windows"
                target="_blank"
                href="https://www.tiktok.com/tag/windows?refer=embed"
              >
                #windows
              </a>
              <a
                title="pc"
                target="_blank"
                href="https://www.tiktok.com/tag/pc?refer=embed"
              >
                #pc
              </a>
              <a
                title="pcgaming"
                target="_blank"
                href="https://www.tiktok.com/tag/pcgaming?refer=embed"
              >
                #pcgaming
              </a>
              <a
                title="gaming"
                target="_blank"
                href="https://www.tiktok.com/tag/gaming?refer=embed"
              >
                #gaming
              </a>
              <a
                title="viral"
                target="_blank"
                href="https://www.tiktok.com/tag/viral?refer=embed"
              >
                #viral
              </a>
              <a
                title="virall"
                target="_blank"
                href="https://www.tiktok.com/tag/virall?refer=embed"
              >
                #virall
              </a>
              <a
                title="fyp"
                target="_blank"
                href="https://www.tiktok.com/tag/fyp?refer=embed"
              >
                #fyp
              </a>
              <a
                title="fy"
                target="_blank"
                href="https://www.tiktok.com/tag/fy?refer=embed"
              >
                #fy
              </a>
              <a
                title="foryoupage"
                target="_blank"
                href="https://www.tiktok.com/tag/foryoupage?refer=embed"
              >
                #foryoupage
              </a>
              <a
                title="foryou"
                target="_blank"
                href="https://www.tiktok.com/tag/foryou?refer=embed"
              >
                #foryou
              </a>
              <a
                target="_blank"
                title="♬ 真夜中のドア〜stay with me - 松原みき"
                href="https://www.tiktok.com/music/真夜中のドア〜stay-with-me-6878744350931634950?refer=embed"
              >
                ♬ 真夜中のドア〜stay with me - 松原みき
              </a>
            </section>
          </blockquote>
        </div>
      </main>
    </div>
  )
}
