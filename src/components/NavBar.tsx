import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoRedenly from "../assets/LogoRedenly.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img className="w-24" src={LogoRedenly} alt="Logo Redenly" />

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="nav-link">
            Inicio
          </a>
          <a href="#nosotros" className="nav-link">
            Sobre Nosotros
          </a>
          <a href="#beneficios" className="nav-link">
            Beneficios
          </a>
          <a href="#actividad" className="nav-link">
            Cómo Funciona
          </a>
          <a href="#planes" className="nav-link">
            Nuestros Planes
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu with slide down animation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out transform origin-top bg-white shadow-md z-40 ${
          isOpen
            ? "max-h-96 opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4 flex flex-col">
          <a href="#inicio" className="nav-link block">
            Inicio
          </a>
          <a href="#nosotros" className="nav-link block">
            Sobre Nosotros
          </a>
          <a href="#beneficios" className="nav-link block">
            Por qué elegirnos
          </a>
          <a href="#testimonios" className="nav-link block">
            Testimonios
          </a>
          <a href="#contacto" className="nav-link block">
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
