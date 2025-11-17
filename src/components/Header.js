import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';

function Header() {
  const navItems = [
    'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-8">
            <div className="w-4 h-4 apple-logo-bg rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold"></span>
            </div>
            {navItems.map((item, index) => (
              <a key={index} href="#" className="text-sm text-gray-800 hover:text-gray-600 transition-colors hidden lg:block">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-4 h-4 text-gray-800 hover:text-gray-600 cursor-pointer" />
            <ShoppingCart className="w-4 h-4 text-gray-800 hover:text-gray-600 cursor-pointer" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;