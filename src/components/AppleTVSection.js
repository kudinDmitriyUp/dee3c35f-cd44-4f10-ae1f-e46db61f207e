import React from 'react';

function AppleTVSection() {
  const shows = [
    {
      title: 'PLURIBUS',
      image: '/images/pluribus.jpg',
      backgroundColor: 'bg-yellow-400'
    },
    {
      title: 'The Buccaneers',
      image: '/images/buccaneers.jpg',
      backgroundColor: 'bg-green-400'
    },
    {
      title: 'Killers of the Flower Moon',
      image: '/images/killers.jpg',
      backgroundColor: 'bg-gray-800'
    },
    {
      title: 'Napoleon',
      image: '/images/napoleon.jpg',
      backgroundColor: 'bg-gray-900'
    },
    {
      title: 'Lessons in Chemistry',
      image: '/images/lessons.jpg',
      backgroundColor: 'bg-pink-400'
    }
  ];

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-white text-2xl font-bold mr-2"></span>
            <span className="text-white text-2xl font-bold">tv</span>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {shows.map((show, index) => (
              <div key={index} className={`${show.backgroundColor} rounded-2xl min-w-80 h-96 flex-shrink-0 relative overflow-hidden`}>
                <img 
                  src={show.image} 
                  alt={show.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">{show.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="btn-primary mr-4">
            Watch now
          </button>
          <button className="btn-secondary">
            Try it free
          </button>
        </div>
      </div>
    </section>
  );
}

export default AppleTVSection;