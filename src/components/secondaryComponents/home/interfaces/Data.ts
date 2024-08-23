export interface Actividad {
    id: number;
    icono: string;
    actividad: string;
    descripcion: string;
    mas: string;
    iconarrow: string;
}


export const actividades: Actividad[] = [
    {
        id: 1, 
        icono: "finger-print",
         actividad: "MINERÍA A TAJO ABIERTO",
        descripcion: "Innovación y sostenibilidad en la superficie.", 
        mas: "VER MÁS", 
        iconarrow: "arrow-forward"
    },
    {
        id: 1, 
        icono: "airplane",
         actividad: "INGENIERÍA SUBTERRÁNERA",
        descripcion: "Extraer resultados y eficiencia.", 
        mas: "VER MÁS", 
        iconarrow: "arrow-forward"
    },
    {
        id: 1, 
        icono: "barbell",
         actividad: "SERVICIOS DE CONSTRUCCIÓN ",
        descripcion: "Construimos minas en condiciones complejas.", 
        mas: "VER MÁS", 
        iconarrow: "arrow-forward"
    },
];