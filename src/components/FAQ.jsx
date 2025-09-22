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
          answer: '我們的自癒混凝土技術可以自動修復最大寬度達1毫米的裂縫。對於更大的裂縫，建議結合其他修復方法使用。'
        },
        {
          question: '自癒過程需要多長時間？',
          answer: '自癒過程通常在7-28天內完成，具體時間取決於環境條件如溫度、濕度以及裂縫的大小。在適當的條件下，小裂縫可能在幾天內就開始癒合。'
        },
        {
          question: '自癒混凝土可以重複修復嗎？',
          answer: '是的，這是我們技術的一大優勢。只要生物添加劑仍然活躍，混凝土就可以多次進行自我修復，有效期可達建築物的整個使用壽命。'
        },
        {
          question: '自癒混凝土適用於哪些環境？',
          answer: '自癒混凝土適用於大多數建築環境，包括地下室、橋樑、隧道、海事工程等。使用溫度範圍為-20°C至+60°C，具有優異的抗凍和抗滲性能。'
        }
      ]
    },
    {
      title: '施工相關問題',
      icon: <HelpCircle className="h-6 w-6" />,
      questions: [
        {
          question: '自癒混凝土的施工方法與普通混凝土有何不同？',
          answer: '基本施工方法與普通混凝土相似，但需要特別注意混合比例和養護條件。我們會提供詳細的施工指南和現場技術支援，確保最佳效果。'
        },
        {
          question: '施工時需要特殊設備嗎？',
          answer: '不需要特殊設備。可以使用標準的混凝土攪拌和澆築設備。但建議使用我們推薦的攪拌參數以確保生物添加劑均勻分布。'
        },
        {
          question: '施工後需要特殊的養護嗎？',
          answer: '需要適當的濕度養護以激活生物添加劑。建議在初期保持適當濕潤環境，避免過度乾燥。我們會提供詳細的養護指南。'
        },
        {
          question: '可以在既有結構上使用嗎？',
          answer: '可以。我們的REGEN防水砂漿特別適用於既有建築的修復工程。可以直接塗抹在清理乾淨的混凝土表面上。'
        }
      ]
    },
    {
      title: '價格與服務問題',
      icon: <DollarSign className="h-6 w-6" />,
      questions: [
        {
          question: '自癒混凝土的成本如何？',
          answer: '雖然初期成本略高於普通混凝土，但考慮到大幅減少的維修成本和延長的使用壽命，總體經濟效益非常顯著。具體價格請聯絡我們獲得詳細報價。'
        },
        {
          question: '提供哪些服務？',
          answer: '我們提供完整的服務包括：技術諮詢、產品供應、施工指導、品質檢測、售後服務等。從設計階段到施工完成，全程技術支援。'
        },
        {
          question: '有品質保證嗎？',
          answer: '我們對產品品質提供完整保證。所有產品都經過嚴格品質控制，並提供相應的品質證明文件。施工品質也有專業團隊把關。'
        },
        {
          question: '交貨時間如何？',
          answer: '一般產品庫存充足，可在1-2週內交貨。大型項目會根據具體需求制定交貨計劃，確保按時供應。'
        }
      ]
    },
    {
      title: '應用與效果問題',
      icon: <Clock className="h-6 w-6" />,
      questions: [
        {
          question: '自癒混凝土在台灣氣候下表現如何？',
          answer: '非常適合台灣的海島型氣候。高溫多濕的環境實際上有利於自癒過程，而優異的抗滲性能可以有效抵抗颱風和梅雨季節的水害。'
        },
        {
          question: '地震對自癒功能有影響嗎？',
          answer: '地震可能產生新的裂縫，但這正是自癒技術發揮作用的時候。只要裂縫在可修復範圍內，自癒功能會自動啟動修復過程。'
        },
        {
          question: '與傳統防水材料相比有何優勢？',
          answer: '傳統防水材料通常只能提供表面保護，而自癒混凝土是從材料本身具備防水和自修復能力，更加持久可靠，且無需定期更換。'
        },
        {
          question: '環保性能如何？',
          answer: '非常環保。生物添加劑來自天然材料，無毒無害。延長建築壽命減少重建需求，大幅降低碳足跡，符合永續發展目標。'
        },
        {
          question: '有成功案例可以參考嗎？',
          answer: '我們在台灣已完成多個成功案例，包括台北101、高雄港、桃園機場等重要項目。詳細案例資訊請參考我們的工程實績頁面。'
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

