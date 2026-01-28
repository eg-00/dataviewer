import {Bestandteil} from "@/models/Bestandteil";
export interface Zelt {
    name: string;
    components?: Bestandteil[];
    count?: number;
}

export interface ZeltCollection {
    Zelte: Zelt[];
}

// Example data
const data: ZeltCollection = {
    "Zelte": [
        {
            "name": "Kote",
            "components": [
                {
                    "name": "Kotenplane",
                    "count": 4
                },
                {
                    "name": "Kotenkreuz",
                    "count": 1
                },
                {
                    "name": "Heringe",
                    "count": 8
                },
                {
                    "name": "Abspannseile k",
                    "count": 8
                },
                {
                    "name": "Baum K",
                    "count": 1
                },
                {
                    "name": "Seitenstangen K ",
                    "count": 8
                }
            ],
            "count": 0
        },
        {
            "name":"Lang-Kote",
            "components": [
                {
                    "name":"Kotenplane",
                    "count":4
                },
                {
                    "name":"Langkotenkreuz",
                    "count":1
                },
                {
                    "name":"Heringe",
                    "count":10
                },
                {
                    "name":"Abspannseile k",
                    "count":10
                },
                {
                    "name":"Baum K",
                    "count":2
                },
                {
                    "name":"Theaterplane",
                    "count":2
                },
                {
                    "name":"Dachabdeckung langko",
                    "count":1
                },
                {
                    "name":"Seitenstreifen langko",
                    "count":2
                },
                {
                    "name": "Seitenstangen K",
                    "count": 10
                }
            ],
            "count": 0
        },
        {
            "name":"Jurte",
            "components": [
                {
                    "name":"Jurtendach",
                    "count":1
                },
                {
                    "name":"Jurtenkreuz",
                    "count":1
                },
                {
                    "name":"Heringe",
                    "count":12
                },
                {
                    "name":"Abspannseile J",
                    "count":12
                },
                {
                    "name":"Baum J",
                    "count":1
                },
                {
                    "name": "Seitenstangen J",
                    "count": 12
                },
                {
                    "name": "Vierecksplane",
                    "count": 12
                }
            ],
            "count": 0
        },
        {
            "name":"Theater-Jurte",
            "components": [
                {
                    "name":"Jurtenhalbdach",
                    "count":2
                },
                {
                    "name":"Theater-Jurtenkreuz",
                    "count":1
                },
                {
                    "name":"Heringe",
                    "count":14
                },
                {
                    "name":"Abspannseile J",
                    "count":14
                },
                {
                    "name":"Baum J",
                    "count":2
                },
                {
                    "name": "Seitenstangen J",
                    "count": 14
                },
                {
                    "name": "Vierecksplane",
                    "count": 14
                }
            ],
            "count": 0
        },
        {
            "name":"Hoch-Kote",
            "components": [
                {
                    "name":"Kotenplane",
                    "count":4
                },
                {
                    "name":"Kotenkreuz",
                    "count":1
                },
                {
                    "name":"Heringe",
                    "count":8
                },
                {
                    "name":"Abspannseile J",
                    "count":8
                },
                {
                    "name":"Baum HK",
                    "count":1
                },
                {
                    "name": "Seitenstangen J",
                    "count": 8
                },
                {
                    "name": "Vierecksplane",
                    "count": 8
                }
            ],
            "count": 0
        },
        {
            "name":"Aula-Jurte",
            "components": [
                {
                    "name":"Auladach",
                    "count":2
                },
                {
                    "name":"Heringe",
                    "count":12
                },
                {
                    "name":"Abspannseile J",
                    "count":12
                },
                {
                    "name":"Baum AJ",
                    "count":2
                },
                {
                    "name":"Baumverbinder AJ",
                    "count":1
                },
                {
                    "name": "Seitenstangen J",
                    "count": 12
                },
                {
                    "name": "Vierecksplane",
                    "count": 12
                }
            ],
            "count": 0
        }
    ]
};

// Function to get all Zelte names as a list
export function getZelteNames(zelteData: ZeltCollection = data): string[] {
    return zelteData.Zelte.map(zelt => zelt.name);
}

export function getZelteWithComponents(zelteData: ZeltCollection = data): ZeltCollection {
    return zelteData;
}

export function getZelteWithoutComponents(zelteData: ZeltCollection = data): ZeltCollection {
        return {
            Zelte: zelteData.Zelte.map(zelt => ({
                name: zelt.name,
                count:0
            }))
        };
}

// Function to collect all components and sum counts for duplicates
export function getAllComponents(zelteData: ZeltCollection): Bestandteil[] {

    const componentMap = new Map<string, number>();

    // Iterate over all Zelte and their components
    zelteData.Zelte?.forEach(zelt => {
        data.Zelte.forEach((zeltComponent) => {
            if(zeltComponent.name===zelt.name) {
                zeltComponent.components?.forEach(component => {
                    const currentCount = componentMap.get(component.name) || 0;
                    componentMap.set(component.name,currentCount + ((zelt?.count ?? 0) * (component?.count ?? 0)));

        });}
        });
    });

    return Array.from(componentMap.entries())
        .filter(([, count]) => count > 0)
        .map(([name, count]) => ({
            name,
            count,
        }));
}