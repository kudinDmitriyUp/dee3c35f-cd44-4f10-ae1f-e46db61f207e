import React from 'react';

function ProductSection({ title, subtitle, description, backgroundColor, textColor, image, imageAlt }) {
  return (
    <section className={`${backgroundColor} ${textColor} product-section`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-2">{title}</h2>
          <p className="text-lg md:text-xl mb-2">{subtitle}</p>
          {description && (
            <p className="text-lg md:text-xl">{description}</p>
          )}
          <div className="flex justify-center space-x-4 mt-6">
            <button className="btn-primary">
              Learn more
            </button>
            <button className="btn-secondary">
              Buy
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <img 
              src={image} 
              alt={imageAlt}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;