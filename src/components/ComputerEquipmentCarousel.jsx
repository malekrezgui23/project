import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ComputerEquipmentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Product data for both slides
  const slides = [
    // First slide - Desktop computers and tablets
    [
      {
        id: 1,
        name: 'PC De Bureau All In One DELL',
        subtitle: 'Inspiron 5410 I7 12E Gén 16Go 1To + 256Go SSD',
        image: 'https://www.affariyet.com/75664-home_default/pc-de-bureau-all-in-one-dell-inspiron-5410-i7-12e-gen-16go-1to-256go-ssd-.webp',
        price: '4 129,000 TND',
        originalPrice: '4 329,000 TND',
        buttonText: 'ACHETER',
        discount: '-200,000 TND'
      },
      {
        id: 2,
        name: 'Pc de bureau ASUS All In One',
        subtitle: 'V222FAK I3 10É Gén 4Go 256Go - Blanc',
        image: 'https://www.affariyet.com/75869-home_default/pc-de-bureau-asus-all-in-one-v222fak-i3-10e-gen-4go-256go-blanc.webp',
        price: '1 595,000 TND',
        originalPrice: '1 799,000 TND',
        buttonText: 'ACHETER',
        discount: '-204,000 TND'
      },
      {
        id: 3,
        name: 'Pc de bureau All In One ASUS',
        subtitle: 'M241DAK AMD 3050U 4Go 1To- Noir',
        image: 'https://www.affariyet.com/48813-home_default/pc-de-bureau-all-in-one-asus-amd-3050u-noir.webp',
        price: '1 649,000 TND',
        originalPrice: '1 699,000 TND',
        buttonText: 'ACHETER',
        discount: '-50,000 TND'
      },
      {
        id: 4,
        name: 'Tablette SAMSUNG Galaxy Tab',
        subtitle: 'A9 plus 5G 4Go 64Go - Graphite',
        image: 'https://www.affariyet.com/79541-home_default/tablette-samsung-galaxy-tab-a9-plus-5g-4go-64go-.jpg',
        price: '849,000 TND',
        originalPrice: '999,000 TND',
        buttonText: 'ACHETER',
        discount: '-150,000 TND'
      },
      {
        id: 5,
        name: 'Scanner à Défilement EPSON',
        subtitle: 'WorkForce DS-410 A4 recto-verso Couleur',
        image: 'https://www.affariyet.com/63327-home_default/scanner-a-defilement-epson-workforce-ds-410-a4-recto-verso-couleur.webp',
        price: '899,000 TND',
        originalPrice: '',
        buttonText: 'ACHETER',
        discount: ''
      }
    ],
    // Second slide - Laptops
    [
      {
        id: 6,
        name: 'PC Portable LENOVO',
        subtitle: 'ThinkBook 16 G7 IML Ultra 7 155H 8Go 512Go SSD - Gris',
        image: 'https://www.affariyet.com/75873-home_default/pc-portable-lenovo-thinkbook-16-g7-iml-ultra-7-155h-8go-512go-ssd-gris.webp',
        price: '2 529,000 TND',
        originalPrice: '2 799,000 TND',
        buttonText: 'ACHETER',
        discount: '-270,000 TND'
      },
      {
        id: 7,
        name: 'PC Portable ASUS TUF Gaming',
        subtitle: 'A15 AMD RYZEN 7 32Go 512Go SSD RTX 2050',
        image: 'https://www.affariyet.com/77514-home_default/pc-portable-asus-tuf-gaming-a15-amd-ryzen-7-32go-512go-ssd-rtx-2050.jpg',
        price: '2 679,000 TND',
        originalPrice: '',
        buttonText: 'ACHETER',
        discount: ''
      },
      {
        id: 8,
        name: 'PC Portable Gamer GIGABYTE',
        subtitle: 'G5MF5 I7 13E Gén 16Go RTX 4050',
        image: 'https://www.affariyet.com/69628-home_default/pc-portable-gamer-gigabyte-g5mf5-i7-13e-gen-16go-rtx-4050.webp',
        price: '3 199,000 TND',
        originalPrice: '3 499,000 TND',
        buttonText: 'ACHETER',
        discount: '-300,000 TND'
      },
      {
        id: 9,
        name: 'Pc Portable HP Probook 450 G9',
        subtitle: 'I5 12Gén 8Go 512Go SSD - Silver',
        image: 'https://www.affariyet.com/63655-home_default/pc-portable-hp-probook-450-g9-i5-12gen-8go-512go-ssd-silver.webp',
        price: '2 475,000 TND',
        originalPrice: '2 749,000 TND',
        buttonText: 'ACHETER',
        discount: '-274,000 TND'
      },
      {
        id: 10,
        name: 'PC Portable LENOVO IdeaPad 1',
        subtitle: '15IJL7 Intel Celeron N4500 8Go 256Go SSD - Bleu Avec Sacoche',
        image: 'https://www.affariyet.com/78806-home_default/pc-portable-lenovo-ideapad-1-15ijl7-intel-celeron-n4500-8go-256go-ssd-bleu-avec-sacoche.jpg',
        price: '699,000 TND',
        originalPrice: '735,000 TND',
        buttonText: 'ACHETER',
        discount: '-36,000 TND'
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
        <h1 className="text-2xl font-bold">NOTRE SÉLECTION DE MATÉRIEL INFORMATIQUE</h1>
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
          <div key={product.id} className="bg-white rounded shadow-sm overflow-hidden border border-gray-100 flex flex-col relative">
            {/* Discount tag */}
            {product.discount && (
              <div className="absolute top-0 left-0 bg-yellow-400 text-black px-2 py-1 text-xs font-medium z-10">
                {product.discount}
              </div>
            )}
            
            {/* Product image */}
            <div className="p-4 flex justify-center items-center h-48">
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
                <button className="px-4 py-1 text-sm text-white rounded bg-blue-500 hover:bg-blue-600">
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