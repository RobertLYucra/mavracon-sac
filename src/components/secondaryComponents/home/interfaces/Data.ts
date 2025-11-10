export interface Actividad {
    id: number;
    icono: string;
    actividad: string;
    descripcion: string;
    mas: string;
    iconarrow: string;
    section: string
}


export const actividades: Actividad[] = [
    {
        id: 1, 
        icono: "finger-print",
         actividad: "INGENIERÍA HÍBRIDA Y CONSULTORÍA",
        descripcion: "Innovación y planificación estratégica.", 
        mas: "VER MÁS", 
        iconarrow: "arrow-forward",
        section: "ingenieria"
    },
    {
        id: 1, 
        icono: "airplane",
         actividad: "EJECUCIÓN DE PROYECTOS",
        descripcion: "Planificación, gestión y ejecución de proyectos.", 
        mas: "VER MÁS", 
        iconarrow: "arrow-forward",
        section: "ejecucion"
    },
    {
        id: 1, 
        icono: "barbell",
         actividad: "BIENES RAÍCES",
        descripcion: "Compra, venta y gestión de propiedades.", 
        mas: "VER MÁS", 
        iconarrow: "arrow-forward",
        section: "bienes-raices"
    },
];