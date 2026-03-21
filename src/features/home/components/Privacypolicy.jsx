import React from "react";
import styles from "../styles/Privacypolicy.module.css";

export default function Privacypolicy() {
  return (
    <article className={styles.legalPage}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.mainTitle}>Información Legal</h1>
          <p className={styles.subtitle}>
            Contigo Fiscal — Huamantla, Tlaxcala
          </p>
        </div>
      </header>

      <div className={styles.container}>
        <section id="Privacypolicy" className={styles.section}>
          <h2 className={styles.sectionTitle}>Políticas de Privacidad</h2>
          <p className={styles.updateDate}>Última actualización: 2026</p>

          <div className={styles.body}>
            <p className={styles.introText}>
              En cumplimiento con lo dispuesto por la Ley Federal de Protección
              de Datos Personales en Posesión de los Particulares,
              <strong> ContigoFiscal</strong>, con domicilio en Huamantla,
              Tlaxcala, es responsable del tratamiento de los datos personales
              que usted nos proporcione a través de este sitio web.
            </p>

            <div className={styles.legalBlock}>
              <h3>1. Datos personales que recopilamos </h3>
              <p>
                ContigoFiscal podrá recopilar los siguientes datos personales :
              </p>
              <ul>
                <li>Nombre completo </li>
                <li>Teléfono de contacto</li>
                <li>Correo electrónico</li>
                <li>Registro Federal de Contribuyentes (RFC) </li>
                <li>Razón social (en su caso) </li>
                <li>Domicilio fiscal </li>
              </ul>
            </div>

            <div className={styles.legalBlock}>
              <h3>2. Finalidad del tratamiento de datos </h3>
              <p>Los datos personales recabados serán utilizados para :</p>
              <ul>
                <li>Brindar los servicios contables y fiscales solicitados</li>
                <li>Cumplir obligaciones legales y fiscales </li>
                <li>Elaboración de facturación </li>
                <li>Contacto, atención y seguimiento a clientes </li>
                <li>Envío de información relacionada con nuestros servicios</li>
                <li>Gestión administrativa y operativa </li>
              </ul>
              <p>
                Sus datos no serán utilizados para fines distintos sin su
                consentimiento .
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>3. Protección de los datos personales </h3>
              <p>
                <strong>ContigoFiscal</strong> implementa medidas de seguridad
                administrativas, técnicas y físicas necesarias para proteger sus
                datos personales contra daño, pérdida, alteración, destrucción o
                uso no autorizado .
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>4. Transferencia de datos </h3>
              <p>
                <strong>ContigoFiscal</strong> no vende ni comercializa datos
                personales . La información podrá ser compartida únicamente
                cuando:
              </p>
              <ul>
                <li>Exista obligación legal ante autoridades competentes</li>
                <li>
                  Sea estrictamente necesario para la prestación del servicio
                  (por ejemplo, sistemas de facturación o plataformas
                  tecnológicas)
                </li>
              </ul>
            </div>

            <div className={styles.legalBlock}>
              <h3>5. Derechos ARCO </h3>
              <p>
                Usted tiene derecho a{" "}
                <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> al uso
                de sus datos personales .
              </p>
              <div className={styles.contactBox}>
                <p>
                  Para ejercer estos derechos, puede enviar una solicitud a :
                </p>
                <p className={styles.emailHighlight}>
                  contigofiscal@hotmail.com
                </p>
              </div>
              <p className="mt-4">La solicitud debe incluir :</p>
              <ul>
                <li>Nombre completo </li>
                <li>Medio de contacto </li>
                <li>Descripción clara de la solicitud </li>
              </ul>
            </div>

            <div className={styles.legalBlock}>
              <h3>6. Modificaciones a la política </h3>
              <p>
                <strong>ContigoFiscal</strong> se reserva el derecho de
                modificar esta Política de Privacidad. Cualquier cambio será
                publicado en esta página.
              </p>
            </div>

            <div className={styles.legalBlock}>
              <h3>7. Contacto </h3>
              <p>
                Para cualquier duda relacionada con esta Política de Privacidad,
                puede comunicarse a :
              </p>
              <p className={styles.emailHighlight}>contigofiscal@hotmail.com</p>
            </div>

            <p className={styles.disclaimer}>
              Los datos personales proporcionados serán utilizados únicamente
              para dar atención a su solicitud y ofrecer información sobre los
              servicios de ContigoFiscal. Para más información consulte nuestra
              Política de Privacidad.
              <p>
                {" "}
                © [2026] ContigoFiscal. Todos los derechos reservados. La
                información contenida en este sitio es de carácter informativo y
                no constituye asesoría contable
              </p>
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
