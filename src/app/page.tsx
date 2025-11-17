import FaqBase from '@/components/sections/faq/FaqBase';
import { Shield } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="faq" data-section="faq">
        <FaqBase
          faqs={[
            {
              id: "1",
              title: "Is there a free trial available?",
              content: "Yes! We offer a 14-day free trial with full access to all premium features. No credit card required to start."
            },
            {
              id: "2", 
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans."
            },
            {
              id: "3",
              title: "Can I cancel my subscription anytime?", 
              content: "Absolutely! You can cancel your subscription at any time with no cancellation fees. Your access continues until the end of your billing period."
            },
            {
              id: "4",
              title: "Do you offer refunds?",
              content: "We offer a 30-day money-back guarantee. If you're not completely satisfied, contact us within 30 days for a full refund."
            },
            {
              id: "5", 
              title: "What kind of customer support do you provide?",
              content: "We provide 24/7 email support for all users, with priority phone and chat support for premium subscribers. Our average response time is under 2 hours."
            }
          ]}
          title="Frequently Asked Questions"
          description="Get answers to the most common questions about our pricing, features, and policies"
          tag="Support"
          tagIcon={Shield}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>
    </main>
  );
}