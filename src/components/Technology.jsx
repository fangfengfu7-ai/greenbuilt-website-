import { CheckCircle, Microscope, Beaker, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import constructionImage from '../assets/uTVPhVcguHyt.webp'
import repairImage from '../assets/YteurK67PEcJ.jpg'

const Technology = () => {
  const features = [
    {
      icon: <Microscope className="h-8 w-8" />,
      title: '生物添加劑',
      description: '利用可生成石灰石結晶的生物添加劑，使混凝土擁有自癒能力'
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      title: '自動修復',
      description: '最高1毫米內的裂痕都可自動修護，無需人工干預'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: '防水保護',
      description: '自行產生防水層，有效防止水分滲透和結構損害'
    }
  ]

  const advantages = [
    '大幅延長混凝土建築物的壽命',
    '降低維修成本和頻率',
    '減少碳足跡，符合永續發展',
    '適用於新舊建築物',
    '可加入任何水泥製品中',
    '榮獲多項國際認證'
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">產品原理</h1>
            <p className="text-xl max-w-3xl mx-auto">
              了解GreenBuilt自癒混凝土的革命性技術原理，以及如何為您的建築提供長期保護
            </p>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                自癒混凝土技術原理
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                這項獨特的修復系統是利用一種可生成石灰石結晶的生物添加劑，使混凝土擁有自行產生防水層和修護裂痕的能力。當混凝土出現裂縫時，生物添加劑會被激活，開始產生石灰石結晶來填補裂縫。
              </p>
              <p className="text-lg text-gray-600 mb-8">
                這項技術是由被稱為歐洲MIT的台夫特理工大學所研發並以該校名義申請國際專利。經過無數次成功的實驗後，此項技術在發佈時就入圍了2015年歐洲發明獎決賽。
              </p>
              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="text-primary mb-2 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={constructionImage}
                alt="混凝土技術"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              自癒過程
            </h2>
            <p className="text-xl text-gray-600">
              了解自癒混凝土如何自動修復裂縫
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <CardTitle>裂縫出現</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  混凝土因各種因素產生裂縫，水分開始滲入
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <CardTitle>生物激活</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  水分激活混凝土中的生物添加劑，開始自癒過程
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <CardTitle>結晶生成</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  生物添加劑產生石灰石結晶，填補裂縫空隙
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <CardTitle>完全修復</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  裂縫被完全填補，恢復混凝土的完整性和防水性
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={repairImage}
                alt="混凝土修復"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                技術優勢
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                GreenBuilt自癒混凝土技術帶來的多重優勢，為建築業帶來革命性的改變
              </p>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            國際認證與獎項
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            我們的技術獲得多項國際認證，證明其卓越的品質和效能
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">歐盟CE認證</h3>
                <p className="text-gray-600">
                  符合歐盟安全、健康、環保要求的強制性認證
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">2015年歐洲發明獎</h3>
                <p className="text-gray-600">
                  入圍歐洲發明獎決賽，獲得國際認可
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">日本NETIS認證</h3>
                <p className="text-gray-600">
                  2022年受到日本國土交通省(NETIS)效能認可
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technology

