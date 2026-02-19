import { useState } from "react";

const C = {
  primary: "#2947FE", primaryHover: "#1F37CC",
  blue80: "#EFF6FF", blue100: "#DBEAFE",
  white: "#FFFFFF", bg: "#FAFAFA",
  border: "#CFD6E1", textSec: "#415162", text: "#252429",
  warn: "#FF7629", err: "#FF2990", ok: "#38CFD9",
};

const nav = [
  { id: "resumen", l: "Resumen" },
  { id: "alcance", l: "Alcance" },
  { id: "roadmap", l: "Roadmap" },
  { id: "datos", l: "Datos" },
  { id: "equipo", l: "Equipo" },
];

const Badge = ({ children }) => (
  <span style={{ background: C.blue100, color: C.primary, padding: "2px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600 }}>{children}</span>
);

const Prio = ({ l }) => {
  const c = l === "Crítica" ? C.err : l === "Alta" ? C.warn : l === "Media" ? C.primary : C.ok;
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 600, color: c }}>
    <span style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />{l}
  </span>;
};

export default function Plan() {
  const [s, setS] = useState("resumen");
  const [ph, setPh] = useState(0);

  const card = (ch, rest = {}) => (
    <div style={{ background: C.white, borderRadius: 12, border: `1px solid ${C.border}`, padding: "20px 24px", marginBottom: 12, ...rest }}>{ch}</div>
  );

  const content = () => {
    if (s === "resumen") return <>
      <h2 style={{ fontSize: 28, fontWeight: 800, color: C.text, margin: "0 0 6px" }}>DRAXTON Mobility Inspired</h2>
      <p style={{ color: C.textSec, fontSize: 15, lineHeight: 1.65, margin: "0 0 24px" }}>
        Plan para centralizar, estandarizar y operar todos vuestros datos ESG desde una única plataforma.
        Sin más excels dispersos, sin depender de consultoras para saber dónde están las cosas, sin duplicar trabajo entre plantas.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10, marginBottom: 24 }}>
        {[["Sector", "Automoción"], ["Empleados", "~4.000"], ["Plantas", "~13 instalaciones"], ["Países", "6"], ["Estructura", "2 subgrupos"], ["Inicio", "Septiembre 2026"]].map(([k, v], i) => (
          <div key={i} style={{ background: C.white, borderRadius: 10, padding: "14px 16px", border: `1px solid ${C.border}` }}>
            <div style={{ color: C.textSec, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 2 }}>{k}</div>
            <div style={{ color: C.text, fontSize: 16, fontWeight: 700 }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ background: C.blue80, borderRadius: 12, padding: "22px 24px", border: `1px solid ${C.blue100}`, marginBottom: 20 }}>
        <h3 style={{ color: C.primary, fontSize: 16, fontWeight: 700, margin: "0 0 14px" }}>Lo que vais a conseguir</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 8 }}>
          {[
            "Un único sitio con todos los datos ESG de las 13 plantas, trazados y listos para auditar",
            "Huella de carbono completa (Scope 1, 2 y 3) con detalle por planta y subgrupo",
            "EINF bajo GRI generado desde los mismos datos — sin duplicar trabajo",
            "Dashboards multisitio para comparar rendimiento entre instalaciones y decidir con datos",
            "Control continuo de indicadores, no solo el photo finish de final de año",
            "Métricas clave de CDP y EcoVadis centralizadas y actualizadas desde la misma base de datos",
          ].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: C.primary, fontSize: 14, marginTop: 2 }}>✓</span>
              <span style={{ color: C.text, fontSize: 14, lineHeight: 1.55 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      {card(<>
        <h3 style={{ color: C.text, fontSize: 15, fontWeight: 700, margin: "0 0 8px" }}>La situación hoy</h3>
        <p style={{ color: C.textSec, fontSize: 14, lineHeight: 1.65, margin: 0 }}>
          Vuestros datos ESG viven dispersos: excels diferentes por planta, facturas en varios idiomas, datos sociales
          recopilados a mano por cada negocio y consolidados manualmente, y una dependencia histórica de Global Factor
          como memoria del proceso. El equipo central (3 personas) dedica más tiempo a perseguir datos que a analizarlos.
          Con Dcycle, eso se acaba: cada dato se captura una vez, desde su origen, y sirve para todo lo que necesitéis.
        </p>
      </>)}
    </>;

    if (s === "alcance") return <>
      <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: "0 0 20px" }}>Qué incluye vuestro proyecto</h2>
      {[
        { t: "Huella de Carbono Corporativa", tag: "HdC", d: "Scope 1, 2 y 3 para las 13 plantas con consolidación global y por subgrupo. Foco especial en materiales comprados (70-80% de vuestro Scope 3), medidos por tipología de producto.", items: ["Scope 1: combustibles, gases refrigerantes, vehículos", "Scope 2: electricidad, garantías de origen, fotovoltaica", "Scope 3: materiales, viajes de negocio, commuting, logística", "Informes Dcycle, GHG Protocol, MITECO"] },
        { t: "EINF bajo GRI", tag: "EINF", d: "Estado de Información No Financiera completo. Vuestra Doble Materialidad y Gap Analysis ya existentes se incorporan directamente.", items: ["Indicadores ambientales (se reutilizan de HdC)", "Indicadores sociales (RRHH, PRL, diversidad)", "Gobernanza (políticas, cadena de suministro)", "Generación del informe EINF alineado a GRI"] },
        { t: "Proyectos personalizados", tag: "Custom", d: "Estructuras ad-hoc para necesidades que no encajan en plantillas estándar. Tres proyectos identificados:", items: ["Comparación de consumos y rendimiento entre líneas de negocio e instalaciones", "Tracking de métricas clave para CDP Climate Change (no el reporte completo, sino los indicadores que alimentáis desde Dcycle)", "Tracking de métricas clave para EcoVadis (los indicadores cuantitativos que ya capturáis en la plataforma, no el formulario entero)"] },
        { t: "Dashboards ESG multisitio", tag: "Dashboards", d: "KPIs por planta, región y global. Líneas base, objetivos, tendencias. Capacidad de crear métricas propias (ej: porcentaje de recuperación de material).", items: ["KPIs de huella por planta", "KPIs EINF (ambiental + social + gobernanza)", "Métricas internas personalizadas", "Agregación por planta, región y global"] },
      ].map((m, i) => card(
        <div key={i}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ color: C.text, fontWeight: 700, fontSize: 16 }}>{m.t}</span>
            <Badge>{m.tag}</Badge>
          </div>
          <p style={{ color: C.textSec, fontSize: 14, lineHeight: 1.6, margin: "0 0 10px" }}>{m.d}</p>
          {m.items.map((it, j) => (
            <div key={j} style={{ display: "flex", gap: 6, alignItems: "flex-start", marginBottom: 3 }}>
              <span style={{ color: C.primary, fontSize: 8, marginTop: 6 }}>●</span>
              <span style={{ color: C.text, fontSize: 13, lineHeight: 1.5 }}>{it}</span>
            </div>
          ))}
        </div>
      , { key: i }))}
      <div style={{ background: C.blue80, borderRadius: 10, padding: "14px 18px", border: `1px solid ${C.blue100}` }}>
        <p style={{ color: C.text, fontSize: 14, lineHeight: 1.6, margin: 0 }}>
          <strong style={{ color: C.primary }}>La clave:</strong> todos estos módulos comparten los mismos datos.
          Una factura de electricidad que cargáis para la Huella de Carbono alimenta automáticamente el EINF,
          los dashboards y las métricas de CDP/EcoVadis. Cero duplicación.
        </p>
      </div>
    </>;

    if (s === "roadmap") {
      const phases = [
        { n: "Configuración y Kick-off", w: "S1-3", c: C.primary, steps: [
          { w: "Pre-kick-off", a: "Configuración de cuenta: ~13 plantas, 2 subgrupos, permisos. Email de bienvenida con accesos y recursos.", who: "Dcycle + Zirkel", out: "Plataforma lista, accesos creados" },
          { w: "Semana 1", a: "Kick-off (~90 min): presentación del Sustainability Specialist, validación de objetivos y estructura, asignación de roles, demo de navegación.", who: "Dcycle + Zirkel + Draxton", out: "Roadmap validado, estructura confirmada" },
          { w: "Semana 2", a: "Formación Scope 1-2 + Setup EINF (~75 min): carga de combustibles, electricidad, facturas en múltiples idiomas. Subida de la Doble Materialidad existente.", who: "Dcycle + Zirkel + Draxton", out: "Proyectos HdC y EINF creados" },
          { w: "Semana 2-3", a: "Formación para responsables de planta (~45 min): sesión para Data Operators. Cómo acceder, cargar datos, seguir tareas.", who: "Dcycle + Zirkel + plantas", out: "Equipos de planta operativos" },
        ]},
        { n: "Recopilación de datos", w: "S3-8", c: "#6366F1", steps: [
          { w: "Semana 3-6", a: "Carga de Scope 1-2 por cada planta: facturas de electricidad, combustibles, gases. El equipo central supervisa. Soporte vía chat.", who: "Draxton + Dcycle + Zirkel", out: "Scope 1-2 cargado (13 plantas)" },
          { w: "Semana 3-6", a: "En paralelo: datos sociales EINF. Laura coordina RRHH, PRL, retribuciones y diversidad desde cada negocio.", who: "Draxton (Laura)", out: "Datos sociales en plataforma" },
          { w: "Semana 4", a: "Follow-up Scope 3 (~75 min): formación en materiales comprados (por tipología de producto), viajes, commuting, logística. Formato de extracción del ERP.", who: "Dcycle + Zirkel + Raúl", out: "Equipo formado en Scope 3" },
          { w: "Semana 4-8", a: "Carga progresiva de Scope 3. Prioridad absoluta a materiales comprados (70-80% del total).", who: "Draxton + Dcycle + Zirkel", out: "Scope 3 en plataforma" },
          { w: "Semana 5-7", a: "Datos de gobernanza: políticas corporativas, cadena de suministro.", who: "Draxton (Clotilde)", out: "Documentación cargada" },
        ]},
        { n: "Cálculo, validación y dashboards", w: "S8-12", c: C.warn, steps: [
          { w: "Semana 8-9", a: "Validación (~60 min): revisión conjunta de datos, gaps, factores de emisión. Especial atención a materiales.", who: "Dcycle + Zirkel + Raúl + Laura", out: "Datos validados" },
          { w: "Semana 9-10", a: "Cálculo de Huella de Carbono: HdC corporativa global y por planta/subgrupo.", who: "Dcycle + Zirkel + Raúl", out: "HdC completa Scope 1, 2 y 3" },
          { w: "Semana 9-11", a: "Dashboards + Proyectos custom (~75 min): KPIs multisitio, líneas base, objetivos. Configuración de métricas para CDP y EcoVadis. Métricas personalizadas.", who: "Dcycle + Zirkel + Raúl + Clotilde", out: "Dashboards operativos, métricas CDP/EcoVadis" },
          { w: "Semana 10-12", a: "Borrador EINF bajo GRI: generación y revisión iterativa.", who: "Dcycle + Zirkel + Clotilde + Laura", out: "EINF generado y revisado" },
        ]},
        { n: "Reporting final y autonomía", w: "S12-14", c: C.ok, steps: [
          { w: "Semana 12-13", a: "Reporting (~60 min): informes finales, métricas de intensidad, oportunidades de reducción. Revisión de métricas CDP y EcoVadis.", who: "Dcycle + Zirkel + Raúl + Clotilde", out: "Informes finales" },
          { w: "Semana 13-14", a: "Cierre (~45 min): logros vs objetivos, formación avanzada (factores de emisión personalizados), planificación del siguiente ciclo.", who: "Dcycle + Zirkel + equipo Draxton", out: "Plan del siguiente ciclo" },
        ]},
      ];
      return <>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: "0 0 6px" }}>Roadmap de puesta en marcha</h2>
        <p style={{ color: C.textSec, fontSize: 14, margin: "0 0 18px" }}>14 semanas. Los workstreams de HdC, EINF y proyectos avanzan en paralelo — los datos se capturan una vez y alimentan todo.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 8, marginBottom: 20 }}>
          {phases.map((p, i) => (
            <button key={i} onClick={() => setPh(i)} style={{
              background: ph === i ? p.c : C.white, color: ph === i ? C.white : C.text,
              border: `1.5px solid ${ph === i ? p.c : C.border}`, borderRadius: 10, padding: "12px 14px",
              cursor: "pointer", textAlign: "left", transition: "all 0.15s",
            }}>
              <div style={{ fontWeight: 700, fontSize: 13 }}>Fase {i + 1}</div>
              <div style={{ fontSize: 12, opacity: 0.8 }}>{p.w}</div>
            </button>
          ))}
        </div>
        <div style={{ background: C.white, borderRadius: 12, border: `1px solid ${C.border}`, overflow: "hidden" }}>
          <div style={{ padding: "16px 22px", borderBottom: `1px solid ${C.border}`, background: C.blue80 }}>
            <span style={{ fontWeight: 700, fontSize: 17, color: C.text }}>{phases[ph].n}</span>
            <span style={{ color: C.textSec, fontSize: 13, marginLeft: 10 }}>{phases[ph].w}</span>
          </div>
          {phases[ph].steps.map((st, i) => (
            <div key={i} style={{ padding: "14px 22px", borderBottom: i < phases[ph].steps.length - 1 ? `1px solid ${C.border}` : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, flexWrap: "wrap", gap: 4 }}>
                <span style={{ color: phases[ph].c, fontWeight: 700, fontSize: 13 }}>{st.w}</span>
                <span style={{ color: C.textSec, fontSize: 11, background: C.bg, padding: "2px 8px", borderRadius: 4 }}>{st.who}</span>
              </div>
              <p style={{ color: C.text, fontSize: 14, lineHeight: 1.55, margin: "0 0 4px" }}>{st.a}</p>
              <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                <span style={{ color: C.primary, fontSize: 11 }}>→</span>
                <span style={{ color: C.primary, fontSize: 12, fontWeight: 600 }}>{st.out}</span>
              </div>
            </div>
          ))}
        </div>
      </>;
    }

    if (s === "datos") {
      const groups = [
        { t: "Huella de Carbono — Scope 1 y 2", rows: [
          ["Combustibles fósiles por planta", "Alta", "Facturas / ERP"],
          ["Gases refrigerantes (recargas)", "Alta", "Registros de mantenimiento"],
          ["Electricidad (facturas)", "Alta", "Facturas (varios idiomas)"],
          ["Garantías de origen", "Alta", "Compras / energía"],
          ["Producción fotovoltaica", "Media", "Contadores de planta"],
          ["Flota de vehículos", "Media", "Tarjetas combustible"],
        ]},
        { t: "Huella de Carbono — Scope 3", rows: [
          ["Materiales comprados (kg, tipo de producto)", "Crítica", "ERP / dpto. compras"],
          ["Viajes de negocio", "Alta", "Agencias viajes / notas de gastos"],
          ["Commuting empleados", "Media", "Encuesta a empleados"],
          ["Mercancías enviadas/recibidas", "Media", "Dpto. logística"],
          ["Fin de vida productos", "Baja", "Estimación sectorial"],
          ["Agua (consumo por planta)", "Alta", "Facturas"],
          ["Residuos (peligrosos / no peligrosos)", "Alta", "PDF/Excel de gestor"],
        ]},
        { t: "EINF — Social y Gobernanza", rows: [
          ["Plantilla RRHH (contrato, sexo, edad, rol, negocio)", "Alta", "RRHH cada negocio"],
          ["Retribuciones por categoría", "Alta", "RRHH"],
          ["Prevención riesgos laborales", "Alta", "PRL cada negocio"],
          ["Formación y diversidad", "Media", "RRHH"],
          ["Políticas y cadena de suministro", "Media", "Legal / compliance"],
          ["Doble Materialidad + Gap Analysis", "Alta", "Documento existente"],
        ]},
      ];
      return <>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: "0 0 6px" }}>Qué datos necesitaréis preparar</h2>
        <div style={{ background: C.blue80, borderRadius: 10, padding: "14px 18px", border: `1px solid ${C.blue100}`, marginBottom: 20 }}>
          <p style={{ color: C.text, fontSize: 14, lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: C.primary }}>Cómo funciona esto:</strong> primero resolvemos el problema de datos (que
            las 13 plantas carguen info de forma estandarizada), después aplicamos los cálculos. Cada dato se captura una vez
            y se reutiliza para todo: HdC, EINF, dashboards, CDP, EcoVadis. Una factura cubre múltiples necesidades.
          </p>
        </div>
        {groups.map((g, gi) => (
          <div key={gi} style={{ marginBottom: 20 }}>
            <h3 style={{ color: C.text, fontSize: 15, fontWeight: 700, margin: "0 0 8px" }}>{g.t}</h3>
            <div style={{ background: C.white, borderRadius: 10, border: `1px solid ${C.border}`, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2.5fr 75px 1.5fr", padding: "8px 14px", background: C.bg, borderBottom: `1px solid ${C.border}` }}>
                {["Dato", "Prioridad", "Fuente"].map((h, i) => (
                  <span key={i} style={{ color: C.textSec, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8 }}>{h}</span>
                ))}
              </div>
              {g.rows.map(([d, p, f], ri) => (
                <div key={ri} style={{ display: "grid", gridTemplateColumns: "2.5fr 75px 1.5fr", padding: "9px 14px", borderBottom: ri < g.rows.length - 1 ? `1px solid ${C.border}` : "none", alignItems: "center" }}>
                  <span style={{ color: C.text, fontSize: 13 }}>{d}</span>
                  <Prio l={p} />
                  <span style={{ color: C.textSec, fontSize: 12 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </>;
    }

    if (s === "equipo") return <>
      <h2 style={{ fontSize: 24, fontWeight: 800, color: C.text, margin: "0 0 20px" }}>Roles y equipo</h2>
      <h3 style={{ color: C.primary, fontSize: 13, fontWeight: 700, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: 1 }}>Equipo Draxton</h3>
      {[
        { r: "ESG Lead", p: "Clotilde Tesón", d: "Dirección estratégica del proyecto ESG. Validación de entregables finales (EINF, dashboards para dirección). Interlocución con dirección y aprobación de decisiones clave.", c: "#6366F1" },
        { r: "Environmental Lead", p: "Raúl Antúnez", d: "Owner operativo del proyecto Dcycle. Punto de contacto principal con vuestro Sustainability Specialist. Supervisa la carga de datos ambientales, valida factores de emisión, coordina con plantas.", c: C.primary },
        { r: "Social Lead", p: "Laura", d: "Responsable de la recopilación y carga de datos sociales: RRHH, PRL, retribuciones, diversidad. Coordina con el departamento de RRHH de cada negocio.", c: C.warn },
        { r: "Data Operators", p: "~13 responsables de planta", d: "Cargan datos de su instalación (facturas, consumos, agua, residuos). Acceso limitado a su planta, tareas claras y acotadas.", c: C.ok },
        { r: "Department Operators", p: "Responsables de otros dptos.", d: "Personas de compras, logística, legal, PRL u otros departamentos que proporcionan datos específicos para el proyecto. Participan puntualmente según la fase y el tipo de dato que se necesite.", c: C.border },
      ].map((r, i) => (
        <div key={i} style={{ background: C.white, borderRadius: 10, border: `1px solid ${C.border}`, borderLeft: `3px solid ${r.c}`, padding: "16px 20px", marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4, marginBottom: 4 }}>
            <span style={{ color: C.text, fontWeight: 700, fontSize: 15 }}>{r.r}</span>
            <span style={{ color: r.c === C.border ? C.textSec : r.c, fontSize: 13, fontWeight: 600 }}>{r.p}</span>
          </div>
          <p style={{ color: C.textSec, fontSize: 13, lineHeight: 1.55, margin: 0 }}>{r.d}</p>
        </div>
      ))}
      <h3 style={{ color: C.primary, fontSize: 13, fontWeight: 700, margin: "24px 0 10px", textTransform: "uppercase", letterSpacing: 1 }}>Equipo Dcycle</h3>
      <div style={{ background: C.white, borderRadius: 10, border: `1px solid ${C.blue100}`, borderLeft: `3px solid ${C.primary}`, padding: "16px 20px", marginBottom: 10 }}>
        <span style={{ color: C.text, fontWeight: 700, fontSize: 15, display: "block", marginBottom: 4 }}>Sustainability Specialist (dedicado)</span>
        <p style={{ color: C.textSec, fontSize: 13, lineHeight: 1.55, margin: 0 }}>
          Vuestro punto de contacto único. Guía toda la puesta en marcha: configura la plataforma, forma al equipo,
          resuelve dudas de datos y metodología, valida los cálculos, configura dashboards y proyectos. Aborda primero
          el problema de datos (volumen, dispersión, calidad) y después aplica la metodología.
        </p>
      </div>
      <div style={{ background: C.white, borderRadius: 10, border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.border}`, padding: "16px 20px" }}>
        <span style={{ color: C.text, fontWeight: 700, fontSize: 15, display: "block", marginBottom: 4 }}>Soporte continuo</span>
        <p style={{ color: C.textSec, fontSize: 13, lineHeight: 1.55, margin: 0 }}>
          Chat de soporte in-app, Knowledge Base, Dcycle Academy con tutoriales, y email directo (clients@dcycle.io).
          Disponible siempre, no solo en las sesiones.
        </p>
      </div>
    </>;
  };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "'Inter', -apple-system, sans-serif", color: C.text }}>
      <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: "20px 28px 0", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ background: C.primary, borderRadius: 8, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: C.white, fontWeight: 900, fontSize: 15 }}>d</span>
            </div>
            <div>
              <span style={{ color: C.textSec, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.2, display: "block" }}>Plan de puesta en marcha</span>
              <span style={{ color: C.text, fontSize: 17, fontWeight: 800 }}>DRAXTON <span style={{ color: C.primary }}>×</span> Dcycle</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 0, overflowX: "auto" }}>
            {nav.map(n => (
              <button key={n.id} onClick={() => setS(n.id)} style={{
                background: "transparent", border: "none", borderBottom: `2.5px solid ${s === n.id ? C.primary : "transparent"}`,
                color: s === n.id ? C.primary : C.textSec, padding: "8px 14px", cursor: "pointer",
                fontSize: 13, fontWeight: s === n.id ? 700 : 500, whiteSpace: "nowrap", transition: "all 0.15s",
              }}>{n.l}</button>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px 28px 60px" }}>{content()}</div>
    </div>
  );
}