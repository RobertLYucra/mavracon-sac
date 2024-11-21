
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
        nombreValor:"SEGURIDAD",
        valores:[
            {
                valor :"La seguridad de las personas son lo primero."
            },
            {
                valor :"Realizamos nuestro trabajo cumpliendo los estándares de seguridad."
            },
            {
                valor :"Levantamos la mano al detectar condiciones o actos que ponen en riesgo nuestra vida o la de nuestros compañeros."
            }
        ]
    },
    {
        icon:"people",
        nombreValor:"INTEGRIDAD",
        valores:[
            {
                valor :"La seguridad de las personas son lo primero."
            },
            {
                valor :"Realizamos nuestro trabajo cumpliendo los estándares de seguridad."
            },
            {
                valor :"Levantamos la mano al detectar condiciones o actos que ponen en riesgo nuestra vida o la de nuestros compañeros."
            }
        ]
    },
    {
        icon:"people",
        nombreValor:"PASIÓN",
        valores:[
            {
                valor :"La seguridad de las personas son lo primero."
            },
            {
                valor :"Realizamos nuestro trabajo cumpliendo los estándares de seguridad."
            },
            {
                valor :"Levantamos la mano al detectar condiciones o actos que ponen en riesgo nuestra vida o la de nuestros compañeros."
            }
        ]
    },
    {
        icon:"people",
        nombreValor:"CREAR VALOR",
        valores:[
            {
                valor :"La seguridad de las personas son lo primero."
            },
            {
                valor :"Realizamos nuestro trabajo cumpliendo los estándares de seguridad."
            },
            {
                valor :"Levantamos la mano al detectar condiciones o actos que ponen en riesgo nuestra vida o la de nuestros compañeros."
            }
        ]
    }
]