import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: '電話',
      content: '+886 0911005440',
      description: '週一至週五 09:00-18:00'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'greenbuilt2023@gmail.com',
      description: '24小時內回覆'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: '地址',
      content: 'No.18, Alley 56 Le Quang Dao, Phu Do Ward, Nam Tu Liem District, Hanoi',
      description: '綠築貿易有限公司'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '營業時間',
      content: '週一至週五 09:00-18:00',
      description: '週六日及國定假日休息'
    }
  ]

  const services = [
    {
      title: '技術諮詢',
      description: '專業工程師為您解答技術問題，提供最適合的解決方案',
      features: ['產品選擇建議', '技術可行性評估', '成本效益分析']
    },
    {
      title: '現場勘查',
      description: '專業團隊到現場評估，制定詳細的施工計劃',
      features: ['現場條件評估', '施工方案設計', '風險評估分析']
    },
    {
      title: '施工支援',
      description: '提供完整的施工指導和技術支援服務',
      features: ['施工培訓', '現場技術指導', '品質控制']
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">聯絡我們</h1>
            <p className="text-xl max-w-3xl mx-auto">
              準備開始您的自癒混凝土項目？我們的專業團隊隨時為您提供協助
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                發送訊息給我們
              </h2>
              
              {isSubmitted ? (
                <Card className="p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    訊息已送出！
                  </h3>
                  <p className="text-gray-600">
                    感謝您的聯絡，我們會在24小時內回覆您。
                  </p>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        姓名 *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="請輸入您的姓名"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="請輸入您的Email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        電話
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="請輸入您的電話"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        公司名稱
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="請輸入您的公司名稱"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      諮詢類型 *
                    </label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="請選擇諮詢類型" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">技術諮詢</SelectItem>
                        <SelectItem value="quotation">報價詢問</SelectItem>
                        <SelectItem value="project">項目合作</SelectItem>
                        <SelectItem value="support">技術支援</SelectItem>
                        <SelectItem value="other">其他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      訊息內容 *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="請詳細描述您的需求或問題..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    發送訊息
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                聯絡資訊
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="text-primary mr-4 mt-1">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-gray-900 mb-1">{info.content}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">地圖位置</p>
                      <p className="text-sm text-gray-500">綠築貿易有限公司</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              我們的服務
            </h2>
            <p className="text-xl text-gray-600">
              從諮詢到施工，提供全方位的專業服務
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              常見問題
            </h2>
            <p className="text-xl text-gray-600">
              在聯絡我們之前，您可能想先了解這些常見問題
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  自癒混凝土的成本如何？
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  雖然初期成本略高，但考慮到減少的維修成本和延長的使用壽命，總體經濟效益顯著。
                </p>
                <a href="/faq" className="text-primary hover:underline text-sm">
                  查看更多 →
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  施工方法有何不同？
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  基本施工方法與普通混凝土相似，但需要特別注意混合比例和養護條件。
                </p>
                <a href="/faq" className="text-primary hover:underline text-sm">
                  查看更多 →
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  可以修復多大的裂縫？
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  我們的自癒混凝土技術可以自動修復最大寬度達1毫米的裂縫。
                </p>
                <a href="/faq" className="text-primary hover:underline text-sm">
                  查看更多 →
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <a href="/faq">查看所有常見問題</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

