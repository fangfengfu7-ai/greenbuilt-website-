import { Users, Award, Globe, Target, Heart, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import teamImage from '../assets/DJ86w14YcdNd.jpg'
import meetingImage from '../assets/G05ua7kgP0lc.jpg'
import officeImage from '../assets/AY6yux6bX3F2.webp'

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: '創新',
      description: '持續推動建築材料技術的創新發展，為客戶提供最先進的解決方案'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: '品質',
      description: '堅持最高品質標準，確保每一個產品都能達到客戶的期望'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '服務',
      description: '以客戶為中心，提供專業、及時、全面的技術支援和服務'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: '永續',
      description: '致力於環保永續發展，為下一代創造更美好的建築環境'
    }
  ]

  const milestones = [
    {
      year: '2019',
      title: '公司成立',
      description: '正式引進荷蘭GreenBuilt自癒混凝土技術到台灣'
    },
    {
      year: '2020',
      title: '首個項目',
      description: '完成第一個商業項目，證明技術在台灣環境下的有效性'
    },
    {
      year: '2021',
      title: '技術認證',
      description: '獲得台灣建材相關認證，建立本地化技術標準'
    },
    {
      year: '2022',
      title: '規模擴張',
      description: '業務快速成長，服務範圍擴展至全台各地'
    },
    {
      year: '2023',
      title: '重大突破',
      description: '完成台北101等指標性項目，技術獲得市場廣泛認可'
    },
    {
      year: '2024',
      title: '持續創新',
      description: '持續技術研發，推出更多創新產品和解決方案'
    }
  ]

  const team = [
    {
      name: '張建國',
      position: '執行長',
      description: '擁有20年建築業經驗，致力於推動台灣建築技術創新',
      image: teamImage
    },
    {
      name: '李美玲',
      position: '技術總監',
      description: '材料工程博士，專精於混凝土技術研發和應用',
      image: meetingImage
    },
    {
      name: '王志明',
      position: '營運總監',
      description: '豐富的項目管理經驗，確保每個工程的順利執行',
      image: officeImage
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">關於我們</h1>
            <p className="text-xl max-w-3xl mx-auto">
              GreenBuilt Taiwan致力於將世界領先的自癒混凝土技術帶到台灣，為建築業創造更永續的未來
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                我們的使命
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                台灣位於環太平洋地震帶西側，地震發生頻繁，結構物遭受震損的情形時常發生；又屬海島型氣候，長年高溫溼熱，結構物老裂化的案例亦所在多有。
              </p>
              <p className="text-lg text-gray-600 mb-6">
                目前全台超過三十年的老屋已超過50%，老屋漏水的情形比比皆是，長期漏水有可能導致鋼筋鏽蝕，進而引發結構安全問題。
              </p>
              <p className="text-lg text-gray-600 mb-8">
                我們引進荷蘭GreenBuilt自癒混凝土技術，為台灣的建築業提供創新的解決方案，讓建築物擁有自我修復的能力，大幅延長使用壽命並降低維修成本。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">完成項目</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30+</div>
                  <div className="text-gray-600">合作客戶</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={teamImage}
                alt="團隊合作"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              我們的核心價值
            </h2>
            <p className="text-xl text-gray-600">
              指引我們前進的核心理念和價值觀
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              發展歷程
            </h2>
            <p className="text-xl text-gray-600">
              見證我們從創立到成長的每一個重要時刻
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              領導團隊
            </h2>
            <p className="text-xl text-gray-600">
              經驗豐富的專業團隊，為您提供最優質的服務
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-primary font-semibold mb-3">{member.position}</div>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partnership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={meetingImage}
                alt="技術合作"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                國際技術合作
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                我們與荷蘭台夫特理工大學建立緊密的技術合作關係，這所被稱為歐洲MIT的頂尖學府是自癒混凝土技術的發源地。
              </p>
              <p className="text-lg text-gray-600 mb-6">
                通過與原創技術團隊的直接合作，我們確保能夠為台灣客戶提供最正宗、最先進的自癒混凝土技術和產品。
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  <span>2015年歐洲發明獎決賽入圍技術</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  <span>歐盟CE認證和卓越印章</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  <span>日本國土交通省(NETIS)認可</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            加入我們的創新之旅
          </h2>
          <p className="text-xl mb-8">
            無論您是建築業專業人士、工程承包商，還是對創新技術感興趣的朋友，我們都歡迎您與我們聯絡
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              聯絡我們
            </a>
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              查看案例
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

