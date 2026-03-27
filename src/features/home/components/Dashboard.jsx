import React from "react";
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
    filteredLeads,
    handleOpenDetails,
    toggleStatus,
    handleSaveNotes,
    handleDeleteLead,
    clearFilters,
  } = useDashboard();

  return (
    <div className={styles.dashboardContainer}>
      {/* NOTIFICACIÓN FLOTANTE (TOAST) DINÁMICO */}
      {notification && (
        <div
          key={notification.id} // <--- ESTO ES LO MÁS IMPORTANTE PARA REINICIAR LA ALERTA
          className={`${styles.toast} ${styles[notification.type]}`}
        >
          <span className={styles.toastIcon}>
            {notification.type === "nuevo" && "🔴"}
            {notification.type === "proceso" && "🟠"}
            {notification.type === "finalizado" && "✅"}
            {notification.type === "success" && "✨"}
            {notification.type === "error" && "🗑️"}
          </span>
          <p>{notification.message}</p>
        </div>
      )}

      <header className={styles.dashHeader}>
        <div className={styles.headerInfo}>
          <h1>Panel de Control</h1>
          <p>
            Gestión de prospectos - <strong>Contigo Fiscal</strong>
          </p>
        </div>
        <button onClick={onLogout} className={styles.logoutBtn}>
          Cerrar Sesión
        </button>
      </header>

      {/* BARRA DE FILTROS */}
      <section className={styles.filtersSection}>
        <div className={styles.inputGroup}>
          <label>Servicio</label>
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
            <input
              type="date"
              className={styles.filterInput}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Hasta</label>
            <input
              type="date"
              className={styles.filterInput}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <button className={styles.clearBtn} onClick={clearFilters}>
          Limpiar Filtros
        </button>
      </section>

      {/* TABLA DE RESULTADOS */}
      <div className={styles.tableWrapper}>
        <table className={styles.leadsTable}>
          <thead>
            <tr>
              <th>Estatus</th>
              <th>Nombre del Cliente</th>
              <th>Servicio</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead.id} className={styles[lead.estatus]}>
                <td>
                  <div
                    className={`${styles.statusDot} ${styles[`dot_${lead.estatus}`]}`}
                    onClick={() => toggleStatus(lead.id)}
                    title="Haz clic para cambiar estado"
                  ></div>
                </td>
                <td className={styles.clientName}>{lead.nombre}</td>
                <td>
                  <span className={styles.serviceTag}>{lead.servicio}</span>
                </td>
                <td>{lead.fecha}</td>
                <td>
                  <button
                    className={styles.actionBtn}
                    onClick={() => handleOpenDetails(lead)}
                  >
                    Detalles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL DE DETALLES */}
      {selectedLead && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedLead(null)}
        >
          <div
            className={styles.modalDetail}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedLead(null)}
            >
              &times;
            </button>
            <div className={styles.modalHeader}>
              <span
                className={`${styles.statusBadge} ${styles[`dot_${selectedLead.estatus}`]}`}
              >
                {selectedLead.estatus.toUpperCase()}
              </span>
              <h2>{selectedLead.nombre}</h2>
            </div>
            <div className={styles.modalBody}>
              <section className={styles.infoSection}>
                <h4>Contacto</h4>
                <p>
                  📧 {selectedLead.email} | 📞 {selectedLead.telefono}
                </p>
                <a
                  href={`https://wa.me/${selectedLead.telefono}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.whatsappBtn}
                >
                  WhatsApp
                </a>
              </section>
              <section className={styles.infoSection}>
                <h4>Seguimiento Interno</h4>
                <textarea
                  className={styles.adminNotes}
                  value={tempNote}
                  onChange={(e) => setTempNote(e.target.value)}
                  placeholder="Escribe notas aquí..."
                />
                <div className={styles.modalFooterBtns}>
                  <button
                    className={styles.saveNotesBtn}
                    onClick={handleSaveNotes}
                  >
                    Guardar Notas
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDeleteLead(selectedLead.id)}
                  >
                    Eliminar Solicitud
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardAdmin;
