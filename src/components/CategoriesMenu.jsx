import { useState } from "react";

export default function CategoriesMenu() {
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };
  
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  
  const getLinkStyle = (itemId) => {
    return hoveredItem === itemId 
      ? "text-yellow-400 transition-colors duration-200" 
      : "text-gray-700 hover:text-yellow-400 transition-colors duration-200";
  };
  
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center">
            <span className="text-white text-sm">+</span>
          </div>
          <h2 className="ml-2 text-xl font-bold uppercase">CATÉGORIES REPRÉSENTÉES</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Column - IMAGE ET SON */}
        <div className="border border-gray-200 rounded shadow-sm">
          <div className="bg-gray-100 py-3 px-4">
            <h3 className="text-center font-bold">IMAGE ET SON</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("projection")}
                  onMouseEnter={() => handleMouseEnter("projection")}
                  onMouseLeave={handleMouseLeave}>
                  Projection
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("televiseurs")}
                  onMouseEnter={() => handleMouseEnter("televiseurs")}
                  onMouseLeave={handleMouseLeave}>
                  Téléviseurs
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("accessoirestv")}
                  onMouseEnter={() => handleMouseEnter("accessoirestv")}
                  onMouseLeave={handleMouseLeave}>
                  Accessoires TV
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("recepteur")}
                  onMouseEnter={() => handleMouseEnter("recepteur")}
                  onMouseLeave={handleMouseLeave}>
                  Recepteur Numérique
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("appareils")}
                  onMouseEnter={() => handleMouseEnter("appareils")}
                  onMouseLeave={handleMouseLeave}>
                  Appareils photo numériques et Caméscopes
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("son")}
                  onMouseEnter={() => handleMouseEnter("son")}
                  onMouseLeave={handleMouseLeave}>
                  Son numériques
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("piles")}
                  onMouseEnter={() => handleMouseEnter("piles")}
                  onMouseLeave={handleMouseLeave}>
                  Piles et Chargeurs
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Column - ELECTROMÉNAGER */}
        <div className="border border-gray-200 rounded shadow-sm">
          <div className="bg-gray-100 py-3 px-4">
            <h3 className="text-center font-bold">ELECTROMÉNAGER</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("lavelinge")}
                  onMouseEnter={() => handleMouseEnter("lavelinge")}
                  onMouseLeave={handleMouseLeave}>
                  Lave Linge
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("lavevaisselle")}
                  onMouseEnter={() => handleMouseEnter("lavevaisselle")}
                  onMouseLeave={handleMouseLeave}>
                  Lave vaisselle
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("refrigerateurs")}
                  onMouseEnter={() => handleMouseEnter("refrigerateurs")}
                  onMouseLeave={handleMouseLeave}>
                  Réfrigérateurs
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("fourencastrable")}
                  onMouseEnter={() => handleMouseEnter("fourencastrable")}
                  onMouseLeave={handleMouseLeave}>
                  Four encastrable
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("climatiseurs")}
                  onMouseEnter={() => handleMouseEnter("climatiseurs")}
                  onMouseLeave={handleMouseLeave}>
                  Climatiseurs
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("table")}
                  onMouseEnter={() => handleMouseEnter("table")}
                  onMouseLeave={handleMouseLeave}>
                  Table de cuisson
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("hotte")}
                  onMouseEnter={() => handleMouseEnter("hotte")}
                  onMouseLeave={handleMouseLeave}>
                  Hotte
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("cuisiniere")}
                  onMouseEnter={() => handleMouseEnter("cuisiniere")}
                  onMouseLeave={handleMouseLeave}>
                  Cuisinière
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("congelateur")}
                  onMouseEnter={() => handleMouseEnter("congelateur")}
                  onMouseLeave={handleMouseLeave}>
                  Congélateur
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("fourposable")}
                  onMouseEnter={() => handleMouseEnter("fourposable")}
                  onMouseLeave={handleMouseLeave}>
                  Four posable /Micro-ondes
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Third Column - PETIT ELECTRO */}
        <div className="border border-gray-200 rounded shadow-sm">
          <div className="bg-gray-100 py-3 px-4">
            <h3 className="text-center font-bold">PETIT ELECTRO</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("cafe")}
                  onMouseEnter={() => handleMouseEnter("cafe")}
                  onMouseLeave={handleMouseLeave}>
                  Café et petit déjeuner
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("appareilsprep")}
                  onMouseEnter={() => handleMouseEnter("appareilsprep")}
                  onMouseLeave={handleMouseLeave}>
                  Appareils de préparation culinaire
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("cuisson")}
                  onMouseEnter={() => handleMouseEnter("cuisson")}
                  onMouseLeave={handleMouseLeave}>
                  Cuisson
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("hygiene")}
                  onMouseEnter={() => handleMouseEnter("hygiene")}
                  onMouseLeave={handleMouseLeave}>
                  hygiène et soin maison
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("accessoires")}
                  onMouseEnter={() => handleMouseEnter("accessoires")}
                  onMouseLeave={handleMouseLeave}>
                  Accessoires
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("pack")}
                  onMouseEnter={() => handleMouseEnter("pack")}
                  onMouseLeave={handleMouseLeave}>
                  Pack Petit Electro
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("faitmaison")}
                  onMouseEnter={() => handleMouseEnter("faitmaison")}
                  onMouseLeave={handleMouseLeave}>
                  Fait Maison
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("machine")}
                  onMouseEnter={() => handleMouseEnter("machine")}
                  onMouseLeave={handleMouseLeave}>
                  machine à glaçon
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("balance")}
                  onMouseEnter={() => handleMouseEnter("balance")}
                  onMouseLeave={handleMouseLeave}>
                  Balance de cuisine
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">›</span>
                <a href="#" 
                  className={getLinkStyle("vaisselle")}
                  onMouseEnter={() => handleMouseEnter("vaisselle")}
                  onMouseLeave={handleMouseLeave}>
                  Vaisselle et Arts de la table
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}