import React, { useState } from "react"; // Necesitamos useState
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ChatbotWidget from "../components/ChatbotWidget";
import GlobalToast from "../components/GlobalToast"; // 1. Importa tu componente

export default function HomePage({ isChatOpen, setIsChatOpen, onOpenChat }) {
  // 2. Definimos el estado que el Chatbot va a usar
  const [toast, setToast] = useState(null);

  return (
    <>
      {/* 3. Si hay un toast en el estado, mostramos tu componente */}
      {toast && (
        <GlobalToast 
          type={toast.type} 
          message={toast.message} 
          onClose={() => setToast(null)} 
        />
      )}

      <Header onOpenChat={onOpenChat} />


      <Hero onOpenChat={onOpenChat}/>


      {/* 3. Catálogo de soluciones fiscales */}

      <main>
        <Services onOpenChat={onOpenChat}/>
        <WhyChooseUs onOpenChat={onOpenChat} />
        <Contact />


        {/* 4. Pasamos la función 'setToast' al Chatbot (usando el nombre que él espera) */}
        <ChatbotWidget 
          isChatOpen={isChatOpen} 
          setIsChatOpen={setIsChatOpen} 
          setGlobalToast={setToast} 

        />
      </main>

      <Footer />
    </>
  );
}