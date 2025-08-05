import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <main className="bg-white text-gray-900 from-white to-blue-50 bg-gradient-to-r font-sans">
        <NavBar />

        {/* HERO SECTION */}
        <section id="inicio" className="flex flex-col md:flex-row items-center min-h-screen px-6 py-16">
          <div
            className="flex-1 text-center md:text-left"
            data-aos="fade-right"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-4 font-sans">
              Impulsa tu Marca con REDENLY
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              Atención personalizada, automatización profesional y soluciones a
              tu medida. Con REUS, emprender es más fácil, confiable y rápido.
            </p>
            <a
              href="https://wa.me/584127071299"
              target="_blank"
              className="inline-block bg-[#14c2c2] text-white font-semibold py-3 px-6 rounded-full shadow hover:text-[#005e5e] hover:bg-[#ffffff] hover:border-1 transition"
            >
              ¡Comienza ahora!
            </a>
          </div>
          <div className="flex-1 mt-10 md:mt-0" data-aos="fade-left">
            <img
              src={boxingImg}
              alt="Diseño y desarrollo REUS"
              className="w-full max-w-3xl mx-auto"
            />
          </div>
        </section>

        {/* ABOUT US */}
        <section id="nosotros" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="w-2/4 max-w-2xl mx-auto mt-10 px-4" data-aos="fade-right">
              <img
                src={sentMessImg}
                alt="Sobre Nosotros"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="flex-1" data-aos="fade-left">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 font-sans">
                Atención 100% Personalizada
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                En REUS, te acompañamos desde el primer clic. Nos enfocamos en
                conocer tus necesidades reales y construir soluciones únicas
                para ti, sin plantillas genéricas ni respuestas automáticas.
              </p>
              <a href="https://wa.me/584127071299" className="bg-[#14c2c2] cursor-pointer text-white py-3 px-6 rounded-full shadow hover:bg-[#ffffff] hover:text-[#005e5e] hover:border transition">
                Saber más
              </a>
            </div>
          </div>
        </section>

        {/* VALORES DIFERENCIALES */}
        <section id="beneficios" className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-5xl font-bold mb-10 text-[#14c2c2] font-sans">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  imgSrc: tratoHumanoImg,
                  alt: "Trato Humano",
                  title: "Trato Humano",
                  desc: "No eres un número. Escuchamos tu historia y tus metas para crear tu solución ideal.",
                },
                {
                  imgSrc: automatizacionImg,
                  alt: "Automatización Efectiva",
                  title: "Automatización Efectiva",
                  desc: "Optimiza tu negocio con tecnología moderna sin complicarte la vida.",
                },
                {
                  imgSrc: credibilidadImg,
                  alt: "Credibilidad Real",
                  title: "Credibilidad Real",
                  desc: "Nuestra comunidad habla por nosotros. Más de 300 marcas confiaron en REUS.",
                },
              ].map(({ imgSrc, alt, title, desc }, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg shadow-[0_8px_15px_-5px_rgba(0,126,126,0.5)]"
                  data-aos="zoom-in"
                >
                  <img
                    src={imgSrc}
                    alt={alt}
                    className="w-52 h-52 mx-auto mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REFERENCIAS */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-5xl font-bold mb-10">
              <span className="text-[#14c2c2]">Re</span>ferencias
            </h2>
            <p className="text-[#14c2c2] text-lg mb-6">
              Más de 300 marcas y negocios ya confían en nosotros. Aquí algunos
              ejemplos:
            </p>
            <div className="grid gap-8">
              <video
                src={referencesVideo}
                className="w-full h-auto rounded-lg shadow-2xs"
                autoPlay
                loop
                muted
                playsInline
                data-aos="zoom-in"
              />
            </div>
          </div>
        </section>

        {/* ¿CÓMO FUNCIONA? */}
        <section id="actividad" className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-5xl font-bold mb-10">
              <span className="text-[#14c2c2]">¿</span>Cómo funciona
              <span className="text-[#14c2c2]">?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  imgSrc: chattingImg,
                  alt: "Chat",
                  title: "1. Empieza por un click",
                  desc: (
                    <>
                      {" "}
                      <a
                        href="https://wa.me/584127071299"
                        target="_blank"
                        className="font-semibold text-[#007E7E] underline"
                      >
                        Clickea aquí
                      </a>{" "}
                      y cuéntanos qué deseas lograr...{" "}
                    </>
                  ),
                },
                {
                  imgSrc: bussinessImg,
                  alt: "Negocio",
                  title: "2. Aprobamos juntos tu idea",
                  desc: (
                    <>
                      {" "}
                      Diseñamos una propuesta visual, tú la revisas y juntos
                      damos forma al proyecto final.{" "}
                    </>
                  ),
                },
                {
                  imgSrc: cellphoneSvgImg,
                  alt: "Pago",
                  title: "3. Con el 50% empezamos",
                  desc: (
                    <>
                      {" "}
                      Inicias el proyecto eligiendo un plan personalizado con el
                      50%, el resto al final.{" "}
                    </>
                  ),
                },
              ].map(({ imgSrc, alt, title, desc }, idx) => (
                <div
                  key={idx}
                  className="p-6 border rounded-lg shadow-[0_8px_15px_-5px_rgba(0,126,126,0.5)] bg-white"
                  data-aos="fade-up"
                >
                  <img
                    src={imgSrc}
                    alt={alt}
                    className="w-52 h-52 mx-auto mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-xl text-teal-600 font-bold mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ¿QUÉ HACEMOS? */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-6xl font-bold mb-10">
              <span className="text-[#14c2c2]">Y... </span>
              <span className="text-black">¿Qué hacemos por ti?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  imgS: dutaxyImg,
                  alt: "Identidad",
                  title: "1. Diseñamos tu identidad",
                  desc: "Creamos logo, colores, diseño visual atractivo, público objetivo y metas comerciales.",
                },
                {
                  imgS: cellphonePngImg,
                  alt: "Web",
                  title: "2. Creamos tu presencia digital",
                  desc: "Web profesional, SEO, landing pages, menús digitales y más.",
                },
                {
                  imgS: resultsImg,
                  alt: "Productos",
                  title: "3. Lanzamos tus productos",
                  desc: "Camisetas, etiquetas, QR, gorras, tazas, lo que tengas en mente, con tu identidad.",
                },
              ].map(({ imgS, alt, title, desc }, idx) => (
                <div
                  key={idx}
                  className="p-6 border rounded-lg shadow-sm bg-white"
                  data-aos="zoom-in"
                >
                  <div className="w-full h-[200px] flex items-center justify-center bg-gray-50 rounded-lg mb-6">
                    <img
                      src={imgS}
                      alt={alt}
                      className="max-h-[150px] max-w-[80%] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLAN */}
        <section id="planes" className="bg-gray-100 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-[#14c2c2]">Empieza</span> hoy a cumplir{" "}
              <span className="text-[#14c2c2]">tus metas!</span>
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              Trabajamos contigo desde cero para ofrecerte justo lo que
              necesitas. Este es el único plan porque cada marca es única.
            </p>
            <div
              className="bg-white rounded-lg pb-4 shadow-lg text-left border border-gray-200"
              data-aos="zoom-in"
            >
              <h3 className="bg-[#14c2c2] p-4 text-center text-white font-extrabold text-xl rounded-t-lg">
                Plan Redenly
              </h3>

              <div className="bg-white px-6 py-4 divide-y divide-gray-300">
                {[
                  "Diseño de logotipo e identidad visual",
                  "Sitio web profesional",
                  "Optimización SEO básica",
                  "Dominio y hosting incluidos por 1 año",
                  "Diseño de etiquetas, stickers y QR",
                  "Manual de marca",
                  "Fabricación del producto de tu marca",
                  "Asesoramiento en redes",
                  "Soporte y actualizaciones iniciales",
                  "Precios personalizados según necesidades",
                ].map((item, index) => (
                  <div key={index} className="py-2 text-gray-700 font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN MOTIVACIONAL */}
        <section className="bg-[#007E7E] text-white py-20 px-6 text-center" data-aos="fade-up">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-6xl font-extrabold mb-6 leading-tight">
              Tu idea merece convertirse en una marca real.
            </h2>
            <p className="text-lg mb-8">
              No necesitas miles de dólares ni ser un experto para lanzar tu
              negocio. En REUS Studio lo hacemos contigo desde cero.
            </p>
            <a
              href="https://wa.me/584127071299"
              className="inline-block bg-white text-[#007E7E] hover:text-white hover:bg-[#007E7E] hover:border-white hover:border font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Empieza tu tienda online
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black text-white text-center py-8 px-4">
          <p className="mb-2">© 2025 REUS. Todos los derechos reservados.</p>
          <p className="text-sm">Hecho en Venezuela</p>
        </footer>
      </main>
    </>
  );
};

export default App;
