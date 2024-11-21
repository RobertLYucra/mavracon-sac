export interface Persona {
    datosPersonales: datosPersonales;
    profesion: string;
    puesto: string;
    linkedin: string;
    formacion: string[]
    experiencia: string[]
    foto: string;
}

interface datosPersonales {
    nombre: string
    apellidoPaterno: string;
    apellidoMaterno: string;
}

export const directorios: Persona[] = [
    {
        datosPersonales: {
            nombre: "Sosimo",
            apellidoPaterno: "Yucra",
            apellidoMaterno: "Rodas"
        },
        profesion: "Ingeniero Civil",
        puesto: "Gerente General",
        linkedin: "www.linkedin.com/robertlyucra",
        formacion: [],
        experiencia: [],
        foto: "https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg"
    },
    {
        datosPersonales: {
            nombre: "Romulo",
            apellidoPaterno: "Yucra",
            apellidoMaterno: "Rodas"
        },
        profesion: "Ingeniero Civil",
        puesto: "Gerente General",
        linkedin: "www.linkedin.com/robertlyucra",
        formacion: [],
        experiencia: [],
        foto: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"

    },
    {
        datosPersonales: {
            nombre: "Elias",
            apellidoPaterno: "Yucra",
            apellidoMaterno: "Rodas"
        },
        profesion: "Ingeniero Ambiental y Sanitaria",
        puesto: "Gerente General",
        linkedin: "www.linkedin.com/robertlyucra",
        formacion: [],
        experiencia: [],
        foto: "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"

    },
    {
        datosPersonales: {
            nombre: "William",
            apellidoPaterno: "Yucra",
            apellidoMaterno: "Rodas"
        },
        profesion: "Ingeniero Agroforestal",
        puesto: "Gerente General",
        linkedin: "www.linkedin.com/robertlyucra",
        formacion: [],
        experiencia: [],
        foto: "https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg"

    }
]


export const socios: Persona[] = [
    {
        datosPersonales: {
            nombre: "Sosimo",
            apellidoPaterno: "Yucra",
            apellidoMaterno: "Rodas"
        },
        profesion: "Ingeniero Civil",
        puesto: "Gerente General",
        linkedin: "www.linkedin.com/robertlyucra",
        formacion: [],
        experiencia: [],
        foto: "https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg"
    },
    {
        datosPersonales: {
            nombre: "Romulo",
            apellidoPaterno: "Yucra",
            apellidoMaterno: "Rodas"
        },
        profesion: "Ingeniero Civil",
        puesto: "Gerente General",
        linkedin: "www.linkedin.com/robertlyucra",
        formacion: [],
        experiencia: [],
        foto: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"

    },]