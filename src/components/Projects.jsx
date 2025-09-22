
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
      title: '阿姆斯特丹Schiphol機場',
      category: 'infrastructure',
      location: '荷蘭阿姆斯特丹',
      year: '2018',
      client: 'Schiphol Airport',
      description: '使用Basilisk Self-Healing Repair Mortar MR3進行長久性修復工程。',
      image: project1,
      results: [
        '長久性修復完成',
        '提升機場設施耐久性',
        '減少維護成本'
      ],
      technologies: ['Basilisk Self-Healing Repair Mortar MR3'],
      area: '大型機場設施'
    },
    {
      id: 2,
      title: '荷蘭高速公路A20',
      category: 'infrastructure',
      location: '荷蘭',
      year: '2020',
      client: '荷蘭國家水利局',
      description: '高速公路基礎設施的長久性修復，使用Basilisk MR3技術。',
      image: project2,
      results: [
        '道路結構完全修復',
        '延長使用壽命',
        '減少交通中斷時間'
      ],
      technologies: ['Basilisk Self-Healing Repair Mortar MR3'],
      area: '高速公路段'
    },
    {
      id: 3,
      title: '荷蘭葛羅寧根會議中心',
      category: 'commercial',
      location: '荷蘭葛羅寧根',
      year: '2016',
      client: 'BAM Utiliteitsbouw',
      description: '會議中心長久性修復防漏水工程，施工面積101平方公尺。',
      image: project3,
      results: [
        '100%解決滲漏問題',
        '建築防水性能提升',
        '延長建築使用壽命'
      ],
      technologies: ['Basilisk Self-Healing Repair Mortar MR3'],
      area: '101 m²'
    },
    {
      id: 4,
      title: 'het Loo皇宮',
      category: 'heritage',
      location: '荷蘭',
      year: '2019',
      client: 'BAM',
      description: '皇宮建築的長久性修復防漏水工程，混凝土用量5000平方公尺，施工時程六週。',
      image: constructionImage,
      results: [
        '歷史建築完美修復',
        '保護文化遺產',
        '專業級修復品質'
      ],
      technologies: ['Basilisk Self-Healing Repair Mortar MR3'],
      area: '5,000 m²'
    },
    {
      id: 5,
      title: '公共停車場',
      category: 'infrastructure',
      location: '荷蘭',
      year: '2022',
      client: '荷蘭政府',
      description: '公共停車場防漏水及加強結構工程，混凝土用量180平方公尺。',
      image: constructionImage,
      results: [
        '結構安全性提升',
        '防水效能優異',
        '延長設施壽命'
      ],
      technologies: ['Basilisk Self-Healing Repair Mortar MR3'],
      area: '180 m²'
    },
    {
      id: 6,
      title: 'Europol停車場',
      category: 'infrastructure',
      location: '荷蘭',
      year: '2021',
      client: 'Rijksvastgoedbedrijf RVB',
      description: '大面積快速施工，減少空間封閉時間，施工面積12000平方公尺。',
      image: constructionImage,
      results: [
        '大面積施工完成',
        '縮短封閉時間',
        '提高施工效率'
      ],
      technologies: ['Basilisk concrete crack repair ER7'],
      area: '12,000 m²'
    }
  ]

  const categories = [
    { id: 'all', label: '全部項目' },
    { id: 'commercial', label: '商業建築' },
    { id: 'infrastructure', label: '基礎設施' },
    { id: 'industrial', label: '工業建築' },
    { id: 'heritage', label: '文化遺產' }
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white
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


