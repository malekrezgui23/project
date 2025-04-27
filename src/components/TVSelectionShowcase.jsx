import React from 'react';

export default function TVSelectionShowcase() {
  const tvProducts = [
    {
      id: 1,
      name: 'Tv TCL 32" Smart Android',
      subtitle: 'S5400A Full HD',
      image: 'https://www.affariyet.com/68682-home_default/tv-tcl-32-smart-android-s5400a-full-hd.webp',
      price: '649,000 TND',
      originalPrice: '729,000 TND',
      buttonText: 'ACHETER',
      discount: '-80,000 TND'
    },
    {
      id: 2,
      name: 'TV TCL 43" Smart Android',
      subtitle: 'S5400A Full HD',
      image: 'https://www.affariyet.com/76050-home_default/tv-tcl-43-smart-android-s5400a-full-hd.jpg',
      price: '939,000 TND',
      originalPrice: '1 029,000 TND',
      buttonText: 'ACHETER',
      discount: '-90,000 TND'
    },
    {
      id: 3,
      name: 'Tv TCL 55" Smart P635 Google',
      subtitle: 'UHD 4K',
      image: 'https://www.affariyet.com/64758-home_default/tv-tcl-55-smart-p635-google-uhd-4k.webp',
      price: '1 509,000 TND',
      originalPrice: '1 559,000 TND',
      buttonText: 'DÉTAILS',
      discount: '-50,000 TND'
    },
    {
      id: 4,
      name: 'TV TELEFUNKEN 55" Smart',
      subtitle: 'Google TV G4E QLED 4K Avec Récepteur Intégré Matte Screen',
      image: 'https://www.affariyet.com/78924-home_default/tv-telefunken-55-smart-google-tv-g4e-qled-4k-avec-recepteur-integre-matte-screen.jpg',
      price: '1 599,000 TND',
      originalPrice: '',
      buttonText: 'ACHETER',
      discount: ''
    },
    {
      id: 5,
      name: 'TV TCL 55" Smart Android P735',
      subtitle: 'Google UHD 4K',
      image: 'https://www.affariyet.com/76063-home_default/tv-tcl-55-smart-android-p735-google-uhd-4k.jpg',
      price: '1 699,000 TND',
      originalPrice: '',
      buttonText: 'ACHETER',
      discount: ''
    }
  ];

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-2xl font-bold">NOTRE SÉLECTION DE TÉLÉVISEURS</h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tvProducts.map(product => (
          <div key={product.id} className="bg-white rounded shadow-sm overflow-hidden border border-gray-100 flex flex-col relative">
            {/* Discount tag */}
            {product.discount && (
              <div className="absolute top-0 left-0 bg-yellow-400 text-black px-2 py-1 text-xs font-medium z-10">
                {product.discount}
              </div>
            )}
            
            {/* Product image */}
            <div className="p-4 flex justify-center items-center h-44">
              <img src={product.image} alt={product.name} className="max-h-full object-contain" />
            </div>
            
            {/* Product info */}
            <div className="px-3 py-2 text-center bg-white">
              <h3 className="font-medium text-sm">{product.name}</h3>
              {product.subtitle && <p className="text-xs mt-1">{product.subtitle}</p>}
            </div>
            
            {/* Price and button row */}
            <div className="px-3 py-3 mt-auto flex justify-between items-center">
              <div className="flex flex-col">
                <span className="font-bold text-pink-600">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
                )}
              </div>
              
              {product.buttonText && (
                <button className={`px-4 py-1 text-sm text-white rounded ${product.buttonText === 'DÉTAILS' ? 'bg-blue-500' : 'bg-blue-500'} hover:bg-blue-600`}>
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