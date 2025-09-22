
import { Link } from 'react-router-dom'
import { Shield, Droplets, Recycle, Award, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Greenheal 水泥沙漿',
      category: '生物型自行修復水泥',
      description: 'Greenheal是乾拌水泥沙漿，加水攪拌均勻即可使用。施工塗抹後，水泥沙漿是結構體表面修飾材料，具有自發性修復龜裂的能力。',
      features: [
        '自發性修復裂縫',
        '防水的混凝土',
        '減少鋼筋使用量',
        '延長建築壽命超過30%'
      ],
      certifications: ['NEN-EN 1503-2:2004認證', '荷蘭台夫特理工大學研發'],
      applications: ['結構體表面修飾', '防水工程', '修復工程']
    },
    {
      id: 2,
      name: 'Basilisk ER7',
      category: '混凝土裂縫修復',
      description: '適用於大面積快速施工的混凝土裂縫修復產品，能夠減少空間封閉時間，提高施工效率。',
      features: [
        '大面積快速施工',
        '減少空間封閉時間',
        '適用多種應用場景',
        '高效修復效果'
      ],
      certifications: ['國際專利技術', '多項創新獎項'],
      applications: ['停車場', '機場', '道路', '橋樑']
    },
    {
      id: 3,
      name: 'Basilisk Self-Healing Repair Mortar MR3',
      category: '自癒修復砂漿',
      description: '專業級自癒修復砂漿，廣泛應用於國際重要基礎設施項目，提供長久性修復防漏水解決方案。',
      features: [
        '長久性修復',
        '防漏水功能',
        '國際項目驗證',
        '專業級品質'
      ],
      certifications: ['國際專利技術', '多國政府認可'],
      applications: ['機場', '高速公路', '會議中心', '皇宮建築']
    }
  ]

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: '防水的混凝土',
      description: '提供優異的防水性能，有效防止水分滲透造成的結構損害'
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: '減少鋼筋使用量',
      description: '最多可減少33kg鋼筋每立方公尺，降低建造成本和碳足跡'
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: '減少二氧化碳排放',
      description: '自發性修復混凝土減少25%的二氧化碳排放量，等同136kg CO2每立方公尺'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: '延長建築壽命',
      description: '延長建築壽命超過30%，減少維修及閒置時間達40%'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
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
              為什麼選擇Basilisk生物型自行修復水泥產品
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


