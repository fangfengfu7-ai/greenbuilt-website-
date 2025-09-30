import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Play, Shield, Award, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Import images
import heroImage1 from '../assets/Y9PMcaimRg7X.jpg'
import heroImage2 from '../assets/BcT6sJeWuuzw.jpg'
import heroImage3 from '../assets/aMPHxuuzphvB.jpg'
import constructionImage from '../assets/WMFfKzRPuQ3D.jpg'
import teamImage from '../assets/DJ86w14YcdNd.jpg'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: heroImage1,
      title: '生物型自行修復水泥',
      subtitle: '水泥添加細菌，促進循環經濟及水泥應用的永續發展',
      description: '水泥是產業排名第一的人造產品，是現代社會發展無可取代的。但水泥產業面臨耐用性、品質、原料和碳足跡等等嚴重的挑戰。'
    },
    {
      image: heroImage2,
      title: 'Greenheal 水泥沙漿',
      subtitle: '自發性修復水泥技術',
      description: '利用微生物接觸到水分會大量繁殖並開始生成石灰石，自動修復裂縫，防止水分滲入並保護鋼筋。Greenheal是乾拌水泥沙漿，加水攪拌均勻即可使用。'
    },
    {
      image: heroImage3,
      title: 'Basilisk ER7',
      subtitle: '混凝土裂縫修復產品',
      description: '適用於橋樑、停車場、港口和機場、海洋結構工程、道路、陽台和藝廊等各種應用場景，提供大面積快速施工，減少空間封閉時間。'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-white max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl mb-6 text-green-900">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <div className="space-x-4">
                  <Button size="lg" asChild>
                    <Link to="/products">了解產品</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                    <Play className="mr-2 h-4 w-4" />
                    觀看影片
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-green-900 transition-colors"
        >
          <ChevronLeft size={48} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-green-900 transition-colors"
        >
          <ChevronRight size={48} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              荷蘭Basilisk生物型自行修復水泥
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              創新科技研發於荷蘭台夫特理工大學(TU Delft) 2006-2014，得過無數創新獎項，擁有四項專利。這項獨特的修復系統利用細菌生成石灰石結晶，使混凝土擁有自行修復裂痕的能力。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">自發性修復</h3>
                <p className="text-gray-600">
                  微生物接觸到水分會大量繁殖並開始生成石灰石，自動封閉裂縫，防止水分滲入並保護鋼筋。
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">國際認證</h3>
                <p className="text-gray-600">
                  通過NEN-EN 1503-2:2004國際認證，產品符合混凝土結構保護和修復的國際標準。
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Leaf className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">永續環保</h3>
                <p className="text-gray-600">
                  自發性修復混凝土減少25%的二氧化碳排放量，延長建築壽命超過30%，減少維修及閒置時間40%。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                台灣建築的新未來
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                台灣位於環太平洋地震帶西側，地震發生頻繁，結構物遭受震損的情形時常發生；又屬海島型氣候，長年高溫溼熱，結構物老裂化的案例亦所在多有。
              </p>
              <p className="text-lg text-gray-600 mb-8">
                目前全台超過三十年的老屋已超過50%，老屋漏水的情形比比皆是，長期漏水有可能導致鋼筋鏽蝕，進而引發結構安全問題。
              </p>
              <Button size="lg" asChild>
                <Link to="/about">了解更多</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={constructionImage}
                alt="建築施工"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            需要專人為您介紹嗎？
          </h2>
          <p className="text-xl mb-8">
            我們的專業團隊隨時為您提供詳細的產品諮詢和技術支援
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">聯絡我們</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home

