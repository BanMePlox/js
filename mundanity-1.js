var iFileName = "Monk of mundanity.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used

AddSubClass("monk", "mundanity", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

    { // don't forget this opening bracket

        regExpSearch: /mundanity/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

        subname: "Way of Mundanity", 

        source: ["HB", 0], 

        // after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
        // For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

        fullname: "Mundanity Monk", 
       

        features: {

            "subclassfeature3": { 
                name: "Deteccion Arcana",
                source: ["HB", 0],
                minlevel: 3,
                description: "\n   " + "Obtienes competencia en la habilidad Arcana si aún no la tienes. Además, puedes gastar 1 punto de ki para lanzar el hechizo de detección de magia como acción.",
                skills: ["Arcana"],
                skillstxt: "\n\n" + toUni("Monk of Mundanity (Deteccion Arcana)") + ": Competencia en Conocimiento Arcano",
                spellcastingBonus : {
                    name : "Deteccion arcana",
                    spells : ["detect magic"],
                    selection : ["detect magic"],
                    firstCol : 1,

                }

            },
            "subclassfeature3.1": {
                name: "Desvio de hechizos",
                source: ["HB", 0],
                minlevel: 3,
                description: "\n   " + "Puedes usar tu habilidad Deflect Missiles para reducir el daño que recibes de fuentes mágicas. Cuando sea objetivo de cualquier daño mágico que no sea contundente, cortante o perforante, puede gastar 1 punto de ki para reducir el daño infligido como lo haría con Deflect Missiles. Si reduce el daño a 0, puede elegir hacer que su próximo ataque cuerpo a cuerpo inflija un daño de fuerza adicional igual a 1 de sus dados de artes marciales.",
            },
            "subclassfeature6": {
                name: "Suprimir Ki",
                source: ["HB", 0],
                minlevel: 6,
                description: "\n   " + "Has aprendido a usar tu ki para alterar la naturaleza mágica de otras criaturas u objetos. Puedes gastar 3 puntos de ki para lanzar un contrahechizo , disipar magia , no ser detectado o eliminar una maldición , usando Sabiduría como tu modificador de lanzamiento de hechizos. A partir del nivel 17, también puedes gastar 8 puntos de ki para lanzar un campo antimagico como acción.",
                spellcastingBonus : {
                    spells: ["counterspell", "dispel magic", "remove curse","nondetection"],
                    selection:["counterspell", "dispel magic", "remove curse", "nondetection"],
                    firstCol : 3,
                    times: 4,

                }
            },
            "subclassfeature11": {
                name: "Desgarro mágico",
                source: ["HB", 0],
                minlevel: 11,
                description: "\n   " + "Cuando golpeas a una criatura que tiene el rasgo de Resistencia mágica con un golpe sin armas, puedes gastar 2 puntos de ki para anular ese rasgo hasta el final de tu próximo turno.",
            },
            "subclassfeature17": {
                name: "Fusión",
                source: ["HB", 0],
                minlevel: 17,
                description: "\n   " + "Cuando realizas una tirada de salvación contra un hechizo u otro efecto mágico, puedes usar tu reacción para obtener ventaja en la tirada de salvación y resistencia al daño del hechizo. Si el efecto es un hechizo, también recuperas un número de puntos de ki igual al nivel del hechizo lanzado." + +"\n   " + "Una vez que haya usado esta habilidad, no puede volver a hacerlo hasta que termine un descanso prolongado.",
                recovery: "long rest", 
                usages: 1,
                spellcastingBonus : {
                    spells: ["antimagic field"], 
                    selection: ["antimagic field"],
                    firstCol : 8, 
                }
            },
        }
    }
);