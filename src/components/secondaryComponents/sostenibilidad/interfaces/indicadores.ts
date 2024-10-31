
export interface Indicador {
    id: number;
    titulo: string;
    descripcion: string;
}


export interface Caracteristicas {
    id: number;
    desc: string;
}

export interface Indicadores {
    icon: string;
    titulo: string;
    descripcion: string;
    caracts: Caracteristicas[];
}


export const indicador: Indicadores[] = [
    {
        icon: "leaf",
        titulo: "GESTIÓN AMBIENTAL",
        descripcion: "Cuidamos nuestros recursos y conservamos el planeta.",
        caracts: [
            {
                id: 1,
                desc: "Implementamos controles que nos ayudan a disminuir nuestra huella de carbono constantemente."
            },
            {
                id: 2,
                desc: "Hemos logrado un gran avance en la segregación y clasificación de residuos, por lo cual más del 90% de residuos que generamos son reaprovechables."
            },
            {
                id: 3,
                desc: "Mejoramos el rendimiento de los equipos en busca de reducir las emisiones de gases de efecto invernadero."
            },
            {
                id: 4,
                desc: "Valorizamos los residuos sólidos antes de su disposición ﬁnal para poder reciclarlos y reusarlos."
            },
            {
                id: 5,
                desc: "Contamos con especialistas que hacen un seguimiento a los aspectos, riesgos ambientales y a los indicadores de buen desempeño ambiental."
            },


        ]
    },
    {
        "icon": "hand-right",
        "titulo": "GESTIÓN SOCIAL",
        "descripcion": "Cuidamos a las personas y contribuimos a la sociedad.",
        "caracts": [
            {
                "id": 1,
                "desc": "Tenemos un acercamiento continuo y transparente con las comunidades que forman parte de nuestras áreas de influencia."
            },
            {
                "id": 2,
                "desc": "Nuestra estrategia social radica en monitorear las expectativas de las comunidades y remediar cualquier impacto social."
            },
            {
                "id": 3,
                "desc": "Nuestra estrategia de Gestión de Personas se basa en garantizar la protección de los derechos, el respeto por la diversidad y la dignidad, y contribuir con el desarrollo profesional y humano de nuestros colaboradores."
            },
            {
                "id": 4,
                "desc": "Respetamos y garantizamos el normal desarrollo del estilo de vida de las comunidades."
            },
            {
                "id": 5,
                "desc": "Capacitamos y preparamos a las comunidades para maximizar la contratación de mano de obra local, así como de proveedores de equipos y servicios locales."
            }
        ]
    },
    {
        "icon": "documents",
        "titulo": "GESTIÓN DE GOBERNANZA",
        "descripcion": "Cuidamos nuestras acciones y crecemos responsablemente.",
        "caracts": [
            {
                "id": 1,
                "desc": "Actuamos bajo estrictas políticas, estándares y lineamientos en materia de ética y cumplimiento, sobre los que realizamos concientización continua."
            },
            {
                "id": 2,
                "desc": "Trabajamos con integridad bajo nuestros valores corporativos y nuestra guía principal de conducta es nuestro Código de Ética."
            },
            {
                "id": 3,
                "desc": "Nuestro accionar nos permite cumplir con el sistema anti-soborno y con las normas de prevención del lavado de activos y financiamiento del terrorismo."
            }
        ]
    }
]




export const indicadores: Indicador[] = [
    {
        id: 1,
        titulo: "INCREMENTAR PRODUCTIVIDAD, AGILIZAR PROCESOS",
        descripcion: "Habilitamos nuevas tecnologías que permiten aumentar la productividad de nuestros colaboradores.",

    },
    {
        id: 2,
        titulo: "DESARROLLAR HABILIDADES COLABORATIVAS Y ANALÍTICAS",
        descripcion: "Habilitamos nuevas tecnologías que permiten aumentar la productividad de nuestros colaboradores.",
    },
    {
        id: 3,
        titulo: "ENTREGAR UN MEJOR SERVICIO",
        descripcion: "Habilitamos nuevas tecnologías que permiten aumentar la productividad de nuestros colaboradores.",
    },
    {
        id: 4,
        titulo: "GENERAR MAYOR RENTABILIDAD",
        descripcion: "Habilitamos nuevas tecnologías que permiten aumentar la productividad de nuestros colaboradores.",
    },
];