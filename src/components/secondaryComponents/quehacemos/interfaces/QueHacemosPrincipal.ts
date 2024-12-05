import ingenieria from "../images/ingenieria.jpg"
import bienes from "../images/bienes.jpg"
import ejecucion from "../images/ejecucion.jpg"

export interface Actividad {
    icono: string;
    actividad: string;
    imagen:string;
    descripcion: string;
    redireccion: string;
}


export const actividades: Actividad[] = [
    {
        icono: "construct",
         actividad: "INGENIERÍA HÍBRIDA Y CONSULTORÍA",
        descripcion: "Somos especialistas en la implementación de nuevas tecnologías y modelos comerciales flexibles en operaciones mineras a tajo abierto.", 
        imagen: ingenieria, 
        redireccion: "#"
    },
    {
        icono: "accessibility",
         actividad: "EJECUCIÓN DE PROYECTOS",
        descripcion: "Somos especialistas en la implementación de nuevas tecnologías y modelos comerciales flexibles en operaciones mineras a tajo abierto.", 
        imagen: ejecucion, 
        redireccion: "#"
    },
    {
        icono: "home",
         actividad: "BIENES RAÍCES",
        descripcion: "Somos especialistas en la implementación de nuevas tecnologías y modelos comerciales flexibles en operaciones mineras a tajo abierto.", 
        imagen: bienes, 
        redireccion: "#"
    },
];