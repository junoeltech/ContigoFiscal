import { useEffect, useState } from "react";
import styles from "../styles/ChatbotWidget.module.css";
import Service from "../services/Service";
import ToastNotification from "./ToastNotification";

function ChatbotWidget({ isExternalOpen, setIsExternalOpen }) { 
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("inicio");
  const [toast, setToast] = useState(null); // Estado para el aviso

  useEffect(() => {
    if (isExternalOpen) {
      setIsOpen(true);
      if (typeof setIsExternalOpen === "function") {
        setIsExternalOpen(false); 
      }
    }
  }, [isExternalOpen, setIsExternalOpen]);

  const closeChat = () => {
    setIsOpen(false);
    setIsExternalOpen(false);
  };

  // Datos para el backend
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [rfc, setRfc] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [servicioId, setServicioId] = useState("");

  // Catálogos del backend
  const [serviciosList, setServiciosList] = useState([]); 
  const [documentosRequeridos, setDocumentosRequeridos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const data = await Service.getServicios();
        setServiciosList(data);
      } catch (error) {
        console.error("Error cargando servicios", error);
      }
    };
    fetchServicios();
  }, []);

  const cancelar = () => {
    setStep("inicio");
    setNombre(""); setCorreo(""); setTelefono(""); setRfc("");
    setServicioId(""); setDocumentosRequeridos([]);
    setIsOpen(false);
  };

  const handleSubmitDatos = (e) => {
    e.preventDefault();
    setStep("tramite");
  };

  const handleSelectTramite = async (id) => {
    setServicioId(id);
    setLoading(true);
    try {
      const docs = await Service.getDocumentosPorServicio(id);
      setDocumentosRequeridos(docs);
      setStep("confirmacion");
    } catch (error) {
      console.error("Error al obtener documentos", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFinalizar = async () => {
    const cliente = { nombreCompleto: nombre, correo, telefono, rfc, tipoContribuyente: tipoUsuario, servicioId };
    try {
      await Service.saveCliente(cliente);
      setToast({ type: "success", message: "¡Solicitud recibida! El contador te contactará pronto." });
      cancelar();
    } catch (error) {
      setToast({ type: "error", message: "Error al enviar la solicitud." });
    }
  };

  return (
    <div className={styles.chatbotWidget}>
      <button className={styles.chatbotToggle} onClick={() => setIsOpen(!isOpen)}>💬</button>

      {isOpen && (
        <div className={styles.chatbotWindow}>
          {/* Aviso tipo toast */}
          {toast && (
            <ToastNotification
              type={toast.type}
              message={toast.message}
              onClose={() => setToast(null)}
            />
          )}

          {/* PASO 1: PERFIL */}
          {step === "inicio" && (
            <>
              <p>Bienvenido. Selecciona tu perfil:</p>
              <button onClick={() => { setTipoUsuario("persona_fisica"); setStep("datos"); }}>Persona Física</button>
              <button onClick={() => { setTipoUsuario("persona_moral"); setStep("datos"); }}>Persona Moral</button>
            </>
          )}

          {/* PASO 2: DATOS PERSONALES */}
          {step === "datos" && (
            <form onSubmit={handleSubmitDatos}>
              <p>Déjanos tus datos de contacto:</p>
              <input type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
              <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
              <input type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
              <input type="text" placeholder="RFC" value={rfc} onChange={(e) => setRfc(e.target.value)} required />
              <button type="submit">Continuar</button>
            </form>
          )}

          {/* PASO 3: SELECCIÓN DE TRÁMITE */}
          {step === "tramite" && (
            <>
              <p>¿Qué trámite necesitas, {nombre}?</p>
              {serviciosList.map(s => (
                <button key={s.id} onClick={() => handleSelectTramite(s.id)}>
                  {s.name}
                </button>
              ))}
            </>
          )}

          {/* PASO 4: CONFIRMACIÓN */}
          {step === "confirmacion" && (
            <div>
              <p>Excelente. Para este trámite necesitaremos:</p>
              <ul className={styles.docList}>
                {documentosRequeridos.map(d => (
                  <li key={d.id}>✅ {d.name}</li>
                ))}
              </ul>
              <p>¿Deseas que el contador valide tu información?</p>
              <button onClick={handleFinalizar}>Sí, enviar solicitud</button>
              <button onClick={() => setStep("tramite")} className={styles.backBtn}>Volver</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ChatbotWidget;
