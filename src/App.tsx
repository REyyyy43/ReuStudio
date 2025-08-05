import React from "react";
import NavBar from "./components/NavBar";

import boxingImg from "./assets/boxing.svg";
import sentMessImg from "./assets/sent-mess.svg";
import tratoHumanoImg from "./assets/trato-humano.svg";
import automatizacionImg from "./assets/automatizacion.svg";
import credibilidadImg from "./assets/credibilidad.svg";
import referencesVideo from "./assets/References.mp4";
import chattingImg from "./assets/chatting.svg";
import bussinessImg from "./assets/bussiness.svg";
import cellphoneSvgImg from "./assets/cellphone.svg";
import dutaxyImg from "./assets/dutaxy.png";
import cellphonePngImg from "./assets/cellphone.png";
import resultsImg from "./assets/Results.png";

const App: React.FC = () => {
  return (
    <>
      <main className="bg-white text-gray-900 from-white to-blue-50 bg-gradient-to-r font-sans">
        <NavBar />

        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center min-h-screen px-6 py-16">
          <div className="flex-1 text-center md:text-left animate-fade-in-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-4 font-sans">
              Impulsa tu Marca con REDENLY
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              Atención personalizada, automatización profesional y soluciones a tu medida. Con REUS, emprender es más fácil, confiable y rápido.
            </p>
            <a
              href="https://wa.me/584141234567"
              target="_blank"
              className="inline-block bg-[#14c2c2] text-white font-semibold py-3 px-6 rounded-full shadow hover:text-[#005e5e] hover:bg-[#ffffff] hover:border-1 transition"
            >
              ¡Comienza ahora!
            </a>
          </div>
          <div className="flex-1 mt-10 md:mt-0 animate-fade-in-right">
            <img
              src={boxingImg}
              alt="Diseño y desarrollo REUS"
              className="w-full max-w-3xl mx-auto"
            />
          </div>
        </section>

        {/* ABOUT US */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="w-2/4 max-w-2xl mx-auto mt-10 px-4 animate-fade-in-left">
              <img
                src={sentMessImg}
                alt="Sobre Nosotros"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="flex-1 animate-fade-in-right">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 font-sans">
                Atención 100% Personalizada
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                En REUS, te acompañamos desde el primer clic. Nos enfocamos en conocer tus necesidades reales y construir soluciones únicas para ti, sin plantillas genéricas ni respuestas automáticas.
              </p>
              <button className="bg-[#14c2c2] cursor-pointer text-white py-3 px-6 rounded-full shadow hover:bg-[#ffffff] hover:text-[#005e5e] hover:border transition">
                Saber más
              </button>
            </div>
          </div>
        </section>

        {/* VALORES DIFERENCIALES */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-10 text-[#14c2c2] font-sans">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { imgSrc: tratoHumanoImg, alt: "Trato Humano", title: "Trato Humano", desc: "No eres un número. Escuchamos tu historia y tus metas para crear tu solución ideal." },
                { imgSrc: automatizacionImg, alt: "Automatización Efectiva", title: "Automatización Efectiva", desc: "Optimiza tu negocio con tecnología moderna sin complicarte la vida." },
                { imgSrc: credibilidadImg, alt: "Credibilidad Real", title: "Credibilidad Real", desc: "Nuestra comunidad habla por nosotros. Más de 300 marcas confiaron en REUS." },
              ].map(({ imgSrc, alt, title, desc }, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-[0_8px_15px_-5px_rgba(0,126,126,0.5)] animate-fade-in-up">
                  <img src={imgSrc} alt={alt} className="w-52 h-52 mx-auto mb-6" loading="lazy" />
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REFERENCIAS */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-10"><span className="text-[#14c2c2]">Re</span>ferencias</h2>
            <p className="text-[#14c2c2] text-lg mb-6">
              Más de 300 marcas y negocios ya confían en nosotros. Aquí algunos ejemplos:
            </p>
            <div className="grid gap-8">
              <video
                src={referencesVideo}
                className="w-full h-auto rounded-lg shadow-2xs"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </section>

        {/* ¿CÓMO FUNCIONA? */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-10"><span className="text-[#14c2c2]">¿</span>Cómo funciona<span className="text-[#14c2c2]">?</span></h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { imgSrc: chattingImg, alt: "Chat", title: "1. Empieza por un click", desc: <> <a href="https://wa.me/584141234567" target="_blank" className="font-semibold text-[#007E7E] underline">Clickea aquí</a> y cuéntanos qué deseas lograr... </> },
                { imgSrc: bussinessImg, alt: "Negocio", title: "2. Aprobamos juntos tu idea", desc: <> Diseñamos una propuesta visual, tú la revisas y juntos damos forma al proyecto final. </> },
                { imgSrc: cellphoneSvgImg, alt: "Pago", title: "3. Con el 50% empezamos", desc: <> Inicias el proyecto eligiendo un plan personalizado con el 50%, el resto al final. </> },
              ].map(({ imgSrc, alt, title, desc }, idx) => (
                <div key={idx} className="p-6 border rounded-lg shadow-[0_8px_15px_-5px_rgba(0,126,126,0.5)] bg-white animate-fade-in">
                  <img src={imgSrc} alt={alt} className="w-52 h-52 mx-auto mb-6" loading="lazy" />
                  <h3 className="text-xl text-teal-600 font-bold mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ¿QUÉ HACEMOS? */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <h2 className="text-6xl font-bold mb-10">
              <span className="text-[#14c2c2]">Y... </span><span className="text-black">¿Qué hacemos por ti?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { imgS: dutaxyImg, alt: "Identidad", title: "1. Diseñamos tu identidad", desc: "Creamos logo, colores, diseño visual atractivo, público objetivo y metas comerciales." },
                { imgS: cellphonePngImg, alt: "Web", title: "2. Creamos tu presencia digital", desc: "Web profesional, SEO, landing pages, menús digitales y más." },
                { imgS: resultsImg, alt: "Productos", title: "3. Lanzamos tus productos", desc: "Camisetas, etiquetas, QR, gorras, tazas, lo que tengas en mente, con tu identidad." },
              ].map(({ imgS, alt, title, desc }, idx) => (
                <div key={idx} className="p-6 border rounded-lg shadow-sm animate-fade-in bg-white">
                  <div className="w-full h-[200px] flex items-center justify-center bg-gray-50 rounded-lg mb-6">
                    <img src={imgS} alt={alt} className="max-h-[150px] max-w-[80%] object-contain" loading="lazy" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLAN */}
        <section className="bg-gray-100 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-[#14c2c2]">Empieza</span> hoy a cumplir <span className="text-[#14c2c2]">tus metas!</span>
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              Trabajamos contigo desde cero para ofrecerte justo lo que necesitas. Este es el único plan porque cada marca es única.
            </p>
            <div className="bg-white rounded-lg pb-4 shadow-lg text-left animate-fade-in">
              <h3 className="bg-[#14c2c2] p-4 text-center text-[#ffffff] font-extrabold text-xl">Plan Studio</h3>
              <div className="bg-white pl-4 pr-4">
                <ul className="list-disc pl-6 p-2 text-gray-700 space-y-2">
                  <li>Diseño de logotipo e identidad visual</li>
                  <li>Sitio web profesional</li>
                  <li>Optimización SEO básica</li>
                  <li>Dominio y hosting incluidos por 1 año</li>
                  <li>Diseño de etiquetas, stickers y QR</li>
                  <li>Manual de marca</li>
                  <li>Fabricación del producto de tu marca</li>
                  <li>Asesoramiento en redes</li>
                  <li>Soporte y actualizaciones iniciales</li>
                  <li>Precios personalizados según necesidades</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="bg-[#007E7E] text-white py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-10 animate-fade-in">
            Testimonios
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#006060] p-6 rounded-lg shadow animate-fade-in-left">
              <p>
                "Gracias a REUS ahora mi tienda tiene todo lo que necesitaba para parecer una marca internacional."
              </p>
              <p className="mt-2 font-semibold">— María R., Caracas</p>
            </div>
            <div className="bg-[#006060] p-6 rounded-lg shadow animate-fade-in-right">
              <p>
                "En menos de una semana tenía logo, web y productos físicos listos."
              </p>
              <p className="mt-2 font-semibold">— Jesús M., Maracay</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black text-white text-center py-8 px-4">
          <p className="mb-2">© 2025 REUS. Todos los derechos reservados.</p>
          <p className="text-sm">Hecho en Venezuela con 💡 y 💻</p>
        </footer>
      </main>
    </>
  );
};

export default App;
