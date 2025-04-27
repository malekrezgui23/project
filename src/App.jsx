import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GamesLeisureProducts from './components/GamesLeisureProducts'
import ApplianceCarousel from './components/ApplianceCarousel'
import ComputerEquipmentCarousel from './components/ComputerEquipmentCarousel'
import TVSelectionShowcase from './components/TVSelectionShowcase'
import GardenFurnitureBanners from './components/GardenFurnitureBanners'
import PromotionalBanner from './components/PromotionalBanner'
import OppoPromotionBanners from './components/OppoPromotionBanners'
import AffariyetComponent from './components/AffariyetComponent'
import CategoriesMenu from './components/CategoriesMenu'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <GamesLeisureProducts />
      <ApplianceCarousel />
      <ComputerEquipmentCarousel />
      <TVSelectionShowcase />
      <GardenFurnitureBanners />
      <PromotionalBanner />
      <OppoPromotionBanners />
      <AffariyetComponent />
      <CategoriesMenu />
      <Footer />
    </div>
  )
}

export default App