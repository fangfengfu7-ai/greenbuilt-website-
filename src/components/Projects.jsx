import { useState } from 'react'
import { Calendar, MapPin, Building, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Import project images
import project1 from '../assets/Y9PMcaimRg7X.jpg'
import project2 from '../assets/BcT6sJeWuuzw.jpg'
import project3 from '../assets/aMPHxuuzphvB.jpg'
import constructionImage from '../assets/WMFfKzRPuQ3D.jpg'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: '台北101大樓地下室防水工程',
      category: 'commercial',
      location: '台北市信義區',
      year: '2023',
      client: '台北101股份有限公司',
      description: '使用REGEN生物型防水砂漿進行地下室防水修復，有效解決長期滲漏問題。',
      image: project1,
      results: [
        '100%解決滲漏問題',
        '預計延長使用壽命20年',
        '節省維修成本60%'
      ],
      technologies: ['REGEN防水砂漿', 'GreenBuilt Healing Agent'],
      area: '5,000 m²'
    },
    {
      id: 2,
      title: '高雄港碼頭結構修復',
      category: 'infrastructure',
      location: '高雄市前鎮區',
      year: '2023',
      client: '台灣港務股份有限公司',
      description: '海事工程環境下的混凝土結構修復，使用自癒混凝土技術抵抗海水侵蝕。',
      image: project2,
      results: [
        '抗海水侵蝕能力提升80%',
        '結構強度完全恢復',
        '維修週期延長至10年'
      ],
      technologies: ['自癒混凝土', 'GreenBuilt Healing Agent'],
      area: '3,200 m²'
    },
    {
      id: 3,
      title: '新竹科學園區廠房建設',
      category: 'industrial',
      location: '新竹市東區',
      year: '2022',
      client: '台積電股份有限公司',
      description: '新建廠房採用自癒混凝土技術，確保長期結構穩定性和防水性能。',
      image: project3,
      results: [
        '零滲漏率達成',
        '結構完整性保證50年',
        '符合半導體廠房標準'
      ],
      technologies: ['自癒混凝土', 'REGEN防水砂漿'],
      area: '8,500 m²'
    },
    {
      id: 4,
      title: '桃園機場跑道修復工程',
      category: 'infrastructure',
      location: '桃園市大園區',
      year: '2022',
      client: '桃園國際機場股份有限公司',
      description: '機場跑道裂縫修復，使用自癒技術確保飛行安全和跑道耐久性。',
      image: constructionImage,
      results: [
        '跑道平整度提升95%',
        '抗重載能力增強',
        '維修頻率降低70%'
      ],
      technologies: ['自癒混凝土', 'GreenBuilt Healing Agent'],
      area: '12,000 m²'
    }
  ]

  const categories = [
    { id: 'all', label: '全部項目' },
    { id: 'commercial', label: '商業建築' },
    { id: 'infrastructure', label: '基礎設施' },
    { id: 'industrial', label: '工業建築' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const stats = [
    { icon: <Building className="h-8 w-8" />, value: '50+', label: '完成項目' },
    { icon: <Users className="h-8 w-8" />, value: '30+', label: '合作客戶' },
    { icon: <MapPin className="h-8 w-8" />, value: '100,000+', label: '施工面積 (m²)' },
    { icon: <Calendar className="h-8 w-8" />, value: '5+', label: '服務年數' }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">工程實績</h1>
            <p className="text-xl max-w-3xl mx-auto">
              探索我們在各種建築項目中的成功應用案例，見證自癒混凝土技術的卓越表現
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
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

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">
                      {categories.find(cat => cat.id === project.category)?.label}
                    </Badge>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Building className="h-4 w-4 mr-2" />
                      {project.client}
                    </div>

                    <p className="text-gray-600">{project.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2">使用技術</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">項目成果</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">施工面積</span>
                        <span className="font-semibold">{project.area}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              客戶見證
            </h2>
            <p className="text-xl text-gray-600">
              聽聽我們客戶對GreenBuilt自癒混凝土技術的評價
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-600 mb-6 italic">
                  "使用GreenBuilt自癒混凝土技術後，我們的地下室滲漏問題完全解決了。這項技術不僅效果顯著，而且為我們節省了大量的維修成本。"
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold">張工程師</div>
                    <div className="text-sm text-gray-500">台北101股份有限公司</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-600 mb-6 italic">
                  "在海事工程環境中，GreenBuilt的自癒混凝土表現出色。抗海水侵蝕的能力遠超我們的預期，大大延長了結構的使用壽命。"
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold">李主任</div>
                    <div className="text-sm text-gray-500">台灣港務股份有限公司</div>
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
            讓我們為您的項目提供解決方案
          </h2>
          <p className="text-xl mb-8">
            無論是新建工程還是修復項目，我們都能為您提供最適合的自癒混凝土技術方案
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">開始諮詢</a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Projects

