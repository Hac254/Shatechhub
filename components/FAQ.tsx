'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Why drip irrigation?',
    answer:
      'Each drip tells a story of conservation. Drip irrigation delivers water directly to plant roots, reducing waste by up to 60% compared to traditional irrigation. It saves water, cuts costs, and increases yields—essential for semi-arid farming in Machakos.',
  },
  {
    question: 'How much do drip irrigation kits cost?',
    answer:
      'Kit costs vary based on farm size and system complexity. We offer affordable options starting from small demos to full installations. We can provide customized quotes after assessing your specific needs.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'Most drip systems can be installed within 2-5 days depending on farm size. We provide training during installation so you can manage the system independently.',
  },
  {
    question: 'Is organic farming suitable for dry climate?',
    answer:
      'Yes! Organic methods improve soil structure, increasing water retention. Organic manure builds soil health, helping crops survive droughts better. Many successful organic farms thrive in Machakos using our techniques.',
  },
  {
    question: 'What is terracing for drylands?',
    answer:
      'Terracing involves creating level steps on slopes to conserve water and prevent erosion. It slows water runoff, allowing it to soak into the soil. This restores soil fertility and helps combat climate change.',
  },
  {
    question: 'Can I visit the demo farm?',
    answer:
      'Absolutely! Our demo farm in Machakos is open for visits. You can see firsthand how drip systems, organic farming, and terracing work together. Contact us to schedule a visit at +254 702 791 852.',
  },
  {
    question: 'How do you provide support after installation?',
    answer:
      'We provide ongoing technical support, maintenance guidance, and seasonal consultations. We also connect farmers with each other for peer learning and community building.',
  },
  {
    question: 'Do you offer training programs?',
    answer:
      'Yes! We offer training in drip system operation, organic farming practices, soil conservation, and climate-smart agriculture. Training can be customized for individual farmers or community groups.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our services and sustainable farming practices.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-foreground hover:text-primary py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Support */}
        <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Still have questions?</h3>
          <p className="text-foreground">
            Contact us directly at{' '}
            <a href="tel:+254702791852" className="text-primary hover:underline font-semibold">
              +254 702 791 852
            </a>{' '}
            or visit our demo farm in Machakos. We&apos;re here to help!
          </p>
        </div>
      </div>
    </section>
  )
}
