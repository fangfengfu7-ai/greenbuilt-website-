import { Link } from 'react-router-dom'
import { Shield, Droplets, Recycle, Award, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'GreenBuilt Healing Agent',
      category: '自癒添加劑',
      description: '全球唯一能夠重複產生防水保護層並且能夠重複修復的生物型自癒原料',
      features: [
        '重複性自癒能力',
        '生物型環保材料',
        '可加入任何水泥製品',
        '最高修復1毫米裂縫'
      ],
      certifications: ['歐盟CE認證', '德國寶馬創新建材獎冠軍'],
      applications: ['新建工程', '修復工程', '預防性維護']
    },
    {
      id: 2,
      name: 'REGEN生物型防水砂漿',
      category: '防水砂漿',
      description: '具有生命和對環境回應及適應成長特性的防水砂漿，相當於給建築物注射防水疫苗',
      features: [
        '環境回應性',
        '適應成長特性',
        '重複性自癒',
        '損害控管概念'
      ],
      certifications: ['台灣建材認證', '環保標章'],
      applications: ['住宅防水', '商業建築', '基礎設施']
    },
    {
      id: 3,
      name: '自癒混凝土',
      category: '結構材料',
      description: '整合自癒技術的混凝土，能夠自動修復裂縫並延長建築物使用壽命',
      features: [
        '自動裂縫修復',
        '延長使用壽命',
        '降低維修成本',
        '永續環保'
      ],
      certifications: ['國際專利技術', '多國政府認可'],
      applications: ['橋樑工程', '隧道工程', '海事工程']
    }
  ]

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: '長期保護',
      description: '提供持續的結構保護，大幅延長建築物使用壽命'
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: '防水效能',
      description: '優異的防水性能，有效防止水分滲透造成的損害'
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: '環保永續',
      description: '減少維修頻率，降低碳足跡，符合永續發展目標'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: '品質保證',
      description: '多項國際認證，品質值得信賴'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">產品介紹</h1>
            <p className="text-xl max-w-3xl mx-auto">
              探索我們的創新產品系列，為您的建築項目提供最先進的自癒混凝土解決方案
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">主要特色</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">認證標章</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">應用領域</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, index) => (
                        <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <Link to="/contact">
                      了解更多
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              產品優勢
            </h2>
            <p className="text-xl text-gray-600">
              為什麼選擇GreenBuilt自癒混凝土產品
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              技術規格
            </h2>
            <p className="text-xl text-gray-600">
              詳細的產品技術參數和性能指標
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>自癒性能</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>最大修復裂縫寬度</span>
                    <span className="font-semibold">1.0 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>自癒時間</span>
                    <span className="font-semibold">7-28 天</span>
                  </div>
                  <div className="flex justify-between">
                    <span>重複修復次數</span>
                    <span className="font-semibold">多次</span>
                  </div>
                  <div className="flex justify-between">
                    <span>有效期限</span>
                    <span className="font-semibold">建築物壽命期</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>物理性能</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>抗壓強度</span>
                    <span className="font-semibold">≥ 25 MPa</span>
                  </div>
                  <div className="flex justify-between">
                    <span>抗滲等級</span>
                    <span className="font-semibold">P12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>抗凍等級</span>
                    <span className="font-semibold">F200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>使用溫度</span>
                    <span className="font-semibold">-20°C ~ +60°C</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            準備開始您的項目？
          </h2>
          <p className="text-xl mb-8">
            聯絡我們的專業團隊，為您的建築項目提供最適合的自癒混凝土解決方案
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">立即諮詢</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/projects">查看案例</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products

