import imagen1 from "../images/naturaleza.jpg";

export interface Proyecto {
  nombre: string;
  categoria: string;
  ubicacion: ubicacion;
  tipo: string;
  estado: string;
  alcance: string;
  imagen: string;
  url: string;
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
];

export const proyectosCarousel: ProyectoCarousel[] = [
  {
    titulo: "Edificio Residencial",
    nombreProyecto: "Torres del Sol",
    imagen: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    ubicacion: "Lima, Perú",
    tipo: "Residencial",
    estado: "En construcción",
  },
  {
    titulo: "Complejo Comercial",
    nombreProyecto: "Plaza Central",
    imagen:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    ubicacion: "Arequipa, Perú",
    tipo: "Comercial",
    estado: "Finalizado",
  },
  {
    titulo: "Puente Vehicular",
    nombreProyecto: "Vía Andina",
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    ubicacion: "Cusco, Perú",
    tipo: "Infraestructura",
    estado: "En planificación",
  },
  {
    titulo: "Centro Corporativo",
    nombreProyecto: "Business Hub",
    imagen:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    ubicacion: "Lima, Perú",
    tipo: "Corporativo",
    estado: "En construcción",
  },
  {
    titulo: "Parque Industrial",
    nombreProyecto: "Zona Industrial Norte",
    imagen:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
    ubicacion: "Trujillo, Perú",
    tipo: "Industrial",
    estado: "Finalizado",
  },
  {
    titulo: "Hospital Regional",
    nombreProyecto: "Centro Médico",
    imagen:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    ubicacion: "Piura, Perú",
    tipo: "Salud",
    estado: "En construcción",
  },
];

export interface ProyectoCarousel {
  titulo: string;
  nombreProyecto: string;
  imagen: string;
  ubicacion: string;
  tipo: string;
  estado: string;
}
