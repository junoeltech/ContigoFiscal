import React from "react";

// Mockup React component (Tailwind CSS) for "Contigo Fiscal" —
// Replace the CSS variable values with the exact logo colors.

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
      {/* Root color variables: replace with your logo colors */}
      <style>{`
        :root {
          --brand-primary: #0f4c81; /* default: deep blue — REPLACE with logo primary */
          --brand-accent: #f59e0b;  /* default: amber — REPLACE with logo accent */
          --brand-muted: #eef2ff;
        }
      `}</style>

      {/* NAV */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{background: 'var(--brand-primary)'}}>
              <span className="text-white font-bold">CF</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Contigo Fiscal</h1>
              <p className="text-xs text-gray-500 -mt-1">Asesoría fiscal clara y cercana</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a className="hover:text-(--brand-primary)">Servicios</a>
            <a className="hover:text-(--brand-primary)">¿Por qué elegirnos?</a>
            <a className="hover:text-(--brand-primary)">Contacto</a>
            <button className="ml-4 px-4 py-2 rounded-md bg-(--brand-accent) text-white font-medium shadow">Solicitar asesoría</button>
          </nav>
          <div className="md:hidden">
            <button className="px-3 py-2 border rounded">Menu</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[linear-gradient(90deg,var(--brand-primary)_0%,rgba(15,76,129,0.85)_60%)] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Tu tranquilidad ante el SAT comienza aquí.</h2>
            <p className="mt-4 text-lg text-gray-100/90">Asesoría fiscal clara, cercana y confiable para personas físicas y morales. Nos encargamos de que cumplas con tus obligaciones sin estrés.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-md font-medium">
                📌 Ver servicios
              </a>
              <a className="inline-flex items-center gap-3 bg-(--brand-accent) hover:brightness-95 px-5 py-3 rounded-md font-medium text-white">
                💬 Agenda una consulta
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-200">
              <strong>Atención:</strong> Declaraciones, trámites, contabilidad y regularización fiscal.
            </div>
          </div>

          {/* Visual mock / placeholder */}
          <div className="hidden md:flex justify-end">
            <div className="w-96 h-64 rounded-2xl p-4" style={{background: 'var(--brand-muted)'}}>
              <div className="h-full flex flex-col gap-3">
                <div className="bg-white rounded-lg h-12 w-40 shadow-sm" />
                <div className="flex-1 bg-white rounded-lg shadow-sm p-4 flex flex-col justify-between">
                  <div className="h-40 bg-linear-to-br from-white/80 to-white/60 rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-14">
        <h3 className="text-2xl font-bold">Servicios</h3>
        <p className="mt-2 text-gray-600 max-w-2xl">En Contigo Fiscal te ofrecemos asesoría fiscal y contable personalizada para que cumplas con tus obligaciones ante el SAT de forma correcta, clara y sin estrés.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <article className="p-6 bg-white rounded-lg shadow-sm border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-md" style={{background:'var(--brand-primary)'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4 className="font-semibold">Declaraciones de impuestos</h4>
                <p className="mt-2 text-sm text-gray-600">Mensuales y anuales. Personas físicas (asalariados, honorarios, arrendamiento, RESICO). Revisión y corrección de declaraciones.</p>
                <ul className="mt-3 text-sm text-gray-600 list-disc ml-5">
                  <li>Cálculo correcto de impuestos</li>
                  <li>Revisión y corrección</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="p-6 bg-white rounded-lg shadow-sm border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-md" style={{background:'var(--brand-primary)'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4 className="font-semibold">Asesoría fiscal personalizada</h4>
                <p className="mt-2 text-sm text-gray-600">Orientación clara sobre obligaciones, planeación fiscal básica, aclaración de dudas ante el SAT y apoyo para evitar multas y recargos.</p>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="p-6 bg-white rounded-lg shadow-sm border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-md" style={{background:'var(--brand-primary)'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 3h18v18H3z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4 className="font-semibold">Trámites ante el SAT</h4>
                <p className="mt-2 text-sm text-gray-600">Inscripción y actualización en el RFC, cambio de régimen, generación/renovación de e.firma, recuperación de contraseñas y atención a requerimientos.</p>
              </div>
            </div>
          </article>

          {/* Card 4 */}
          <article className="p-6 bg-white rounded-lg shadow-sm border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-md" style={{background:'var(--brand-primary)'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2l3 7h7l-5.5 4.2L19 22l-7-4-7 4 1.5-8.8L3 9h7z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4 className="font-semibold">Contabilidad para personas físicas</h4>
                <p className="mt-2 text-sm text-gray-600">Registro y control de ingresos y gastos, revisión de CFDI, conciliación de información fiscal y seguimiento mensual.</p>
              </div>
            </div>
          </article>

          {/* Card 5 */}
          <article className="p-6 bg-white rounded-lg shadow-sm border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-md" style={{background:'var(--brand-primary)'}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h4 className="font-semibold">Regularización fiscal</h4>
                <p className="mt-2 text-sm text-gray-600">Corrección de adeudos, declaraciones atrasadas y acompañamiento en procesos de regularización ante el SAT.</p>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">¿Por qué elegirnos?</h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>• Asesoría cercana y clara — explicamos cada paso.</li>
              <li>• Experiencia en personas físicas y morales.</li>
              <li>• Apoyo para evitar multas y regularizar tu situación.</li>
              <li>• Seguimiento mensual y conciliación de CFDI.</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg" style={{background:'var(--brand-muted)'}}>
            <h4 className="font-semibold">Proceso sencillo</h4>
            <ol className="mt-3 list-decimal ml-5 text-gray-600">
              <li>Contacto y diagnóstico inicial</li>
              <li>Recolección de documentación</li>
              <li>Trabajo de regularización / contabilidad</li>
              <li>Entrega de resultados y seguimiento</li>
            </ol>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 p-8 bg-white rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold">¿Listo para empezar?</h3>
            <p className="mt-2 text-gray-600">Agenda una consulta y deja que te ayudemos a llevar tus obligaciones sin estrés.</p>

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="p-3 rounded border" placeholder="Nombre completo" />
              <input className="p-3 rounded border" placeholder="Correo electrónico" />
              <input className="p-3 rounded border md:col-span-2" placeholder="Teléfono / WhatsApp" />
              <textarea className="p-3 rounded border md:col-span-2" rows={4} placeholder="Cuéntanos tu caso o pregunta"></textarea>
              <button type="submit" className="md:col-span-2 py-3 rounded bg-(--brand-primary) text-white font-medium">Enviar solicitud</button>
            </form>
          </div>

          <aside className="p-6 bg-white rounded-lg shadow-sm border">
            <h4 className="font-semibold">Contacto rápido</h4>
            <p className="mt-2 text-sm text-gray-600">Correo: contacto@contigofiscal.com</p>
            <p className="mt-1 text-sm text-gray-600">Tel: +52 55 0000 0000</p>
            <div className="mt-4">
              <a className="inline-block px-4 py-2 rounded bg-(--brand-accent) text-white">Agenda vía WhatsApp</a>
            </div>
          </aside>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Contigo Fiscal. Todos los derechos reservados.</div>
          <div className="mt-3 md:mt-0">Política de privacidad · Aviso de privacidad</div>
        </div>
      </footer>
    </div>
  );
}
