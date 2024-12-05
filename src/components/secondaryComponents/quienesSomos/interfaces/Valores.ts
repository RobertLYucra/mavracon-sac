
export interface Valor{
    icon : string;
    nombreValor:string;
    valores: numeracionValor[]
}

interface numeracionValor{
    valor:string;
}


export const valores: Valor[]=[
    {
        icon:"people",
        nombreValor:"INNOVACION",
        valores:[
            {
                valor :"Impulsamos soluciones creativas que transforman el futuro."
            },
            {
                valor :"Adoptamos nuevas tecnologías para mejorar cada proceso."
            },
            {
                valor :"Fomentamos una cultura de innovación continua para optimizar resultados."
            }
        ]
    },
    {
        icon:"people",
        nombreValor:"CONFIABILIDAD",
        valores:[
            {
                valor :"Cumplimos con nuestros compromisos para generar confianza."
            },
            {
                valor :"Nuestra gestión está basada en la transparencia y la honestidad."
            },
            {
                valor :"Trabajamos de manera consistente, garantizando resultados a largo plazo."
            }
        ]
    },
    {
        icon:"people",
        nombreValor:"CALIDAD",
        valores:[
            {
                valor :"Aseguramos resultados de excelencia en cada proyecto."
            },
            {
                valor :"Cumplimos con los estándares más altos de calidad en todas las etapas."
            },
            {
                valor :"Nos comprometemos a mejorar constantemente para ofrecer lo mejor a nuestros clientes."
            }
        ]
    },
    {
        icon:"people",
        nombreValor:"CREAR VALOR",
        valores:[
            {
                valor :"Trabajamos para maximizar los beneficios tanto para nuestros clientes como para la comunidad."
            },
            
        ]
    }
]