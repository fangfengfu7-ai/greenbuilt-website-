import { useState } from 'react'
import { Play, Clock, Eye } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const videos = [
    {
      id: 1,
      title: 'CNN 媒體報導 - Self Healing Concrete',
      category: '媒體報導',
      duration: '3:45',
      views: '125K',
      description: 'CNN國際媒體深度報導自癒混凝土技術的革命性突破，展示其在建築業的應用前景。',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      embedId: 'dQw4w9WgXcQ',
      date: '2023-08-15'
    },
    {
      id: 2,
      title: '寰宇新聞報導 - 台灣自癒混凝土技術',
      category: '媒體報導',
      duration: '5:20',
      views: '89K',
      description: '寰宇新聞專題報導台灣引進自癒混凝土技術，解決老屋漏水問題的創新解決方案。',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      embedId: 'dQw4w9WgXcQ',
      date: '2023-07-22'
    },
    {
      id: 3,
      title: '自癒混凝土技術原理解說',
      category: '技術說明',
      duration: '8:30',
      views: '156K',
      description: '詳細解說自癒混凝土的工作原理，從生物添加劑到石灰石結晶的完整過程。',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      embedId: 'dQw4w9WgXcQ',
      date: '2023-06-10'
    },
    {
      id: 4,
      title: 'REGEN防水砂漿施工示範',
      category: '施工教學',
      duration: '12:15',
      views: '67K',
      description: '專業施工團隊示範REGEN生物型防水砂漿的正確施工方法和注意事項。',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      embedId: 'dQw4w9WgXcQ',
      date: '2023-05-18'
    },
    {
      id: 5,
      title: '台北101地下室防水工程案例',
      category: '工程案例',
      duration: '6:45',
      views: '234K',
      description: '台北101大樓地下室防水修復工程的完整記錄，展示自癒技術的實際應用效果。',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      embedId: 'dQw4w9WgXcQ',
      date: '2023-04-25'
    },
    {
      id: 6,
      title: '高雄港碼頭結構修復紀錄',
      category: '工程案例',
      duration: '9:20',
      views: '178K',
      description: '高雄港碼頭海事工程環境下的混凝土結構修復全程記錄，見證自癒技術的卓越表現。',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      embedId: 'dQw4w9WgXcQ',
      date: '2023-03-12'
    }
  ]

  const categories = [
    { id: 'all', label: '全部影片' },
    { id: '媒體報導', label: '媒體報導' },
    { id: '技術說明', label: '技術說明' },
    { id: '施工教學', label: '施工教學' },
    { id: '工程案例', label: '工程案例' }
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory)

  const openVideo = (video) => {
    setSelectedVideo(video)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">影片專區</h1>
            <p className="text-xl max-w-3xl mx-auto">
              透過影片深入了解自癒混凝土技術，觀看實際應用案例和專業解說
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => openVideo(video)}>
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{video.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="h-3 w-3 mr-1" />
                      {video.views}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{video.description}</p>
                  <div className="mt-4 text-xs text-gray-500">{video.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              精選影片
            </h2>
            <p className="text-xl text-gray-600">
              最受歡迎的自癒混凝土技術介紹影片
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                alt="精選影片"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all">
                <Play className="h-20 w-20 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                自癒混凝土：建築業的革命性突破
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                這部影片詳細介紹了自癒混凝土技術的發展歷程、工作原理以及在全球各地的成功應用案例。從荷蘭台夫特理工大學的研發實驗室到台灣的實際工程項目，見證這項技術如何改變建築業的未來。
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span>影片長度：15分鐘</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-5 w-5 text-primary mr-2" />
                  <span>觀看次數：500K+</span>
                </div>
              </div>
              <Button size="lg" className="mt-6">
                立即觀看
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeVideo}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedVideo.title}</h3>
                <button
                  onClick={closeVideo}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="aspect-video mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.embedId}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Badge>{selectedVideo.category}</Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedVideo.duration}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="h-4 w-4 mr-1" />
                  {selectedVideo.views}
                </div>
              </div>
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            想了解更多技術細節？
          </h2>
          <p className="text-xl mb-8">
            聯絡我們的技術團隊，獲得更詳細的產品資訊和技術支援
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">技術諮詢</a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Videos

