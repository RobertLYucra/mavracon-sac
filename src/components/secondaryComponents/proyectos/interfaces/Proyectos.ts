import imagen1 from "../images/naturaleza.jpg";

export interface Proyecto {
  nombre: string;
  categoria: string;
  cliente: string;
  ubicacion: ubicacion;
  tipo: string;
  estado: string;
  alcance: string;
  imagen: string;
  url: string;
  descripcion?: string[];
  galleryImage?: string[];
  galleryVideo?: string[];
  slug?: string; // Add slug for routing
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
    cliente: "Hudbay Minerals",
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
    descripcion: [
      "Proyecto minero de tajo abierto con operaciones de extracción de minerales",
      "Implementación de tecnología de punta para optimización de procesos",
      "Gestión ambiental y sostenibilidad en todas las fases del proyecto",
      "Cumplimiento estricto de normativas de seguridad y medio ambiente",
    ],
    galleryImage: [
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800",
      "https://images.unsplash.com/photo-1580982172477-25ac3300d9c2?w=800",
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800",
    ],
    galleryVideo: [
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    ],
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
    descripcion: [
      "Operación minera subterránea especializada en extracción de estaño",
      "Planta de procesamiento con capacidad de tratamiento optimizada",
      "Desarrollo sostenible con programas de responsabilidad social",
      "Infraestructura moderna adaptada a condiciones de altura",
    ],
    galleryImage: [
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800",
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800",
      "https://images.unsplash.com/photo-1624996379656-2d0d1f6ca8e9?w=800",
      "https://images.unsplash.com/photo-1582639590011-f5a8416d1101?w=800",
    ],
    galleryVideo: [
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    ],
  },

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
    alcance: "Complejo residencial de lujo con amenidades modernas",
    url: "#",
    descripcion: [
      "Torres residenciales con diseño arquitectónico contemporáneo",
      "Áreas comunes equipadas con gimnasio, piscina y zonas recreativas",
      "Departamentos con acabados de primera calidad",
      "Sistemas de seguridad y domótica integrada",
    ],
    galleryImage: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    ],
    galleryVideo: [],
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
    alcance: "Centro comercial multiusos con espacios de entretenimiento",
    url: "#",
    descripcion: [
      "Centro comercial de última generación con más de 200 locales",
      "Zona de restaurantes y patio de comidas amplio",
      "Cines multiplex y áreas de entretenimiento familiar",
      "Estacionamiento subterráneo con capacidad para 1000 vehículos",
    ],
    galleryImage: [
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800",
      "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=800",
      "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800",
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800",
    ],
    galleryVideo: [],
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
    alcance: "Puente de conexión vial estratégica en zona andina",
    url: "#",
    descripcion: [
      "Puente vehicular de gran envergadura conectando regiones",
      "Diseño antisísmico adaptado a condiciones geográficas",
      "Mejora significativa en tiempos de transporte regional",
      "Construcción con estándares internacionales de seguridad",
    ],
    galleryImage: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800",
      "https://images.unsplash.com/photo-1573331519317-30b24326bb9a?w=800",
    ],
    galleryVideo: [],
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
    alcance: "Torre corporativa con oficinas premium clase A",
    url: "#",
    descripcion: [
      "Edificio corporativo con certificación LEED",
      "Oficinas modulares con tecnología de automatización",
      "Áreas de coworking y salas de reuniones ejecutivas",
      "Lobby de doble altura con servicios premium",
    ],
    galleryImage: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
    ],
    galleryVideo: [
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    ],
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
    alcance: "Complejo industrial con naves modulares",
    url: "#",
    descripcion: [
      "Parque industrial con infraestructura logística integrada",
      "Naves industriales con diseño flexible y modular",
      "Servicios de energía y agua optimizados",
      "Áreas de carga y descarga con acceso directo a vías principales",
    ],
    galleryImage: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800",
      "https://images.unsplash.com/photo-1586864387634-836c6bb28fc3?w=800",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800",
    ],
    galleryVideo: [],
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
    alcance: "Hospital regional con especialidades médicas múltiples",
    url: "#",
    descripcion: [
      "Hospital con equipamiento médico de última generación",
      "Unidades de emergencia y cuidados intensivos modernos",
      "Salas de cirugía con tecnología robótica",
      "Áreas de hospitalización con confort para pacientes y familiares",
    ],
    galleryImage: [
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800",
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800",
    ],
    galleryVideo: [
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    ],
  },
];
