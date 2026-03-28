import React, { useState } from "react";
import styles from "../styles/dashboard.module.css";
import { useDashboard } from "../hooks/useDashboard";

const DashboardAdmin = ({ onLogout }) => {
  const {
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
  } = useDashboard();


   // 1. Estado para la pestaña activa
  const [activeTab, setActiveTab] = useState("nuevo");

  // 2. Definición de las pestañas disponibles
  const tabs = [
    { id: "nuevo", label: "Nuevos", icon: "🔴" },
    { id: "proceso", label: "Proceso", icon: "🟠" },
    { id: "finalizado", label: "Finalizados", icon: "✅" },
  ];

  // 3. Filtrar los leads según la pestaña activa
  const displayedLeads = filteredLeads.filter(
    (lead) => lead.status.toLowerCase() === activeTab.toLowerCase()
  );

  const formatDate = (dateString) => {
    if (!dateString) return "Sin fecha";
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* NOTIFICACIÓN FLOTANTE */}
      {notification && (
        <div key={notification.id} className={`${styles.toast} ${styles[notification.type]}`}>
          <span className={styles.toastIcon}>
            {notification.type === "success" ? "✨" : "🗑️"}
          </span>
          <p>{notification.message}</p>
        </div>
      )}

      <header className={styles.dashHeader}>
        <div className={styles.headerInfo}>
          <h1>Panel de Control</h1>
          <p>Gestión de prospectos - <strong>Contigo Fiscal</strong></p>
        </div>
        <button onClick={onLogout} className={styles.logoutBtn}>Cerrar Sesión</button>
      </header>

      {/* BARRA DE FILTROS */}
      <section className={styles.filtersSection}>
        <div className={styles.inputGroup}>
          <label>Buscar por Servicio</label>
          <input
            type="text"
            placeholder="Ej. Impuestos..."
            className={styles.filterInput}
            value={filterService}
            onChange={(e) => setFilterService(e.target.value)}
          />
        </div>
        <div className={styles.dateRangeGroup}>
          <div className={styles.inputGroup}>
            <label>Desde</label>
            <input type="date" className={styles.filterInput} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <label>Hasta</label>
            <input type="date" className={styles.filterInput} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>
        <button className={styles.clearBtn} onClick={clearFilters}>Limpiar Filtros</button>
      </section>

      {/* 4. NAVEGACIÓN POR PESTAÑAS (TABS) */}
      <nav className={styles.tabsNav}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabItem} ${activeTab === tab.id ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className={styles.tabIcon}>{tab.icon}</span>
            {tab.label}
            <span className={styles.tabCount}>
              ({filteredLeads.filter(l => l.status.toLowerCase() === tab.id).length})
            </span>
          </button>
        ))}
      </nav>

      {/* TABLA DE RESULTADOS (Se actualiza sola al cambiar de pestaña) */}
      <div className={styles.tableWrapper}>
        {displayedLeads.length > 0 ? (
          <table className={styles.leadsTable}>
            <thead>
              <tr>
                <th>Estatus</th>
                <th>Nombre del Cliente</th>
                <th>RFC</th>
                <th>Servicio</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {displayedLeads.map((lead) => (
                <tr key={lead.id} className={styles.rowFadeIn}>
                  <td>
                    <div
                      className={`${styles.statusDot} ${styles[`dot_${lead.status.replace(/\s+/g, '')}`]}`}
                      onClick={() => toggleStatus(lead.id)}
                      title="Haz clic para mover al siguiente estado"
                    ></div>
                  </td>
                  <td className={styles.clientName}>{lead.nombreCompleto}</td>
                  <td>{lead.rfc}</td>
                  <td><span className={styles.serviceTag}>{lead.nombreServicio}</span></td>
                  <td>{formatDate(lead.createdAt)}</td>
                  <td>
                    <button className={styles.actionBtn} onClick={() => handleOpenDetails(lead)}>Detalles</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={styles.emptyState}>
            <p>No hay prospectos con estatus <strong>{activeTab.toUpperCase()}</strong></p>
          </div>
        )}
      </div>

     {/* MODAL DE DETALLES */}
      {selectedLead && (
        <div className={styles.modalOverlay} onClick={() => setSelectedLead(null)}>
          <div className={styles.modalDetail} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedLead(null)}>&times;</button>
            
            <div className={styles.modalHeader}>
              <span className={`${styles.statusBadge} ${styles[`dot_${selectedLead.status.toLowerCase().replace(/\s+/g, '')}`]}`}>
                {selectedLead.status.toUpperCase()}
              </span>
              <h2>{selectedLead.nombreCompleto}</h2>
              
              {/* Contexto rápido: Servicio y Fecha */}
              <div className={styles.modalMeta}>
                <span className={styles.serviceTag}>{selectedLead.nombreServicio || "Sin servicio asignado"}</span>
                <span className={styles.modalDate}>{formatDate(selectedLead.createdAt)}</span>
              </div>
            </div>

            <div className={styles.modalBody}>
              <section className={styles.infoSection}>
                <h4>Datos del Prospecto</h4>
                <div className={styles.contactGrid}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>Email</span>
                    <a href={`mailto:${selectedLead.correo}`} className={styles.contactValue}>
                      {selectedLead.correo}
                    </a>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>Teléfono</span>
                    <span className={styles.contactValue}>{selectedLead.telefono}</span>
                  </div>
                  {selectedLead.rfc && (
                    <div className={styles.contactItem}>
                      <span className={styles.contactLabel}>RFC</span>
                      <span className={styles.contactValue}>{selectedLead.rfc}</span>
                    </div>
                  )}
                </div>
              </section>

            </div>

            <div className={styles.modalFooterBtns}>
              {/* Enlace inteligente de WhatsApp pre-llenado */}
              <a 
                href={`https://wa.me/52${selectedLead.telefono?.replace(/\D/g, '')}?text=Hola ${encodeURIComponent(selectedLead.nombreCompleto)}, me comunico de Contigo Fiscal respecto a su solicitud sobre ${encodeURIComponent(selectedLead.nombreServicio || 'nuestros servicios')}.`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.whatsappBtn}
              >
               Contactar
              </a>
              
              <div className={styles.actionGroup}>
                <button className={styles.deleteBtn} onClick={() => handleDeleteLead(selectedLead.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      </div> 
  ); 
}; 

export default DashboardAdmin;