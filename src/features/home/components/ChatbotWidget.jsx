import { useEffect, useState } from "react";
import styles from "../styles/ChatbotWidget.module.css";
import Service from "../services/Service";

function ChatbotWidget() { 
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("inicio");
  
  // Datos para el backend
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [rfc, setRfc] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState(""); // "persona_fisica" o "persona_moral"
  const [servicioId, setServicioId] = useState(""); // UUID del servicio
  
  // Catálogos del backend
  const [serviciosList, setServiciosList] = useState([]); 
  const [documentosRequeridos, setDocumentosRequeridos] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1. Cargar servicios al iniciar
  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const data = await Service.getServicios(); // GET /api/catalogs/services
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
    setOpen(false);
  };

  const handleSubmitDatos = (e) => {
    e.preventDefault();
    setStep("tramite");
  };

  // 2. Lógica dinámica: Seleccionar trámite y buscar documentos (Sprint 2)
  const handleSelectTramite = async (id) => {
    setServicioId(id);
    setLoading(true);
    try {
      const docs = await Service.getDocumentosPorServicio(id); // GET /api/catalogs/services/{id}/documents
      setDocumentosRequeridos(docs);
      setStep("confirmacion");
    } catch (error) {
      console.error("Error al obtener documentos", error);
    } finally {
      setLoading(false);
    }
  };

  // 3. Enviar registro final al Backend (POST /api/requests)
  const handleFinalizar = async () => {
    const cliente = {
      nombreCompleto: nombre,
      correo: correo,
      telefono: telefono,
      rfc: rfc,
      tipoContribuyente: tipoUsuario,
      servicioId: servicioId
    };

    try {
      console.log("Payload que se va a enviar:", cliente);
      await Service.saveCliente(cliente); // Llamada a tu API de Spring Boot
      alert("¡Solicitud recibida! El contador te contactará pronto.");
      cancelar();
    } catch (error) {
      alert("Error al enviar la solicitud.", error);
    }
  };

  return (
    <div className={styles.chatbotWidget}>
      <button className={styles.chatbotToggle} onClick={() => setOpen(!open)}>💬</button>

      {open && (
        <div className={styles.chatbotWindow}>
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

          {/* PASO 3: SELECCIÓN DE TRÁMITE (Dinámico desde DB) */}
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

          {/* PASO 4: CONFIRMACIÓN Y REQUISITOS (HU2) */}
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