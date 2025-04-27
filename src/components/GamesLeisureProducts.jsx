import React from 'react';

export default function GamesLeisureProducts() {
  const products = [
    {
      id: 1,
      name: 'Baby Foot GARLANDO F3',
      subtitle: '- (F3ACRLNO)',
      image: 'https://www.affariyet.com/43150-home_default/baby-foot-garlando-f3-f3acrlno.webp',
      price: '599,000 TND',
      buttonText: 'ACHETER'
    },
    {
      id: 2,
      name: 'Trampoline Combi XS',
      subtitle: 'GARLANDO',
      image: 'https://www.affariyet.com/23081-home_default/trampoline-combi-xs-garlando.webp',
      price: '399,000 TND',
      buttonText: 'DÉTAILS'
    },
    {
      id: 3,
      name: 'JEUX GONFLABLE',
      subtitle: 'HAPPY AIR (GONFL9215)',
      image: 'https://www.affariyet.com/42588-home_default/jeux-gonflable-happy-air-gonfl9215-gonfl9215.webp',
      price: '1 269,000 TND',
      buttonText: 'ACHETER'
    },
    {
      id: 4,
      name: 'Billard virginia 7',
      subtitle: 'GARLANDO + Couverture',
      image: 'https://www.affariyet.com/40310-home_default/billard-virginia-7-garlando-couverture-9343virg7-9343pcv7.webp',
      price: '2 995,000 TND',
      buttonText: 'DÉTAILS'
    },
    {
      id: 5,
      name: 'Baby Foot Avec',
      subtitle: 'Monnayeur Sympathy Dragon',
      image: 'https://www.affariyet.com/54163-home_default/baby-foot-avec-monnayeur-sympathy-dragon.webp',
      price: '3 379,000 TND',
      buttonText: 'DÉTAILS'
    },
    {
      id: 6,
      name: 'TABLE PING PONG',
      subtitle: 'TRAINING INDOOR planche vert (C-112I)',
      image: 'https://www.affariyet.com/40314-home_default/table-ping-pong-training-indoor-planche-vert-c-112i-c-112i.webp',
      price: '969,000 TND',
      buttonText: 'ACHETER'
    }
  ];

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">JEUX & LOISIR</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded shadow-md overflow-hidden border border-gray-200">
            <div className="p-4 flex justify-center">
              <img src={product.image} alt={product.name} className="h-48 object-contain" />
            </div>
            <div className="px-4 py-2 text-center bg-gray-100">
              <h3 className="font-bold text-sm">{product.name}</h3>
              <p className="text-sm font-bold">{product.subtitle}</p>
            </div>
            <div className="px-4 py-3 flex justify-between items-cente">
              <span className="font-bold text-pink-600">{product.price}</span>  
              <button 
                className={`px-4 py-1 text-white rounded ${product.buttonText === 'ACHETER' ? 'bg-blue-500' : 'bg-blue-500'}`}
              >
                {product.buttonText}
            </button> 
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
}