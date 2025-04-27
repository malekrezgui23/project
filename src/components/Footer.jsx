import { useState } from "react";
import logo from '../assets/logo.jpg'


export default function Footer() {
  const [email, setEmail] = useState("");
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing with email:", email);
  };
  
  return (
    <footer className="bg-white mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Logo and Contact Column */}
          <div className="md:col-span-3">
            <div className="mb-4">
              <img src={logo} alt="Affariyet Logo" className="max-h-16" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="mt-1 text-xl mr-2">📍</span>
                <p className="text-gray-800">
                  Affariyet, 12 Rue de l'artisanat Tunis<br />
                  Tunisie
                </p>
              </div>
              
              <div className="flex items-center">
                <span className="text-xl mr-2">📞</span>
                <div>
                  <p className="text-gray-800">Appelez-nous :</p>
                  <p className="text-gray-800">55 11 70 00</p>
                </div>
              </div>
         
              
              <div className="flex items-start">
                <span className="text-xl mr-2">✉️</span>
                <div>
                  <p className="text-gray-800">Envoyez-nous un e-mail :</p>
                  <p className="text-gray-800">contact@affariyet.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter and Categories Section */}
          <div className="md:col-span-9">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">LETTRE D'INFORMATIONS</h3>
              
              <div className="flex flex-col md:flex-row">
                <form onSubmit={handleSubscribe} className="w-full">
                  <div className="flex flex-col md:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Votre adresse e-mail"
                      className="flex-grow border border-gray-300 rounded-md px-4 py-2 md:rounded-r-none focus:outline-none"
                      required
                    />
                    <button 
                      type="submit" 
                      className="bg-blue-600 text-white flex items-center justify-center px-4 py-2 mt-2 md:mt-0 rounded-md md:rounded-l-none"
                    >
                      <span className="mr-2">✉️</span>
                      S'abonner
                    </button>
                  </div>
                </form>
              </div>
              
              <p className="text-sm text-gray-600 mt-2">
                Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela nos informations de contact dans les conditions d'utilisation du site.
              </p>
            </div>
            
            {/* Category Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Information Column */}
              <div>
                <h4 className="text-xl font-bold mb-4">INFORMATION</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Livraison</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Conditions d'utilisation</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Paiement sécurisé</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Nos magasins</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Contactez-nous</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Plan du site</a>
                  </li>
                </ul>
              </div>
              
              {/* Les Must Have Column */}
              <div>
                <h4 className="text-xl font-bold mb-4">LES MUST HAVE DU MOMENT</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Lave Linge</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Réfrigérateurs</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">PC portable gamer</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">TAPIS DE COURSE</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Vidéoprojecteurs</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Téléviseurs</a>
                  </li>
                </ul>
              </div>
              
              {/* Inspirations Column */}
              <div>
                <h4 className="text-xl font-bold mb-4">INSPIRATIONS</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Gaufriers & Panini</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Chauffage</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Nettoyeur à vapeur!</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Smartphone</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Multifonction Jet d'encre</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">›</span>
                    <a href="#" className="hover:text-blue-600">Tablettes Tactiles</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-yellow-400 mt-8 py-4">
        <div className="container mx-auto px-4">
          <p className="text-black">Copyright © 2025 • <a href="#" className="font-bold">Affariyet.com</a></p>
        </div>
      </div>
    </footer>
  );
}