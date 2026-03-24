// ─── DATA ─────────────────────────────────────────────────────
// All content data lives here as pure functions.
// To add a product: push a new object to the array below.
// To add a why-item: push to WHY_ITEMS_DATA and add translations.
// ─────────────────────────────────────────────────────────────

export const getProducts = (lang) => [
  {
    id:          "pos",
    title:       lang === "es" ? "Sistema de Facturación & POS" : "Billing & POS System",
    badge:       lang === "es" ? "Producto Principal" : "Core Product",
    badgeColor:  "#3b82f6",
    description: lang === "es"
      ? "Gestiona ventas, genera facturas y centraliza las operaciones de tu negocio en una sola plataforma."
      : "Manage sales, generate invoices, and streamline business operations in one unified platform.",
    problem: lang === "es"
      ? "Los flujos de facturación fragmentados ralentizan los negocios y generan pérdidas de ingresos."
      : "Fragmented billing workflows slow down businesses and cause revenue leakage.",
    tags:     ["POS", "Invoicing", "Operations"],
    icon:     "▦",
    featured: true,
  },
  {
    id:          "discord",
    title:       lang === "es" ? "Asistente Académico para Discord" : "Academic Discord Assistant",
    badge:       "AI",
    badgeColor:  "#8b5cf6",
    description: lang === "es"
      ? "Bot impulsado por IA para soporte académico, respuestas automáticas y gestión de servidores."
      : "AI-powered bot for academic support, instant answers, and server automation.",
    problem: lang === "es"
      ? "Los estudiantes pierden horas buscando ayuda que podría resolverse en segundos."
      : "Students lose hours searching for help that could be answered instantly.",
    tags:     ["AI", "Automation", "Education"],
    icon:     "◈",
    featured: false,
  },
  {
    id:          "syncnode",
    title:       "SyncNode",
    badge:       lang === "es" ? "Herramienta" : "Tool",
    badgeColor:  "#10b981",
    description: lang === "es"
      ? "Organizador de playlists para Spotify que pone orden en tu biblioteca musical."
      : "A clean playlist organizer for Spotify that brings order to your music library.",
    problem: lang === "es"
      ? "Las bibliotecas musicales crecen caóticas sin una forma simple de curar y sincronizar playlists."
      : "Music libraries grow chaotic with no simple way to curate and sync playlists.",
    tags:     ["Spotify", "Music", "Organizer"],
    icon:     "⟁",
    featured: false,
  },
  {
    id:          "finance",
    title:       lang === "es" ? "Gestor Financiero" : "Finance Manager",
    badge:       "App",
    badgeColor:  "#f59e0b",
    description: lang === "es"
      ? "Rastrea ingresos y gastos con claridad. Visualiza tus hábitos y toma control de tus finanzas."
      : "Track income and expenses with clarity. Visualize spending habits and take control of your finances.",
    problem: lang === "es"
      ? "La mayoría de las personas no sabe en tiempo real a dónde va su dinero."
      : "Most people have no real-time visibility into where their money actually goes.",
    tags:     ["Finance", "Tracking", "Analytics"],
    icon:     "◬",
    featured: false,
  },
];

export const getWhyItems = (lang) => [
  {
    icon:  "⬡",
    title: lang === "es" ? "Soluciones Prácticas"     : "Practical Solutions",
    desc:  lang === "es"
      ? "Cada producto existe porque resuelve un problema tangible, no porque se vea bien en un roadmap."
      : "Every product ships because it solves a real, tangible problem — not because it looked good on a roadmap.",
  },
  {
    icon:  "◎",
    title: lang === "es" ? "Enfoque en el Mundo Real" : "Real-World Focus",
    desc:  lang === "es"
      ? "Construido con usuarios reales desde el día uno. Ciclos de feedback sobre suposiciones."
      : "Built with users in mind from day one. Feedback loops over assumptions.",
  },
  {
    icon:  "↻",
    title: lang === "es" ? "Mejora Continua"          : "Continuous Improvement",
    desc:  lang === "es"
      ? "El software nunca está terminado. Cada versión es una iteración más precisa que la anterior."
      : "Software is never done. Each version is a sharper iteration of the last.",
  },
  {
    icon:  "▣",
    title: lang === "es" ? "Diseño Simple y Efectivo" : "Simple & Effective Design",
    desc:  lang === "es"
      ? "La complejidad es el enemigo. Las interfaces deben hacer más con menos."
      : "Complexity is the enemy. Interfaces should do more with less.",
  },
];

export const CONTACT_LINKS = [
  {
    icon:  "◈",
    label: "LinkedIn",
    value: "linkedin.com/company/klyro-software",
    href:  "https://linkedin.com/company/klyro-software",
    color: "#0a66c2",
  },
  {
    icon:  "✉",
    label: "Email",
    value: "klyro.software@proton.me",
    href:  "mailto:klyro.software@proton.me",
    color: "#3b82f6",
  },
];

export const WHATSAPP = {
  number:  "593962762586",
  message: "Hola, me gustaría hablar con un asesor de Klyro.",
  get url() {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
  },
};
