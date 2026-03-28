import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ChatbotWidget from "../components/ChatbotWidget";

export default function HomePage({ 
  isChatOpen, 
  setIsChatOpen, 
  onOpenChat,
  setGlobalToast // ✅ RECIBIMOS LA PROP
}) {
  return (
    <>
      {/* 1. Navegación superior */}
      <Header onOpenChat={onOpenChat} />

      {/* 2. Sección principal */}
      <Hero onOpenChat={onOpenChat}/>

      <main>
        <Services />

        {/* 4. Sección de valor */}
        <WhyChooseUs onOpenChat={onOpenChat} />

        {/* 5. Contacto */}
        <Contact />

        {/* 6. CHATBOT */}
        <ChatbotWidget 
          isExternalOpen={isChatOpen} 
          setIsExternalOpen={setIsChatOpen}
          setGlobalToast={setGlobalToast} // ✅ AQUÍ ESTÁ LA CLAVE
        />
      </main>

      <Footer />
    </>
  );
}