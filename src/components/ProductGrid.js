import React from 'react';

function ProductGrid() {
  const products = [
    {
      title: 'AirPods Pro 3',
      subtitle: 'The world\'s best in-ear Active Noise Cancellation.',
      backgroundColor: 'bg-white',
      textColor: 'text-black',
      image: '/images/airpods-pro-3.jpg'
    },
    {
      title: 'iPad Air',
      subtitle: 'Now supercharged by the M3 chip.',
      backgroundColor: 'bg-blue-100',
      textColor: 'text-black',
      image: '/images/ipad-air.jpg'
    },
    {
      title: 'WATCH SERIES 11',
      subtitle: 'The ultimate device on your wrist.',
      backgroundColor: 'bg-white',
      textColor: 'text-black',
      image: '/images/apple-watch-11.jpg'
    },
    {
      title: 'iPad',
      subtitle: 'Now with the speed of the A18 chip and double the starting storage.',
      backgroundColor: 'bg-white',
      textColor: 'text-black',
      image: '/images/ipad.jpg'
    },
    {
      title: 'Trade In',
      subtitle: 'Get $180-$650 in credit when you trade in iPhone 12 or higher.',
      backgroundColor: 'bg-white',
      textColor: 'text-black',
      image: '/images/trade-in.jpg'
    },
    {
      title: 'Card',
      subtitle: 'Get up to 3% Daily Cash back with every purchase.',
      backgroundColor: 'bg-white',
      textColor: 'text-black',
      image: '/images/apple-card.jpg'
    }
  ];

  return (
    <section className="bg-apple-light-gray py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div key={index} className={`${product.backgroundColor} ${product.textColor} rounded-2xl p-8 text-center min-h-96 flex flex-col justify-between`}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{product.title}</h3>
                <p className="text-lg mb-6">{product.subtitle}</p>
                <div className="flex justify-center space-x-4">
                  <button className="btn-primary">
                    Learn more
                  </button>
                  <button className="btn-secondary">
                    Buy
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;