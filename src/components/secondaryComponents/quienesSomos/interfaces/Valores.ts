
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
        icon:"bulb",
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
        icon:"lock-closed",
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
        icon:"medal",
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
        icon:"trending-up",
        nombreValor:"CREAR VALOR",
        valores:[
            {
                valor :"Trabajamos para maximizar los beneficios tanto para nuestros clientes como para la comunidad."
            },
            
        ]
    }
]