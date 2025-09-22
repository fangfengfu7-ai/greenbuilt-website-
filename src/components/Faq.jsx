
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Faq = () => {
  const technicalFaqs = [
    {
      question: "什麼是自癒混凝土？",
      answer: "自癒混凝土是一種創新的建築材料，內含特殊的生物添加劑。當混凝土出現裂縫時，這些添加劑會被水分激活，產生石灰石結晶來自動填補裂縫，恢復混凝土的完整性和防水性能。"
    },
    {
      question: "自癒混凝土可以修復多大的裂縫？",
      answer: "GreenBuilt自癒混凝土技術可以有效修復寬度達1.0毫米的裂縫。"
    },
    {
      question: "自癒過程需要多長時間？",
      answer: "自癒過程通常在7到28天內完成，具體時間取決於環境條件和裂縫大小。"
    },
    {
      question: "自癒混凝土的壽命有多長？",
      answer: "經過自癒技術處理的混凝土，其壽命可延長30%以上，與建築物本身的設計壽命相當。"
    },
    {
      question: "自癒混凝土對環境友好嗎？",
      answer: "是的，自癒混凝土是一種環保材料。它減少了對傳統修復材料的需求，降低了維護成本和碳足跡，符合永續發展的原則。"
    }
  ]

  const applicationFaqs = [
    {
      question: "自癒混凝土適用於哪些類型的建築？",
      answer: "自癒混凝土適用於各種建築類型，包括住宅、商業建築、基礎設施（如橋樑、道路、隧道）以及海事工程等。"
    },
    {
      question: "可以在現有建築中使用自癒混凝土嗎？",
      answer: "可以。GreenBuilt提供多種產品，包括自癒修復砂漿，可用於現有建築的修復和防水工程。"
    },
    {
      question: "自癒混凝土的施工方式與傳統混凝土有何不同？",
      answer: "自癒混凝土的施工方式與傳統混凝土相似，只需在拌合過程中加入生物添加劑。我們的產品也提供易於施工的砂漿形式。"
    },
    {
      question: "自癒混凝土的成本如何？",
      answer: "雖然初始成本可能略高於傳統混凝土，但長期來看，自癒混凝土能大幅降低維護和修復費用，具有更高的經濟效益。"
    }
  ]

  const generalFaqs = [
    {
      question: "GreenBuilt的產品有什麼認證？",
      answer: "我們的產品獲得多項國際認證，包括歐盟CE認證、2015年歐洲發明獎入圍，以及日本國土交通省(NETIS)的效能認可。"
    },
    {
      question: "如何聯絡GreenBuilt獲取更多資訊？",
      answer: "您可以透過我們的網站聯絡表單、電子郵件或電話與我們聯繫，我們的專業團隊將樂意為您提供詳細資訊和技術支援。"
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
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
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              技術相關問題
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {technicalFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
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

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              應用相關問題
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {applicationFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
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

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              一般問題
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {generalFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
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
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">聯絡我們</a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Faq


