import imagen1 from "../images/naturaleza.jpg"

export interface Proyecto{
    nombre : string;
    categoria: string;
    ubicacion: ubicacion;
    tipo: string;
    estado: string;
    alcance:string;
    imagen:string;
    url: string;
}

interface ubicacion{
    pais: string;
    departamento: string;
    pronvincia: string;
    distrito:string;
}


export const proyectos: Proyecto[] = [

    {
        nombre : "Hudbay Minerals",
        categoria : "Constancio",
        ubicacion : {
            pais : "Peru",
            departamento : "Lima",
            pronvincia : "Lima",
            distrito:"San Borja"
        },
        tipo : "Servicios de construcción",
        estado :"En curso",
        imagen : imagen1,
        alcance : "Construcción + Operación a Tajo abierto",
        url: "#"
    },

    {
        nombre: "Hudbay Minerals",
        categoria: "Constancio",
        ubicacion: {
            pais: "Peru",
            departamento: "Lima",
            pronvincia: "Lima",
            distrito: "San Borja"
        },
        tipo: "Servicios de construcción",
        estado: "En curso",
        imagen: imagen1,
        alcance: "Construcción + Operación a Tajo abierto",
        url: "#"
    },
    {
        nombre: "Southern Copper",
        categoria: "Tía María",
        ubicacion: {
            pais: "Peru",
            departamento: "Arequipa",
            pronvincia: "Islay",
            distrito: "Cocachacra"
        },
        tipo: "Extracción minera",
        estado: "Planificado",
        imagen: imagen1,
        alcance: "Extracción de cobre a cielo abierto",
        url: "#"
    },
    {
        nombre: "Antamina",
        categoria: "Antamina Expansion",
        ubicacion: {
            pais: "Peru",
            departamento: "Ancash",
            pronvincia: "Huari",
            distrito: "San Marcos"
        },
        tipo: "Expansión minera",
        estado: "En ejecución",
        imagen: imagen1,
        alcance: "Expansión de mina para incremento de producción",
        url: "#"
    },
    {
        nombre: "Glencore",
        categoria: "Antapaccay",
        ubicacion: {
            pais: "Peru",
            departamento: "Cusco",
            pronvincia: "Espinar",
            distrito: "Espinar"
        },
        tipo: "Servicios de construcción",
        estado: "En curso",
        imagen: imagen1,
        alcance: "Construcción de infraestructura para minería subterránea",
        url: "#"
    },
    {
        nombre: "Shougang Hierro Perú",
        categoria: "Ampliación Marcona",
        ubicacion: {
            pais: "Peru",
            departamento: "Ica",
            pronvincia: "Nazca",
            distrito: "Marcona"
        },
        tipo: "Minería de hierro",
        estado: "En curso",
        imagen: imagen1,
        alcance: "Ampliación de infraestructura para extracción de hierro",
        url: "#"
    },
    {
        nombre: "Buenaventura",
        categoria: "Yanacocha Sulfuros",
        ubicacion: {
            pais: "Peru",
            departamento: "Cajamarca",
            pronvincia: "Cajamarca",
            distrito: "Los Baños del Inca"
        },
        tipo: "Minería de oro",
        estado: "En estudios",
        imagen: imagen1,
        alcance: "Extracción y procesamiento de minerales sulfuros",
        url: "#"
    },
    {
        nombre: "MMG",
        categoria: "Las Bambas",
        ubicacion: {
            pais: "Peru",
            departamento: "Apurímac",
            pronvincia: "Cotabambas",
            distrito: "Challhuahuacho"
        },
        tipo: "Extracción minera",
        estado: "Operativo",
        imagen: imagen1,
        alcance: "Extracción de cobre a tajo abierto",
        url: "#"
    },
    {
        nombre: "Minsur",
        categoria: "Pucamarca",
        ubicacion: {
            pais: "Peru",
            departamento: "Tacna",
            pronvincia: "Tacna",
            distrito: "Pachía"
        },
        tipo: "Minería de estaño",
        estado: "En curso",
        imagen: imagen1,
        alcance: "Minería subterránea con procesamiento de estaño",
        url: "#"
    },
    {
        nombre: "Hudbay Minerals",
        categoria: "Pampacancha",
        ubicacion: {
            pais: "Peru",
            departamento: "Cusco",
            pronvincia: "Chumbivilcas",
            distrito: "Velille"
        },
        tipo: "Minería de cobre",
        estado: "Planificado",
        imagen: imagen1,
        alcance: "Explotación de tajo abierto",
        url: "#"
    },
    {
        nombre: "Gold Fields",
        categoria: "Cerro Corona",
        ubicacion: {
            pais: "Peru",
            departamento: "Ayacucho",
            pronvincia: "Hualgayoc",
            distrito: "Hualgayoc"
        },
        tipo: "Minería de oro y cobre",
        estado: "Operativo",
        imagen: imagen1,
        alcance: "Extracción de minerales en mina de oro y cobre",
        url: "#"
    }
]