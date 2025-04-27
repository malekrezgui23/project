import React from 'react';

export default function GardenFurnitureBanners() {
  const banners = [
    {
      id: 1,
      image: 'https://www.affariyet.com/img/cms/CHS090.png'
    },
    {
      id: 2,
      image: 'https://www.affariyet.com/img/cms/CHS130.png'
    },
    {
      id: 3,
      image: 'https://www.affariyet.com/img/cms/CHS241.png'
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center px-4 py-8 max-w-7xl mx-auto">
      {banners.map(banner => (
        <div key={banner.id} className="flex-1">
          <img 
            src={banner.image}
            alt="Garden Furniture Promotion" 
            className="w-full h-auto rounded shadow-sm hover:shadow-md transition-shadow duration-300"
          />
        </div>
      ))}
    </div>
  );
}