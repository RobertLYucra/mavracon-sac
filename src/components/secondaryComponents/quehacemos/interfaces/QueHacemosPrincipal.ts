import ingenieria from "../images/ingenieria.jpg";
import bienes from "../images/bienes.jpg";
import ejecucion from "../images/ejecucion.jpg";

export interface DetalleActividad {
  numero: string;
  titulo: string;
  descripcion?: string;
}

export interface Actividades {
  icono: string;
  actividad: string;
  imagen: string;
  imagenDetalle?: string; // Imagen para la vista detallada
  descripcion: string;
  redireccion: string;
  iconarrow?: string;
  detalles?: DetalleActividad[];
  section: string;
}

export const actividades: Actividades[] = [
  {
    icono: "build",
    actividad: "INGENIERÍA HÍBRIDA Y CONSULTORÍA",
    descripcion:
      "Desarrollamos ingeniería conceptual, básica y de detalle, integrando metodologías ágiles y herramientas digitales para optimizar tiempo, recursos y calidad en cada proyecto.",
    imagen: ingenieria,
    imagenDetalle: ingenieria,
    redireccion: "#",
    iconarrow: "arrow-forward",
    section: "ingenieria",
    detalles: [
      {
        numero: "01",
        titulo: "Ingeniería conceptual",
        descripcion:
          "Definimos el alcance, costos y viabilidad de los proyectos en etapas tempranas.",
      },
      {
        numero: "02",
        titulo: "Ingeniería de detalle",
        descripcion:
          "Creamos planos y especificaciones técnicas listas para ejecución en campo.",
      },
      {
        numero: "03",
        titulo: "Supervisión técnica",
        descripcion:
          "Brindamos soporte experto durante la ejecución del proyecto para asegurar cumplimiento de estándares.",
      },
      {
        numero: "03",
        titulo: "Supervisión técnica",
        descripcion:
          "Brindamos soporte experto durante la ejecución del proyecto para asegurar cumplimiento de estándares.",
      },
      {
        numero: "03",
        titulo: "Supervisión técnica",
        descripcion:
          "Brindamos soporte experto durante la ejecución del proyecto para asegurar cumplimiento de estándares.",
      },
    ],
  },
  {
    icono: "hammer",
    actividad: "EJECUCIÓN DE PROYECTOS",
    descripcion:
      "Ejecutamos obras mineras y civiles bajo altos estándares de seguridad, calidad y sostenibilidad, garantizando cumplimiento de plazos y presupuesto.",
    imagen: ejecucion,
    imagenDetalle: ejecucion,
    redireccion: "#",
    iconarrow: "arrow-forward",
    section: "ejecucion",
    detalles: [
      {
        numero: "01",
        titulo: "Movimiento de tierras",
        descripcion:
          "Realizamos excavaciones, rellenos y nivelaciones con maquinaria moderna.",
      },
      {
        numero: "02",
        titulo: "Construcción de infraestructura",
        descripcion:
          "Edificación de plantas, campamentos, vías y obras complementarias.",
      },
      {
        numero: "03",
        titulo: "Gestión ambiental y seguridad",
        descripcion:
          "Monitoreo constante del cumplimiento normativo y prevención de riesgos laborales.",
      },
    ],
  },
  {
    icono: "home",
    actividad: "BIENES RAÍCES",
    descripcion:
      "Promovemos proyectos inmobiliarios sostenibles, industriales y residenciales, aplicando prácticas innovadoras y respetuosas con el entorno.",
    imagen: bienes,
    imagenDetalle: bienes,
    redireccion: "#",
    iconarrow: "arrow-forward",
     section : "bienes-raices",
    detalles: [
      {
        numero: "01",
        titulo: "Desarrollo inmobiliario",
        descripcion:
          "Diseño y ejecución de proyectos habitacionales e industriales sostenibles.",
      },
      {
        numero: "02",
        titulo: "Gestión de activos",
        descripcion:
          "Administración eficiente de bienes inmuebles y propiedades corporativas.",
      },
      {
        numero: "03",
        titulo: "Consultoría en inversión",
        descripcion:
          "Asesoría estratégica para la adquisición y valorización de terrenos.",
      },
    ],
  },
];
