import React from 'react';

export default function OppoPromotionBanners() {
  const banners = [
    {
      id: 1,
      image: 'https://www.affariyet.com/img/cms/Reno11%20F%205G_1.png',
      alt: "OPPO Reno11 F 5G promotional banner"
    },
    {
      id: 2,
      image: 'https://www.affariyet.com/img/cms/Reno12%20F%205G.png',
      alt: "OPPO Reno12 F 4G promotional banner"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-24 justify-center py-4 max-w-7xl mx-auto">
      {banners.map(banner => (
        <div key={banner.id} className="flex-1">
          <img 
            src={banner.image}
            alt={banner.alt}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}