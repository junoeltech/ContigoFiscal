import { useState, useEffect } from "react";
import Services from "../services/Service";

export const useDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [notification, setNotification] = useState(null);


  const [filterService, setFilterService] = useState(""); 
  const [startDate, setStartDate] = useState("");         
  const [endDate, setEndDate] = useState("");
  const [selectedLead, setSelectedLead] = useState(null);
  const [tempNote, setTempNote] = useState("");

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    try {
      const data = await Services.getAllRequests();
      setLeads(data);
    } catch (error) {
      showNotification("error", "Error al conectar con el servidor");
    }
  };

  const handleOpenDetails = (lead) => {
    setSelectedLead(lead);
    setTempNote(lead.notas || ""); 
  };

 

  const handleDeleteLead = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este prospecto?")) {
      try {
        await Services.deleteRequest(id);
        

        setLeads(prev => prev.filter(lead => lead.id !== id));
        showNotification("error", "Prospecto eliminado"); 
        
        if (selectedLead?.id === id) setSelectedLead(null); 
      } catch (error) {
        showNotification("error", "Error al eliminar el registro");
      }
    }
  };

 const toggleStatus = async (id) => {
    const currentLead = leads.find(l => l.id === id);
    if (!currentLead) return;

    const statusFlow = {
        "nuevo": "proceso",
        "proceso": "finalizado",
        "finalizado": "nuevo"
    };
    
    const nextStatus = statusFlow[currentLead.status.toLowerCase()] || "nuevo";

    try {
        await Services.updateRequestStatus(id, nextStatus);

        showNotification("success", `Estado actualizado a: ${nextStatus.toUpperCase()}`);

        loadLeads();
    } catch (error) {
        console.error("Error al actualizar status:", error);
        showNotification("error", "No se pudo actualizar el estado");
    }
};

  const filteredLeads = leads.filter((lead) => {
    const matchesService = (lead.servicio || "").toLowerCase().includes(filterService.toLowerCase());
    const matchesDate = true; 

    return matchesService && matchesDate;
  });

  const clearFilters = () => {
    setFilterService("");
    setStartDate("");
    setEndDate("");
  };

  const showNotification = (type, message) => {
    setNotification({ id: Date.now(), type, message });
    setTimeout(() => setNotification(null), 3000);
  };


  return {
    filterService,
    setFilterService,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    selectedLead,
    setSelectedLead,
    tempNote,
    setTempNote,
    notification,
    handleOpenDetails, 
    toggleStatus,
    filteredLeads, 
    clearFilters,
    loadLeads,
    handleDeleteLead,
    
  };
};