import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ApplianceCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Product data for both slides
  const slides = [
    // First slide - Large appliances
    [
      {
        id: 2,
        name: 'Lave Vaisselle TELEFUNKEN 13',
        subtitle: 'Couverts -Blanc',
        image: 'https://www.affariyet.com/78503-home_default/lave-vaisselle-telefunken-13-couverts-blanc.jpg',
        price: '885,000 TND',
        originalPrice: '',
        buttonText: 'ACHETER',
        discount: ''
      },
      {
        id: 3,
        name: 'Cuisinière À Gaz 5 Feux Sotacer',
        subtitle: '-Blanc',
        image: 'https://www.affariyet.com/45478-home_default/cuisiniere-a-gaz-5-feux-sotacer-blanc.webp',
        price: '1 049,000 TND',
        originalPrice: '',
        buttonText: 'DÉTAILS',
        discount: ''
      },
      {
        id: 4,
        name: 'Réfrigérateur 6ème Sens',
        subtitle: 'Combiné Whirlpool 360 Litres NoFrost -Inox',
        image: 'https://www.affariyet.com/47664-home_default/refrigerateur-6eme-sens-combine-whirlpool-360-litres-nofrost-inox.webp',
        price: '1 999,000 TND',
        originalPrice: '2 099,000 TND',
        buttonText: 'ACHETER',
        discount: '-100,000 TND'
      },
      {
        id: 5,
        name: 'Lave-Vaisselle Rapido Candy',
        subtitle: '60 Cm 16 Couverts -Noir',
        image: 'https://www.affariyet.com/67978-home_default/lave-vaisselle-candy-cf6d4f0a-60-cm-16-couverts-noir.webp',
        price: '1 759,000 TND',
        originalPrice: '',
        buttonText: 'ACHETER',
        discount: ''
      },
      {
        id: 6,
        name: 'Pack AuxStar Er',
        subtitle: '',
        image: 'https://www.affariyet.com/43487-home_default/pack-auxstar-encastrable-hotte-casquette-four-plaque-pack-auxstar.webp',
        price: '829,000 TND',
        originalPrice: '',
        buttonText: '',
        discount: ''
      }
    ],
    // Second slide - Small appliances
    [
      {
        id: 7,
        name: 'Four Électrique ORIENT 36',
        subtitle: 'Litres -Noir',
        image: 'https://www.affariyet.com/75655-home_default/four-electrique-orient-36-litres-noir.webp',
        price: '139,000 TND',
        originalPrice: '',
        buttonText: 'ACHETER',
        discount: ''
      },
      {
        id: 8,
        name: 'Robot Pétrin TECHWOOD',
        subtitle: '1000W -Noir',
        image: 'https://www.affariyet.com/33357-home_default/robot-petrin-techwood-1000w-noir-tro-1056.webp',
        price: '385,000 TND',
        originalPrice: '419,000 TND',
        buttonText: 'DÉTAILS',
        discount: '-34,000 TND'
      },
      {
        id: 9,
        name: 'Set De 3 Poêles TECHWOOD -',
        subtitle: 'Gris',
        image: 'https://www.affariyet.com/78137-home_default/set-de-3-poeles-techwood-gris.jpg',
        price: '249,000 TND',
        originalPrice: '289,000 TND',
        buttonText: 'ACHETER',
        discount: '-40,000 TND'
      },
      {
        id: 10,
        name: 'Friteuse Sans Huile KENWOOD',
        subtitle: 'Healthy Fry Dual 1700W -Noir',
        image: 'https://www.affariyet.com/74042-home_default/friteuse-sans-huile-kenwood-healthy-fry-dual-1700w-noir.webp',
        price: '599,000 TND',
        originalPrice: '659,000 TND',
        buttonText: 'ACHETER',
        discount: '-60,000 TND'
      },
      {
        id: 11,
        name: 'Mini Hachoir 150W TECHWOOD',
        subtitle: '',
        image: 'https://www.affariyet.com/38601-home_default/mini-hachoir-150w-techwood-tha-156.webp',
        price: '75,000 TND',
        originalPrice: '89,000 TND',
        buttonText: 'ACHETER',
        discount: '-14,000 TND'
      }
    ]
  ];

  // Navigation functions
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">NOTRE SÉLECTION ÉLECTROMÉNAGERS</h1>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="bg-yellow-200 rounded-full p-2 flex items-center justify-center hover:bg-yellow-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="bg-yellow-300 rounded-full p-2 flex items-center justify-center hover:bg-yellow-400"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {slides[currentSlide].map(product => (
          <div key={product.id} className="bg-white rounded shadow-sm overflow-hidden border border-gray-100 flex flex-col">
            {/* Discount tag */}
            {product.discount && (
              <div className="absolute bg-yellow-400 text-black px-2 py-1 text-xs font-medium">
                {product.discount}
              </div>
            )}
            
            {/* Product image */}
            <div className="p-4 flex justify-center items-center flex-grow">
              <img src={product.image} alt={product.name} className="h-32 object-contain" />
            </div>
            
            {/* Product info */}
            <div className="px-3 py-2 text-center bg-white">
              <h3 className="font-medium text-sm">{product.name}</h3>
              {product.subtitle && <p className="text-xs">{product.subtitle}</p>}
            </div>
            
            {/* Price and button row */}
            <div className="px-3 py-2 flex flex-col items-center bg-gray-50">
              {product.price && (
                <div className="flex items-center mb-2">
                  <span className="font-bold text-pink-600 text-sm">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  )}
                </div>
              )}
              
              {product.buttonText && (
                <button className={`px-4 py-1 text-sm text-white rounded ${product.buttonText === 'DÉTAILS' ? 'bg-blue-500' : 'bg-blue-500'}`}>
                  {product.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}