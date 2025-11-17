import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ProductGrid from './components/ProductGrid';
import AppleTVSection from './components/AppleTVSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductSection 
        title="iPhone 17 Pro"
        subtitle="All out Pro."
        backgroundColor="bg-black"
        textColor="text-white"
        image="/images/iphone-17-pro.jpg"
        imageAlt="iPhone 17 Pro"
      />
      <ProductSection 
        title="iPhone Air"
        subtitle="The thinnest iPhone ever."
        description="With the power of pro inside."
        backgroundColor="bg-apple-light-gray"
        textColor="text-black"
        image="/images/iphone-air.jpg"
        imageAlt="iPhone Air"
      />
      <ProductGrid />
      <AppleTVSection />
      <Footer />
    </div>
  );
}

export default App;