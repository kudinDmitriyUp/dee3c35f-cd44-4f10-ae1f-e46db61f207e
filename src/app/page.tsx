import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import { Sparkles, Zap, Shield, Star } from 'lucide-react';
import PlainBackground from '@/components/background/PlainBackground';

export default function Home() {
  return (
    <main className="min-h-screen">
      <PlainBackground />
      <div className="relative z-10">
        <div id="pricing" data-section="pricing">
          <PricingCardOne 
            plans={[
              {
                id: '1',
                badge: 'Limited Time - 50% Off First Month',
                badgeIcon: Sparkles,
                price: '$9/mo',
                subtitle: 'Perfect for individuals getting started',
                features: [
                  '5 team members',
                  '10GB storage',
                  'Basic support',
                  'Core features'
                ]
              },
              {
                id: '2',
                badge: 'Most Popular - Save 30%',
                badgeIcon: Star,
                price: '$19/mo',
                subtitle: 'Best value for growing teams',
                features: [
                  '15 team members',
                  '50GB storage',
                  'Priority support',
                  'Advanced analytics',
                  'Custom integrations'
                ]
              },
              {
                id: '3',
                badge: 'Limited Spots Available',
                badgeIcon: Shield,
                price: '$39/mo',
                subtitle: 'Complete solution for enterprises',
                features: [
                  'Unlimited team members',
                  '500GB storage',
                  '24/7 dedicated support',
                  'Advanced security',
                  'Custom workflows',
                  'API access'
                ]
              }
            ]}
            title="Choose Your Plan"
            description="Limited-time offers to get you started with the best value"
            textboxLayout="default"
            animationType="slide-up"
            gridVariant="uniform-all-items-equal"
          />
        </div>
      </div>
    </main>
  )
}