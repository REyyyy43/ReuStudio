import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoRedenly from "../assets/LogoRedenly.png"; // Adjust the path as necessary

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img className="w-24" src={LogoRedenly} alt="1705" />

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#inicio" className="hover:text-[#007E7E] transition">Inicio</a>
          <a href="#nosotros" className="hover:text-[#007E7E] transition">Sobre Nosotros</a>
          <a href="#beneficios" className="hover:text-[#007E7E] transition">Beneficios</a>
          <a href="#actividad" className="hover:text-[#007E7E] transition">Como funciona</a>
          <a href="#planes" className="hover:text-[#007E7E] transition">Nuestros planes</a>
        </nav>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          <a href="#inicio" className="block text-gray-700 hover:text-[#007E7E]">Inicio</a>
          <a href="#nosotros" className="block text-gray-700 hover:text-[#007E7E]">Sobre Nosotros</a>
          <a href="#beneficios" className="block text-gray-700 hover:text-[#007E7E]">Por qué elegirnos</a>
          <a href="#testimonios" className="block text-gray-700 hover:text-[#007E7E]">Testimonios</a>
          <a href="#contacto" className="block text-gray-700 hover:text-[#007E7E]">Contacto</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
