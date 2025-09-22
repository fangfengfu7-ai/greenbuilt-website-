import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, Wrench, DollarSign, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqCategories = [
    {
      title: '技術相關問題',
      icon: <Wrench className="h-6 w-6" />,
      questions: [
        {
          question: '什麼是自癒混凝土？',
          answer: '自癒混凝土是一種創新的建築材料，內含特殊的生物添加劑。當混凝土出現裂縫時，這些添加劑會被水分激活，產生石灰石結晶來自動填補裂縫，恢復混凝土的完整性和防水性能。'
        },
        {
          question: '自癒混凝土可以修復多大的裂縫？',
          answer: '自癒混凝土可以修復寬度達0.8毫米的裂縫。對於更寬的裂縫，可能需要傳統的修復方法。'
        },
        {
          question: '自癒過程需要多長時間？',
          answer: '自癒過程通常在幾天到幾週內完成，具體取決於環境條件和裂縫的大小。在理想條件下，裂縫可以在短時間內完全閉合。'
        },
        {
          question: '自癒混凝土的成本如何？',
          answer: '雖然自癒混凝土的初始成本可能略高於傳統混凝土，但由於其能顯著減少維護和修復費用，長期來看具有更高的經濟效益。'
        },
        {
          question: '自癒混凝土對環境有益嗎？',
          answer: '是的，自癒混凝土有助於減少碳足跡，延長建築物壽命，減少對新材料的需求，並降低維護過程中的能源消耗，對環境非常友好。'
        },
        {
          question: '自癒混凝土的耐久性如何？',
          answer: '自癒混凝土的耐久性與傳統混凝土相當，甚至更優。自癒功能有助於防止水分滲入和鋼筋腐蝕，從而延長結構的使用壽命。'
        },
        {
          question: '自癒混凝土適用於哪些應用？',
          answer: '自癒混凝土適用於各種建築結構，包括橋樑、隧道、地下室、水處理設施、停車場和住宅建築等，特別是在潮濕或難以維護的環境中。'
        },
        {
          question: '自癒混凝土的安全性如何？',
          answer: '自癒混凝土使用的生物添加劑是無毒且對環境無害的。它經過嚴格測試，符合相關的安全和環保標準。'
        },
        {
          question: '自癒混凝土的施工方式與傳統混凝土有何不同？',
          answer: '自癒混凝土的施工方式與傳統混凝土基本相同，無需特殊設備或額外培訓。只需將生物添加劑與混凝土混合即可。'
        },
        {
          question: '自癒混凝土的壽命有多長？',
          answer: '自癒混凝土的自癒能力可以顯著延長結構的壽命，通常可達80年以上，遠超傳統混凝土的平均壽命。'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">常見問題集</h1>
            <p className="text-xl max-w-3xl mx-auto">
              找到您關於自癒混凝土技術的所有疑問解答，從技術原理到實際應用
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-8">
                <div className="text-primary mr-3">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex // Unique index
                  const isOpen = openItems.has(globalIndex)
                  
                  return (
                    <Card key={questionIndex} className="overflow-hidden">
                      <button
                        className="w-full text-left"
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              {item.question}
                            </h3>
                            <div className="flex-shrink-0">
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                              )}
                            </div>
                          </div>
                          
                          {isOpen && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <p className="text-gray-600 leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </button>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            還有其他問題？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            如果您沒有找到想要的答案，歡迎直接聯絡我們的專業團隊
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4">
                  <HelpCircle className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">技術諮詢</h3>
                <p className="text-gray-600 text-sm mb-4">
                  專業工程師為您解答技術問題
                </p>
                <a href="/contact" className="text-primary hover:underline">
                  立即諮詢
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4">
                  <Wrench className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">施工支援</h3>
                <p className="text-gray-600 text-sm mb-4">
                  現場技術指導和施工協助
                </p>
                <a href="/contact" className="text-primary hover:underline">
                  申請支援
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4">
                  <DollarSign className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">報價諮詢</h3>
                <p className="text-gray-600 text-sm mb-4">
                  獲得詳細的產品報價和方案
                </p>
                <a href="/contact" className="text-primary hover:underline">
                  索取報價
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              延伸閱讀
            </h2>
            <p className="text-xl text-gray-600">
              深入了解自癒混凝土技術的更多資訊
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">技術白皮書</h3>
                <p className="text-gray-600 mb-4">
                  詳細的技術原理說明和實驗數據分析
                </p>
                <a href="#" className="text-primary hover:underline">
                  下載PDF →
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">施工指南</h3>
                <p className="text-gray-600 mb-4">
                  完整的施工步驟和注意事項說明
                </p>
                <a href="#" className="text-primary hover:underline">
                  下載PDF →
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">案例研究</h3>
                <p className="text-gray-600 mb-4">
                  國際成功案例的詳細分析報告
                </p>
                <a href="#" className="text-primary hover:underline">
                  下載PDF →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

