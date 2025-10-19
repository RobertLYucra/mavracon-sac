
export interface Proyectos {
    titulo:string;
    nombreProyecto: string;
    imagen: string;
    ubicacion: string;
    tipo: string;
    estado: string;
    alcance: string;
}

export const proyectos: Proyectos[] = [
    {
       
        titulo: "Colegio Mariscal",
        nombreProyecto: "Construcción y Levantamiento",
        imagen: "https://www.expocihachub.com/img/blog/tecnologia---nota-tecnologia-que-aumenta-la-seguridad-en-construcciones.jpg", 
        ubicacion: "Pichari, Cusco", 
        tipo: "Construcción",
        estado :"Terminado",
        alcance:""
    },
    {
        titulo: "Discoteca Oficina",
        nombreProyecto: "Remodelación",
        imagen: "https://www.cube-construction.eu/wp-content/uploads/2017/05/cube-construction.jpg", 
        ubicacion: "Ayacucho, Ayacucho", 
        tipo: "Construcción",
        estado :"Terminado",
        alcance:""
    },
    {
        titulo: "Aeropuerto Jorge Chavez",
        nombreProyecto: "Construcción y Levantamiento",
        imagen: "https://www.cube-construction.eu/wp-content/uploads/2017/05/cube-construction.jpg", 
        ubicacion: "Callao, Lima", 
        tipo: "Construcción",
        estado :"En Curso",
        alcance:""
    },
    {
        titulo: "Mineria El Alto",
        nombreProyecto: "Construcción y Levantamiento",
        imagen: "https://pyhca.com/wp-content/uploads/2021/07/construccion-sostenible.jpg", 
        ubicacion: "Kimbiri, Cusco", 
        tipo: "Minería",
        estado :"En Curso",
        alcance:""
    },
];