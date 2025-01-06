import HowItWorks from "@/components/howItWorks"
import PopularTools from "@/components/PopularTools"
import ReviewSection from "@/components/review"
import { SiteHeader } from "@/components/SiteHeader"

export default function Page() {
  return (
    <div className="min-h-screen mx-auto bg-gradient-to-r from-pink-100 via-white to-blue-100">
      <SiteHeader />
      <main className="relative container mx-auto py-16 md:py-24">
        {/* Hero Section */}
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="text-black mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Effortlessly Create High-Quality Articles with Our AI Article Generator
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            AI has the potential to revolutionize the way we live and work, from improving healthcare and transportation to
            enhancing the way.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="rounded-full bg-purple-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Get Started
            </button>
            <button className="rounded-full border border-violet-300 bg-white px-6 py-3 text-base font-medium text-violet-500 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Explore
            </button>
          </div>
        </div>

        {/* Section 1 with Image */}
        <div className="relative mt-16 flex justify-center pb-16">
          {/* Background circles */}
          <div className="absolute -left-20 -z-10 h-[300px] w-[300px] rounded-full bg-blue-200/50 blur-3xl" />
          <div className="absolute -right-20 -z-10 h-[300px] w-[300px] rounded-full bg-purple-200/50 blur-3xl" />
          <img className="z-10" src="section1.png" alt="Section 1" />
        </div>

        {/* Purple Circles (Hidden on Mobile) */}
        <img
          className="absolute top-[47%] left-[23%] h-[100px] w-[100px] hidden md:block"
          src="Purple_Circle.png"
          alt="purple circle"
        />
        <img
          className="absolute top-[63%] right-[23%] h-[100px] w-[100px] hidden md:block"
          src="Purple_Circle.png"
          alt="purple circle"
        />
      </main>

      {/* Popular Tools Section */}
      <PopularTools />

      {/* How It Works Section */}
      <HowItWorks />
      <ReviewSection />
    </div>
  )
}
