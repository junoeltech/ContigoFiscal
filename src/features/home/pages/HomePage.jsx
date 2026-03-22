import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ChatbotWidget from "../components/ChatbotWidget";

export default function HomePage({ isChatOpen, setIsChatOpen, onOpenChat }) {
  return (
    <>
      {/* 1. Navegación superior */}
      <Header onOpenChat={onOpenChat} />

      {/* 2. Sección de impacto principal */}
      <Hero onOpenChat={onOpenChat}/>

      {/* 3. Catálogo de soluciones fiscales */}
      {/* Usamos un contenedor simple para dar espacio si es necesario */}
      <main>
        <Services />

        {/* 4. Sección de valor agregado y proceso */}
        <WhyChooseUs onOpenChat={onOpenChat} />

        {/* 5. Formulario de conversión y contacto directo */}
        <Contact />

        {/* 6. Chatbot v1 */}
        <ChatbotWidget isExternalOpen={isChatOpen} 
        setIsExternalOpen={setIsChatOpen}/>
      </main>

      {/* 6. Cierre de página y enlaces legales */}
      <Footer />
    </>
  );
}
