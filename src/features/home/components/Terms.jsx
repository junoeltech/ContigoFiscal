import React from "react";
import styles from "../styles/Terms.module.css";

export default function Terms() {
  return (
    <article className={styles.legalPage}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.mainTitle}>Información Legal</h1>
          <p className={styles.subtitle}>
            Contigo Fiscal - Huamantla, Tlaxcala
          </p>
        </div>
      </header>

      <div className={styles.container}>
        <section id="Terms" className={styles.section}>
          <h2 className={styles.sectionTitle}>Términos y Condiciones</h2>
          <p className={styles.updateDate}>Última actualización: 2026</p>

          <div className={styles.body}>
            <p className={styles.introText}>
              Los presentes Términos y Condiciones regulan el acceso, navegación
              y uso del sitio web operado bajo la denominación{" "}
              <strong>ContigoFiscal</strong> (en adelante, el “Sitio”). El
              acceso o utilización del Sitio implica la aceptación plena,
              voluntaria e informada del presente acuerdo, el cual posee
              carácter legalmente vinculante conforme a la legislación vigente
              en los Estados Unidos Mexicanos. En caso de no aceptar estas
              disposiciones, el usuario deberá abstenerse de utilizar el Sitio.
            </p>

            <div className={styles.legalBlock}>
              <h3>1. Definiciones</h3>
              <p>Para efectos del presente documento se entenderá por: </p>
              <ul>
                <li>
                  <strong>Sitio: </strong>Plataforma digital operada por
                  ContigoFiscal.
                </li>
                <li>
                  <strong>Usuario: </strong>Persona que accede, navega o
                  interactúa con el Sitio.
                </li>
                <li>
                  <strong>Cliente: </strong>Usuario que contrata servicios
                  profesionales.
                </li>
                <li>
                  <strong>Servicios: </strong>Actividades contables, fiscales o
                  administrativas ofrecidas.
                </li>
                <li>
                  <strong>Información: </strong>Datos, documentos o contenidos
                  proporcionados.
                </li>
                <li>
                  <strong>Medios electrónicos: </strong>Correos, plataformas
                  digitales, sistemas remotos.
                </li>
                <li>
                  <strong>Honorarios: </strong>Contraprestaciones económicas por
                  servicios profesionales.
                </li>
                <li>
                  <strong>Fuerza mayor: </strong>Eventos imprevisibles o
                  inevitables fuera de control razonable.
                </li>
              </ul>
            </div>

            <div className={styles.legalBlock}>
              <h3>2. Titularidad y naturaleza del proyecto</h3>
              <p>
                <strong>ContigoFiscal </strong>constituye un proyecto
                profesional especializado en servicios contables y fiscales
                dentro del territorio mexicano.{" "}
              </p>
              <p>
                El titular podrá operar como persona física con actividad
                profesional o mediante figura jurídica aplicable conforme a la
                evolución del despacho.
              </p>
              <p>
                El Sitio no constituye por sí mismo oferta contractual
                automática.{" "}
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>3. Objeto del sitio</h3>
              <p>
                El Sitio tiene finalidad informativa, comercial y de contacto
                profesional. La información publicada no constituye asesoría
                personalizada ni genera relación contractual directa.{" "}
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>4. Servicios promovidos</h3>
              <p>
                <strong>ContigoFiscal </strong>podrá promover, de forma
                enunciativa mas no limitativa:{" "}
              </p>
              <ul>
                <li>Contabilidad general</li>
                <li>Cumplimiento fiscal</li>
                <li>Planeación fiscal</li>
                <li>Regularizaciones</li>
                <li>Facturación y nómina</li>
                <li>Atención de requerimientos</li>
                <li>Asesoría administrativa y financiera</li>
              </ul>
              <p>La contratación requerirá acuerdo independiente.</p>
            </div>

            <div className={styles.legalBlock}>
              <h3>5. Limitación de responsabilidad profesional</h3>
              <p>
                <strong>ContigoFiscal </strong>actuará conforme a estándares
                profesionales razonables sin garantizar resultados fiscales
                específicos.
              </p>
              <p>
                Las obligaciones fiscales corresponden exclusivamente al
                contribuyente.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>6. Exclusión por factores externos</h3>
              <p>
                No existirá responsabilidad por actos de autoridad, cambios
                normativos, fallas de plataformas gubernamentales o eventos
                fuera de control razonable.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>7. Confidencialidad y resguardo de información</h3>
              <p>
                La información proporcionada será tratada bajo principios de
                confidencialidad profesional, salvo obligación legal de
                revelación.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>8. Comunicaciones electrónicas</h3>
              <p>
                El usuario acepta que las comunicaciones realizadas mediante
                medios electrónicos tendrán plena validez jurídica.
              </p>
              <p>
                <strong>ContigoFiscal </strong>no será responsable por fallas
                atribuibles a sistemas externos.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>9. Propiedad intelectual</h3>
              <p>
                Todos los contenidos del Sitio son propiedad exclusiva de
                <strong>ContigoFiscal</strong>. Queda prohibida su reproducción,
                modificación o distribución sin autorización expresa.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>10. Derecho de suspención o negativa de servicio</h3>
              <p>
                <strong>ContigoFiscal </strong>podrá rechazar solicitudes o
                suspender servicios cuando existan riesgos legales,
                inconsistencias documentales o conductas indebidas.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>11. Independencia profesional</h3>
              <p>
                <strong>ContigoFiscal </strong>actuará bajo criterios técnicos y
                normativos, manteniendo independencia profesional.
              </p>
              <p>
                No existirá obligación de adoptar posturas contrarias a la
                legislación aplicable.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>12. No asesoría legal</h3>
              <p>
                Los servicios ofrecidos no constituyen asesoría jurídica ni
                sustituyen la consulta con abogados especializados.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>13. Clausula anticorrupción</h3>
              <p>
                El usuario reconoce que <strong>ContigoFiscal</strong> no
                participará en prácticas ilícitas, evasivas o contrarias a la
                normatividad fiscal.{" "}
              </p>
              <p>
                Cualquier solicitud en ese sentido podrá resultar en terminación
                inmediata de la relación.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>14. Prevención de lavado de dinero</h3>
              <p>
                <strong>ContigoFiscal </strong>podrá requerir documentación e
                información adicional para cumplir obligaciones legales en
                materia de prevención de operaciones con recursos de procedencia
                ilícita.
              </p>
              <p>
                La negativa del cliente podrá impedir la prestación de
                servicios.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>15. Fuerza mayor</h3>
              <p>
                No existirá responsabilidad por incumplimientos derivados de
                eventos imprevisibles o inevitables.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>16. Modificaciones al sitio y términos</h3>
              <p>
                <strong>ContigoFiscal </strong>podrá modificar el Sitio y estos
                Términos en cualquier momento.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>17. Legislación aplicable</h3>
              <p>
                Estos Términos se regirán conforme a las leyes de los Estados
                Unidos Mexicanos.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>18. Jurisdicción</h3>
              <p>
                Las partes se someten a tribunales competentes dentro del
                territorio mexicano.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>19. Contacto</h3>
              <p>
                <strong>ContigoFiscal</strong>
              </p>
              <div className={styles.contactBox}>
                <p>
                  Para ejercer estos derechos, puede enviar una solicitud a :
                </p>
                <p className={styles.emailHighlight}>
                  contigofiscal@hotmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
