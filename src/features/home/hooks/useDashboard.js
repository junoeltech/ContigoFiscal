import { useState, useEffect } from "react";

export const useDashboard = () => {
    // Estado inicial de los Leads (Carga de localStorage o datos de prueba)
    const [leads, setLeads] = useState(() => {
        const saved = localStorage.getItem("contigo_fiscal_leads");
        return saved ? JSON.parse(saved) : [
            { id: 1, nombre: "Juan Pérez", servicio: "Declaración de impuestos", fecha: "2026-03-26", estatus: "nuevo", email: "juan@mail.com", telefono: "525512345678", mensaje: "Hola, necesito ayuda con mi declaración anual, soy RESICO.", notas: "" },
            { id: 2, nombre: "María García", servicio: "Regularización Fiscal", fecha: "2026-03-20", estatus: "proceso", email: "maria@mail.com", telefono: "525587654321", mensaje: "Tengo dudas con el buzón tributario.", notas: "" }
        ];
    });

    const [filterService, setFilterService] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selectedLead, setSelectedLead] = useState(null);
    const [tempNote, setTempNote] = useState("");

    // Estado para las notificaciones 
    const [notification, setNotification] = useState(null);

    // Auto-guardado en LocalStorage
    useEffect(() => {
        localStorage.setItem("contigo_fiscal_leads", JSON.stringify(leads));
    }, [leads]);

    // Temporizador para que la notificación desaparezca sola
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => setNotification(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    // MAPA DE FORMATEO PARA ESTADOS
    const statusConfig = {
        nuevo: { label: "Nuevo", type: "nuevo" },
        proceso: { label: "En Proceso", type: "proceso" },
        finalizado: { label: "Finalizado", type: "finalizado" }
    };

    const handleOpenDetails = (lead) => {
        setSelectedLead(lead);
        setTempNote(lead.notas || "");
    };

    // --- LÓGICA CORREGIDA DE ACTUALIZACIÓN DE ESTADO ---
    const toggleStatus = (id) => {
        // 1. Buscamos el prospecto exacto al que le dimos clic ANTES de hacer cambios
        const leadTarget = leads.find((l) => l.id === id);
        if (!leadTarget) return;

        // 2. Calculamos cuál será el siguiente estado de forma inmediata (Síncrona)
        const nextStatus = leadTarget.estatus === "nuevo" ? "proceso" :
            leadTarget.estatus === "proceso" ? "finalizado" : "nuevo";

        // 3. Actualizamos la tabla de leads con el nuevo estado ya calculado
        setLeads((prev) =>
            prev.map((l) => (l.id === id ? { ...l, estatus: nextStatus } : l))
        );

        // 4. Disparamos la notificación usando el estado que calculamos
        const config = statusConfig[nextStatus];

        setNotification({
            message: `Estatus cambiado a: ${config.label}`,
            type: config.type,
            id: Date.now()
        });
    };

    const handleSaveNotes = () => {
        setLeads(prev => prev.map(l => (l.id === selectedLead.id ? { ...l, notas: tempNote } : l)));
        setSelectedLead(null);
        setNotification({ message: "¡Notas guardadas correctamente!", type: "success", id: Date.now() });
    };

    const handleDeleteLead = (id) => {
        if (window.confirm("¿Seguro que deseas eliminar esta solicitud?")) {
            setLeads(prev => prev.filter(l => l.id !== id));
            setSelectedLead(null);
            setNotification({ message: "Solicitud eliminada", type: "error", id: Date.now() });
        }
    };

    const clearFilters = () => {
        setFilterService("");
        setStartDate("");
        setEndDate("");
    };

    const filteredLeads = leads.filter(lead => {
        const matchesService = lead.servicio.toLowerCase().includes(filterService.toLowerCase());
        const matchesStart = startDate === "" || lead.fecha >= startDate;
        const matchesEnd = endDate === "" || lead.fecha <= endDate;
        return matchesService && matchesStart && matchesEnd;
    });

    return {
        filterService, setFilterService,
        startDate, setStartDate,
        endDate, setEndDate,
        selectedLead, setSelectedLead,
        tempNote, setTempNote,
        notification,
        filteredLeads,
        handleOpenDetails, toggleStatus, handleSaveNotes, handleDeleteLead, clearFilters
    };
};