import { TrendingUp, ShoppingCart, Users, Globe } from 'lucide-react';

import ThemeProvider from '@/components/theme/ThemeProvider';
import AboutMetric from '@/components/sections/about/AboutMetric';

export default function Home() {
  return (
    <ThemeProvider 
      defaultButtonVariant="icon-arrow" 
      defaultTextAnimation="reveal-blur" 
      borderRadius="soft" 
      background="aurora" 
      cardStyle="glass-elevated" 
      primaryButtonStyle="gradient" 
      secondaryButtonStyle="glass"
    >
      <div id="about" data-section="about">
        <AboutMetric 
          title="At Berco Inc. we redefine innovation by empowering businesses to reach their full potential" 
          metrics={[
            { icon: TrendingUp, label: '500+ Satisfied Customers', value: '500+' },
            { icon: ShoppingCart, label: 'Founded in 2018', value: '2018' },
            { icon: Users, label: '99% Uptime Guarantee', value: '99%' },
            { icon: Globe, label: 'Global Reach', value: '50+' }
          ]} 
        />
      </div>
    </ThemeProvider>
  );
}