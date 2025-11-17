import React from 'react';

function Footer() {
  const footerSections = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']
    },
    {
      title: 'Apple Wallet',
      links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']
    },
    {
      title: 'Account',
      links: ['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com']
    },
    {
      title: 'Entertainment',
      links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store']
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help']
    },
    {
      title: 'For Business',
      links: ['Apple and Business', 'Shop for Business']
    },
    {
      title: 'For Education',
      links: ['Apple and Education', 'Shop for K-12', 'Shop for College']
    },
    {
      title: 'For Healthcare',
      links: ['Apple and Healthcare']
    },
    {
      title: 'For Government',
      links: ['Apple and Government', 'Shop for Veterans and Military', 'Shop for State and Local Employees', 'Shop for Federal Employees']
    },
    {
      title: 'Apple Values',
      links: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supply Chain Innovation']
    },
    {
      title: 'About Apple',
      links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple']
    }
  ];

  return (
    <footer className="bg-apple-light-gray py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs text-apple-text-gray mb-8 leading-relaxed">
          <p className="mb-4">
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse, cancel, or limit quantity of any trade-in transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-black mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-xs text-apple-text-gray hover:text-black transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-300 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-apple-text-gray">
            <div className="mb-4 md:mb-0">
              <span>More ways to shop: </span>
              <a href="#" className="text-apple-blue hover:underline">Find an Apple Store</a>
              <span> or </span>
              <a href="#" className="text-apple-blue hover:underline">other retailer</a>
              <span> near you. Or call 1-800-MY-APPLE.</span>
            </div>
            <div>
              <span>United States</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-xs text-apple-text-gray">
            <div className="mb-4 md:mb-0">
              <span>Copyright © 2025 Apple Inc. All rights reserved.</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-black transition-colors">Sales and Refunds</a>
              <a href="#" className="hover:text-black transition-colors">Legal</a>
              <a href="#" className="hover:text-black transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;