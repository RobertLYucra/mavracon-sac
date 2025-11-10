import imagen1 from "../images/naturaleza.jpg";

export interface Proyecto {
  nombre: string;
  categoria: string;
  cliente: string; // <<< agregado
  ubicacion: ubicacion;
  tipo: string;
  estado: string;
  alcance: string;
  imagen: string;
  url: string;
  descripcion?: string[];
  galeria?: string[];
}

interface ubicacion {
  pais: string;
  departamento: string;
  pronvincia: string;
  distrito: string;
}

export const proyectos: Proyecto[] = [
  {
    nombre: "Hudbay Minerals",
    categoria: "Constancio",
    cliente: "Hudbay Minerals",   // << agregado
    ubicacion: {
      pais: "Peru",
      departamento: "Lima",
      pronvincia: "Lima",
      distrito: "San Borja",
    },
    tipo: "Servicios de construcción",
    estado: "En curso",
    imagen:
      "https://dsinmobiliario.com.pe/wp-content/uploads/2024/02/dsi-blog-proyectos-de-construccion.jpg",
    alcance: "Construcción + Operación a Tajo abierto",
    url: "#",
  },

  {
    nombre: "Mineria San Carlos",
    categoria: "Constancio",
    cliente: "Mineria San Carlos",
    ubicacion: {
      pais: "Peru",
      departamento: "Lima",
      pronvincia: "Lima",
      distrito: "San Borja",
    },
    tipo: "Servicios de construcción",
    estado: "En curso",
    imagen: imagen1,
    alcance: "Construcción + Operación a Tajo abierto",
    url: "#",
  },
  {
    nombre: "Southern Copper",
    categoria: "Tía María",
    cliente: "Southern Copper",
    ubicacion: {
      pais: "Peru",
      departamento: "Arequipa",
      pronvincia: "Islay",
      distrito: "Cocachacra",
    },
    tipo: "Extracción minera",
    estado: "Planificado",
    imagen: imagen1,
    alcance: "Extracción de cobre a cielo abierto",
    url: "#",
  },
  {
    nombre: "Antamina",
    categoria: "Antamina Expansion",
    cliente: "Antamina",
    ubicacion: {
      pais: "Peru",
      departamento: "Ancash",
      pronvincia: "Huari",
      distrito: "San Marcos",
    },
    tipo: "Expansión minera",
    estado: "En ejecución",
    imagen: imagen1,
    alcance: "Expansión de mina para incremento de producción",
    url: "#",
  },
  {
    nombre: "Glencore",
    categoria: "Antapaccay",
    cliente: "Glencore",
    ubicacion: {
      pais: "Peru",
      departamento: "Cusco",
      pronvincia: "Espinar",
      distrito: "Espinar",
    },
    tipo: "Servicios de construcción",
    estado: "En curso",
    imagen: imagen1,
    alcance: "Construcción de infraestructura para minería subterránea",
    url: "#",
  },
  {
    nombre: "Shougang Hierro Perú",
    categoria: "Ampliación Marcona",
    cliente: "Shougang Hierro Perú",
    ubicacion: {
      pais: "Peru",
      departamento: "Ica",
      pronvincia: "Nazca",
      distrito: "Marcona",
    },
    tipo: "Minería de hierro",
    estado: "En curso",
    imagen: imagen1,
    alcance: "Ampliación de infraestructura para extracción de hierro",
    url: "#",
  },
  {
    nombre: "Buenaventura",
    categoria: "Yanacocha Sulfuros",
    cliente: "Buenaventura",
    ubicacion: {
      pais: "Peru",
      departamento: "Cajamarca",
      pronvincia: "Cajamarca",
      distrito: "Los Baños del Inca",
    },
    tipo: "Minería de oro",
    estado: "En estudios",
    imagen: imagen1,
    alcance: "Extracción y procesamiento de minerales sulfuros",
    url: "#",
  },
  {
    nombre: "MMG",
    categoria: "Las Bambas",
    cliente: "MMG",
    ubicacion: {
      pais: "Peru",
      departamento: "Apurímac",
      pronvincia: "Cotabambas",
      distrito: "Challhuahuacho",
    },
    tipo: "Extracción minera",
    estado: "Operativo",
    imagen: imagen1,
    alcance: "Extracción de cobre a tajo abierto",
    url: "#",
  },
  {
    nombre: "Minsur",
    categoria: "Pucamarca",
    cliente: "Minsur",
    ubicacion: {
      pais: "Peru",
      departamento: "Tacna",
      pronvincia: "Tacna",
      distrito: "Pachía",
    },
    tipo: "Minería de estaño",
    estado: "En curso",
    imagen: imagen1,
    alcance: "Minería subterránea con procesamiento de estaño",
    url: "#",
  },

  // ******** los que eran carousel ********

  {
    nombre: "Torres del Sol",
    categoria: "Edificio Residencial",
    cliente: "Torres del Sol",
    ubicacion: {
      pais: "Peru",
      departamento: "Lima",
      pronvincia: "",
      distrito: "",
    },
    tipo: "Residencial",
    estado: "En construcción",
    imagen: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    alcance: "",
    url: "#",
  },
  {
    nombre: "Plaza Central",
    categoria: "Complejo Comercial",
    cliente: "Plaza Central",
    ubicacion: {
      pais: "Peru",
      departamento: "Arequipa",
      pronvincia: "",
      distrito: "",
    },
    tipo: "Comercial",
    estado: "Finalizado",
    imagen:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    alcance: "",
    url: "#",
  },
  {
    nombre: "Vía Andina",
    categoria: "Puente Vehicular",
    cliente: "Vía Andina",
    ubicacion: {
      pais: "Peru",
      departamento: "Cusco",
      pronvincia: "",
      distrito: "",
    },
    tipo: "Infraestructura",
    estado: "En planificación",
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    alcance: "",
    url: "#",
  },
  {
    nombre: "Business Hub",
    categoria: "Centro Corporativo",
    cliente: "Business Hub",
    ubicacion: {
      pais: "Peru",
      departamento: "Lima",
      pronvincia: "",
      distrito: "",
    },
    tipo: "Corporativo",
    estado: "En construcción",
    imagen:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    alcance: "",
    url: "#",
  },
  {
    nombre: "Zona Industrial Norte",
    categoria: "Parque Industrial",
    cliente: "Zona Industrial Norte",
    ubicacion: {
      pais: "Peru",
      departamento: "La Libertad",
      pronvincia: "",
      distrito: "",
    },
    tipo: "Industrial",
    estado: "Finalizado",
    imagen:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
    alcance: "",
    url: "#",
  },
  {
    nombre: "Centro Médico",
    categoria: "Hospital Regional",
    cliente: "Centro Médico",
    ubicacion: {
      pais: "Peru",
      departamento: "Piura",
      pronvincia: "",
      distrito: "",
    },
    tipo: "Salud",
    estado: "En construcción",
    imagen:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    alcance: "",
    url: "#",
  },
];
