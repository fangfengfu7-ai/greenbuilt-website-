
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
      title: '寰宇新聞報導 - 台灣自癒混凝土技術',
      category: '媒體報導',
      duration: '5:20',
      views: '89K',
      description: '寰宇新聞專題報導台灣引進自癒混凝土技術，解決老屋漏水問題的創新解決方案。',
      thumbnail: 'https://img.youtube.com/vi/oUCUjnb3ARY/maxresdefault.jpg',
      embedId: 'oUCUjnb3ARY',
      date: '2023-07-22',
      url: 'https://www.youtube.com/watch?v=oUCUjnb3ARY'
    },
    {
      id: 2,
      title: 'TVBS新聞報導 - 自癒混凝土技術',
      category: '媒體報導',
      duration: '4:15',
      views: '76K',
      description: 'TVBS新聞深度報導自癒混凝土技術的最新發展。',
      thumbnail: 'https://img.youtube.com/vi/2j_E49jFtvE/maxresdefault.jpg',
      embedId: '2j_E49jFtvE',
      date: '2023-06-18',
      url: 'https://www.youtube.com/watch?v=2j_E49jFtvE'
    },
    {
      id: 3,
      title: '日本超大型室內鮭魚養殖場(大和房屋工業)',
      category: '工程案例',
      duration: '12:45',
      views: '156K',
      description: '日本大和房屋工業超大型室內鮭魚養殖場建設案例。',
      thumbnail: 'https://img.youtube.com/vi/CXYNJfi2pB4/maxresdefault.jpg',
      embedId: 'CXYNJfi2pB4',
      date: '2023-09-12',
      url: 'https://www.youtube.com/watch?v=CXYNJfi2pB4'
    },
    {
      id: 4,
      title: '中視新聞報導 - 自癒混凝土技術',
      category: '媒體報導',
      duration: '3:30',
      views: '65K',
      description: '中視新聞專題報導自癒混凝土技術的應用與發展。',
      thumbnail: 'https://img.youtube.com/vi/Y1LSrKvPdfI/maxresdefault.jpg',
      embedId: 'Y1LSrKvPdfI',
      date: '2023-05-20',
      url: 'https://www.youtube.com/watch?v=Y1LSrKvPdfI'
    },
    {
      id: 5,
      title: 'CNN 媒體報導 - Self Healing Concrete',
      category: '媒體報導',
      duration: '3:45',
      views: '125K',
      description: 'CNN國際媒體深度報導自癒混凝土技術的革命性突破，展示其在建築業的應用前景。',
      thumbnail: 'https://img.youtube.com/vi/eN-vJB7yeJI/maxresdefault.jpg',
      embedId: 'eN-vJB7yeJI',
      date: '2023-08-15',
      url: 'https://www.youtube.com/watch?v=eN-vJB7yeJI'
    },
    {
      id: 6,
      title: 'MR3乾拌砂漿施工影片',
      category: '施工教學',
      duration: '15:20',
      views: '78K',
      description: 'MR3乾拌砂漿的專業施工方法和技術要點示範。',
      thumbnail: 'https://img.youtube.com/vi/LRCMyPxTWtw/maxresdefault.jpg',
      embedId: 'LRCMyPxTWtw',
      date: '2023-08-08',
      url: 'https://www.youtube.com/watch?v=LRCMyPxTWtw'
    },
    {
      id: 7,
      title: 'TED演講 - 自癒混凝土技術',
      category: '技術說明',
      duration: '18:30',
      views: '256K',
      description: 'TED論壇關於自癒混凝土技術的專業演講。',
      thumbnail: 'https://img.youtube.com/vi/0l_9NDZ8VZA/maxresdefault.jpg',
      embedId: '0l_9NDZ8VZA',
      date: '2023-09-05',
      url: 'https://www.youtube.com/watch?v=0l_9NDZ8VZA'
    },
    {
      id: 8,
      title: 'ER7液體修護劑使用說明',
      category: '施工教學',
      duration: '10:45',
      views: '65K',
      description: 'ER7液體修護劑的正確使用方法和操作指南。',
      thumbnail: 'https://img.youtube.com/vi/qm-Hi_V2ijY/maxresdefault.jpg',
      embedId: 'qm-Hi_V2ijY',
      date: '2023-07-15',
      url: 'https://www.youtube.com/watch?v=qm-Hi_V2ijY'
    },
    {
      id: 9,
      title: '隧道工程動畫',
      category: '工程案例',
      duration: '8:30',
      views: '134K',
      description: '隧道工程中自癒混凝土技術應用的動畫演示。',
      thumbnail: 'https://img.youtube.com/vi/4deVfT8cYhA/maxresdefault.jpg',
      embedId: '4deVfT8cYhA',
      date: '2023-08-25',
      url: 'https://www.youtube.com/watch?v=4deVfT8cYhA'
    },
    {
      id: 10,
      title: '大型蓄水池工程(使用自癒原劑)',
      category: '工程案例',
      duration: '16:20',
      views: '189K',
      description: '大型蓄水池工程中使用自癒原劑的施工案例記錄。',
      thumbnail: 'https://img.youtube.com/vi/M7i_Xv9tWnw/maxresdefault.jpg',
      embedId: 'M7i_Xv9tWnw',
      date: '2023-07-08',
      url: 'https://www.youtube.com/watch?v=M7i_Xv9tWnw'
    },
    {
      id: 11,
      title: '日本會澤高圧コンクリート株式会社演講(日語同步口譯)',
      category: '技術說明',
      duration: '25:15',
      views: '87K',
      description: '日本會澤高圧混凝土公司關於自癒混凝土技術的專業演講，提供日語同步口譯。',
      thumbnail: 'https://img.youtube.com/vi/fe5HKMlWBBw/maxresdefault.jpg',
      embedId: 'fe5HKMlWBBw',
      date: '2023-05-12',
      url: 'https://www.youtube.com/watch?v=fe5HKMlWBBw'
    },
    {
      id: 12,
      title: 'TED論壇：若是混凝土能夠自行修復呢？(可選擇中文字幕)',
      category: '技術說明',
      duration: '16:45',
      views: '189K',
      description: 'TED論壇探討自癒混凝土技術的可能性和未來發展，提供中文字幕選項。',
      thumbnail: 'https://img.youtube.com/vi/znSeL66e8qE/maxresdefault.jpg',
      embedId: 'znSeL66e8qE',
      date: '2023-07-30',
      url: 'https://www.youtube.com/watch?v=znSeL66e8qE'
    },
    {
      id: 13,
      title: 'World Breaking News - 自癒混凝土技術',
      category: '媒體報導',
      duration: '2:45',
      views: '98K',
      description: 'World Breaking News關於自癒混凝土技術的國際新聞報導。',
      thumbnail: 'https://img.youtube.com/vi/pz5RZV-Jn0Y/maxresdefault.jpg',
      embedId: 'pz5RZV-Jn0Y',
      date: '2023-04-10',
      url: 'https://www.youtube.com/watch?v=pz5RZV-Jn0Y'
    },
    {
      id: 14,
      title: '荷蘭Basilisk生物型自癒混凝土技術簡介',
      category: '技術說明',
      duration: '8:20',
      views: '134K',
      description: '荷蘭Basilisk公司生物型自癒混凝土技術的詳細介紹。',
      thumbnail: 'https://img.youtube.com/vi/gvBUG_EjV98/maxresdefault.jpg',
      embedId: 'gvBUG_EjV98',
      date: '2023-06-25',
      url: 'https://www.youtube.com/watch?v=gvBUG_EjV98'
    },
    {
      id: 15,
      title: '混凝土路面修復過程 (ER7液體修復系統)',
      category: '施工教學',
      duration: '18:30',
      views: '112K',
      description: '使用ER7液體修復系統進行混凝土路面修復的完整過程示範。',
      thumbnail: 'https://img.youtube.com/vi/qJOKG3zY0Lw/maxresdefault.jpg',
      embedId: 'qJOKG3zY0Lw',
      date: '2023-06-02',
      url: 'https://www.youtube.com/watch?v=qJOKG3zY0Lw'
    },
    {
      id: 16,
      title: '札幌市水道局工程案例',
      category: '工程案例',
      duration: '11:30',
      views: '98K',
      description: '札幌市水道局使用自癒混凝土技術的工程應用案例。',
      thumbnail: 'https://img.youtube.com/vi/BZHjGrqzukw/maxresdefault.jpg',
      embedId: 'BZHjGrqzukw',
      date: '2023-05-30',
      url: 'https://www.youtube.com/watch?v=BZHjGrqzukw'
    },
    {
      id: 17,
      title: '會澤高圧コンクリート株式会社鵡川工場混凝土養護槽',
      category: '工程案例',
      duration: '9:45',
      views: '76K',
      description: '會澤高圧混凝土公司鵡川工場的混凝土養護槽工程案例。',
      thumbnail: 'https://img.youtube.com/vi/iRWUpO6jGBA/maxresdefault.jpg',
      embedId: 'iRWUpO6jGBA',
      date: '2023-03-28',
      url: 'https://www.youtube.com/watch?v=iRWUpO6jGBA'
    },
    {
      id: 18,
      title: '低碳永續家園形象廣告',
      category: '媒體報導',
      duration: '1:30',
      views: '45K',
      description: '低碳永續家園建設的形象廣告，展示自癒混凝土技術的環保價值。',
      thumbnail: 'https://img.youtube.com/vi/mTWUu-5KJ5c/maxresdefault.jpg',
      embedId: 'mTWUu-5KJ5c',
      date: '2023-03-15',
      url: 'https://www.youtube.com/watch?v=mTWUu-5KJ5c'
    },
    {
      id: 19,
      title: '癒合過程縮時攝影',
      category: '技術說明',
      duration: '3:15',
      views: '167K',
      description: '自癒混凝土裂縫癒合過程的縮時攝影記錄。',
      thumbnail: 'https://img.youtube.com/vi/ztAmktMQDb4/maxresdefault.jpg',
      embedId: 'ztAmktMQDb4',
      date: '2023-04-28',
      url: 'https://www.youtube.com/watch?v=ztAmktMQDb4'
    },
    {
      id: 20,
      title: 'ER7施工影片(日文)',
      category: '施工教學',
      duration: '14:15',
      views: '58K',
      description: 'ER7產品的施工方法和技術要點，日文解說版本。',
      thumbnail: 'https://img.youtube.com/vi/FpDn9yj_n4w/maxresdefault.jpg',
      embedId: 'FpDn9yj_n4w',
      date: '2023-04-20',
      url: 'https://www.youtube.com/watch?v=FpDn9yj_n4w'
    },
    {
      id: 21,
      title: '自癒混凝土原理說明(英文)',
      category: '技術說明',
      duration: '12:30',
      views: '145K',
      description: '自癒混凝土技術原理的詳細說明，英文版本。',
      thumbnail: 'https://img.youtube.com/vi/9vMs2DuBYJk/maxresdefault.jpg',
      embedId: '9vMs2DuBYJk',
      date: '2023-03-22',
      url: 'https://www.youtube.com/watch?v=9vMs2DuBYJk'
    },
    {
      id: 22,
      title: '自癒混凝土原理說明(日文)',
      category: '技術說明',
      duration: '11:45',
      views: '92K',
      description: '自癒混凝土技術原理的詳細說明，日文版本。',
      thumbnail: 'https://img.youtube.com/vi/RgJT_cjzXko/maxresdefault.jpg',
      embedId: 'RgJT_cjzXko',
      date: '2023-02-18',
      url: 'https://www.youtube.com/watch?v=RgJT_cjzXko'
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
      <section className="py-20 bg-gradient-to-r from-green-900 to-green-900 text-white">
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
                src="https://img.youtube.com/vi/znSeL66e8qE/maxresdefault.jpg"
                alt="精選影片"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all" onClick={() => openVideo({
                id: 'featured',
                title: 'TED論壇：若是混凝土能夠自行修復呢？(可選擇中文字幕)',
                category: '技術說明',
                duration: '16:45',
                views: '189K',
                description: 'TED論壇探討自癒混凝土技術的可能性和未來發展，提供中文字幕選項。',
                thumbnail: 'https://img.youtube.com/vi/znSeL66e8qE/maxresdefault.jpg',
                embedId: 'znSeL66e8qE',
                date: '2023-07-30',
                url: 'https://www.youtube.com/watch?v=znSeL66e8qE'
              })}>
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
              <Button size="lg" className="mt-6" onClick={() => openVideo({
                id: 'featured',
                title: 'TED論壇：若是混凝土能夠自行修復呢？(可選擇中文字幕)',
                category: '技術說明',
                duration: '16:45',
                views: '189K',
                description: 'TED論壇探討自癒混凝土技術的可能性和未來發展，提供中文字幕選項。',
                thumbnail: 'https://img.youtube.com/vi/znSeL66e8qE/maxresdefault.jpg',
                embedId: 'znSeL66e8qE',
                date: '2023-07-30',
                url: 'https://www.youtube.com/watch?v=znSeL66e8qE'
              })}>
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


