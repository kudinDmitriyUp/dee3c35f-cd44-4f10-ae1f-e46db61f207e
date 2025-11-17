import React from 'react';

function Hero() {
  return (
    <section className="bg-apple-light-gray py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-8 apple-logo-bg rounded-2xl flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold apple-logo-gradient"></span>
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
          Give something special.
        </h1>
        <p className="text-lg md:text-xl text-apple-text-gray mb-8">
          Find what they've been waiting for all year.
        </p>
        <button className="btn-primary">
          Shop gifts
        </button>
      </div>
    </section>
  );
}

export default Hero;