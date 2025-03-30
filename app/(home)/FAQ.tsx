import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can you help me with my homework in less than 24 hours?",
    answer:
      "Our name 24HourAnswers means you can submit work 24 hours a day – it doesn’t mean we can help you master what you need to know in 24 hours. If you make arrangements in advance, and if you are a very fast learner, then yes, we may be able to help you achieve your goals in 24 hours. Remember, high quality, customized help that’s tailored around the needs of each individual student takes time to achieve. You deserve nothing less than the best, so give us the time we need to give you the best.",
  },
  {
    question: "Can you help me with my exam/quiz/test?",
    answer: "Yes, we can provide guidance and explanations to help you prepare effectively.",
  },
  {
    question: "How much will it cost?",
    answer: "The cost depends on the complexity and urgency of your request. Contact us for a quote!",
  },
  {
    question: "What kind of payments do you accept?",
    answer: "We accept major credit cards, PayPal, and other secure payment methods.",
  },
];

export default function FAQ() {
  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
