import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Wrench, HelpCircle, DollarSign, Clock } from "lucide-react"

const Faq = () => {
  const faqCategories = [
    {
      title: '技術相關問題',
      icon: <Wrench className="h-6 w-6" />,
      questions: [
        {
          question: '什麼是自癒混凝土?',
          answer: '自癒混凝土是一種創新的建築材料，內含特殊的生物添加劑。當混凝土出現裂縫時，這些添加劑會被水分激活，產生石灰石結晶來自動填補裂縫，恢復混凝土的完整性和防水性能。'
        },
        {
          question: '自癒混凝土可以修復多大的裂縫?',
          answer: '自癒混凝土可以修復寬度達0.8毫米的裂縫。對於更寬的裂縫，可能需要傳統的修復方法。'
        },
        {
          question: '自癒過程需要多長時間?',
          answer: '自癒過程通常在幾天到幾週內完成，具體取決於環境條件和裂縫的大小。在理想條件下，裂縫可以在短時間內完全閉合。'
        },
        {
          question: '自癒混凝土的成本如何?',
          answer: '雖然自癒混凝土的初始成本可能略高於傳統混凝土，但由於其能顯著減少維護和修復費用，長期來看具有更高的經濟效益。'
        },
        {
          question: '自癒混凝土對環境有益嗎?',
          answer: '是的，自癒混凝土有助於減少碳足跡，延長建築物壽命，減少對新材料的需求，並降低維護過程中的能源消耗，對環境非常友好。'
        },
        {
          question: '自癒混凝土的耐久性如何?',
          answer: '自癒混凝土的耐久性與傳統混凝土相當，甚至更優。自癒功能有助於防止水分滲入和鋼筋腐蝕，從而延長結構的使用壽命。'
        },
        {
          question: '自癒混凝土適用於哪些應用?',
          answer: '自癒混凝土適用於各種建築結構，包括橋樑、隧道、地下室、水處理設施、停車場和住宅建築等，特別是在潮濕或難以維護的環境中。'
        },
        {
          question: '自癒混凝土的安全性如何?',
          answer: '自癒混凝土使用的生物添加劑是無毒且對環境無害的。它經過嚴格測試，符合相關的安全和環保標準。'
        },
        {
          question: '自癒混凝土的施工方式與傳統混凝土有何不同?',
          answer: '自癒混凝土的施工方式與傳統混凝土基本相同，無需特殊設備或額外培訓。只需將生物添加劑與混凝土混合即可。'
        },
        {
          question: '自癒混凝土的壽命有多長?',
          answer: '自癒混凝土的自癒能力可以顯著延長結構的壽命，通常可達80年以上，遠超傳統混凝土的平均壽命。'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">常見問題集</h1>
            <p className="text-xl max-w-3xl mx-auto">
              找到您關於自癒混凝土技術的所有疑問解答，從技術原理到實際應用
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${catIndex}-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            還有其他問題嗎？
          </h2>
          <p className="text-xl mb-8">
            聯絡我們的專業團隊，獲得您需要的解答
          </p>
          {/* <Button size="lg" variant="secondary" asChild>
            <a href="/contact">聯絡我們</a>
          </Button> */}
        </div>
      </section>
    </div>
  )
}

export default Faq


