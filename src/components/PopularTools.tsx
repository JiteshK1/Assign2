import { FileText, Image, Pencil, RefreshCw, ShoppingBag, Share2 } from 'lucide-react'

export default function PopularTools() {
  const tools = [
    {
      icon: <FileText className="w-6 h-6 text-emerald-500" />,
      title: "Article Generator",
      description: "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor."
    },
    {
      icon: <Pencil className="w-6 h-6 text-pink-500" />,
      title: "Blog Post Writer",
      description: "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-indigo-500" />,
      title: "Content Rewriter",
      description: "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor."
    },
    {
      icon: <Image className="w-6 h-6 text-yellow-500" />,
      title: "Image Generator",
      description: "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor."
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-purple-500" />,
      title: "Product Descriptions",
      description: "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor."
    },
    {
      icon: <Share2 className="w-6 h-6 text-blue-500" />,
      title: "Social Media Post",
      description: "Turn a title and an outline into a fully SEO-optimized and long article with this AI editor."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Most Popular Tools
          </h1>
          <p className="text-lg text-gray-600">
            These are the most popular tools and a good place to start.
            <br />
            Give them a try!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-4">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {tool.title}
              </h3>
              <p className="text-gray-600">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

