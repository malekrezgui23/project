import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.jpg'

export default function Navbar() {
  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-affariyet-blue text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex font-bold justify-center">
          <span>55 11 70 00 -- 58 83 39 35 -- devis@affariyet.com</span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-48">
            <img src={logo} alt="Affariyet" className="w-full" />
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-affariyet-blue"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-affariyet-blue text-white rounded-r-lg">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-4">
            <button className="flex items-center text-gray-700 hover:text-affariyet-blue">
              <UserIcon className="w-6 h-6" />
              <span className="ml-2">Connexion</span>
            </button>
            <button className="flex items-center bg-affariyet-blue text-white px-4 py-2 rounded-lg">
              <ShoppingCartIcon className="w-6 h-6" />
              <span className="ml-2">0,000 TND</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            <button className="bg-affariyet-pink text-white px-8 py-3 font-medium">
              NOS RAYONS
            </button>
            <nav className="flex">
              <a href="#" className="px-6 py-3 hover:bg-affariyet-pink hover:text-white transition-colors duration-200">ACCUEIL</a>
              <a href="#" className="px-6 py-3 hover:bg-affariyet-pink hover:text-white transition-colors duration-200">PROMOS</a>
              <a href="#" className="px-6 py-3 hover:bg-affariyet-pink hover:text-white transition-colors duration-200">CONTACT</a>
              <a href="#" className="px-6 py-3 hover:bg-affariyet-pink hover:text-white transition-colors duration-200">SERVICE CLIENT</a>
              <a href="#" className="px-6 py-3 hover:bg-affariyet-pink hover:text-white transition-colors duration-200">SERVICE ENTREPRISE</a>
              <a href="#" className="px-6 py-3 hover:bg-affariyet-pink hover:text-white transition-colors duration-200">FACILITÉ DE PAIEMENT</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}