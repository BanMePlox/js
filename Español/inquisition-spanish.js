
var iFileName = "Inquisition-spanish.js";
AddSubClass(

    "cleric", 
    
    "inqcler",
    
    { 

        regExpSearch: /inquisition/i, 
        
        subname: "Inquisition Domain",
        
        source: ["HB", 0], 
        

        fullname: "Clerigo de la  inquisition", 
        spellcastingExtra: ["cause fear", "hunter's mark", "branding smite", "detect thoughts", "dispel magic", "speak with dead", "banishment","locate creature", "dispel evil and good", "flame strike"],

        features: { 

            "subclassfeature1": {
                name: "Buscador de los apostatas",
                source: ["HB", 0],
                minlevel: 1,
                description: "\n   " + "Obtienes competencia con armas marciales, herramientas de ladron y dos de las siguientes habilidades de su elección: Arcana, Perspicacia, intimidación, investigación, persuasión, Juego de Manos, sigilo o religión.",
                weaponProfs : [false, true],
                toolsProfs : {
                    primary : [["Thieves' tools", "Dex"]]
                },

            },
            "subclassfeature1.2": {
                name: "Miedo y sorpresa",
                source: ["HB", 0],
                minlevel: 1,
                description: "\n   " + "A partir del nivel 1, tu dios te concede el poder de actuar en la persecución de tus enemigos. Puedes agregar tu Modificador de sabiduría a tus tiradas de iniciativa." + "\n   ",
                addMod : { type : "skill", field : "Init", mod : "max(Cha|0)", text : "I can add my Wisdom modifier to initiative rolls."},
            },
            "subclassfeature2": {
                name: "Canalizar divinidad: Intimida a los infieles",
                source: ["HB", 0],
                minlevel: 2,
                description: "\n   " + "A partir del segundo nivel, puedes usar tu Canalizar Divinidad para inspirar temor o terror entre tus enemigos. Como una acción bonus, en la primera ronda de combate puedes presentar tu símbolo sagrado e invocar el nombre de tu deidad. Todos las criaturas hostiles a 30 pies de ti que pueden verte deben tener éxito en una tirada de salvación de Sabiduría o estar asustado por ti hasta el final de tu próximo turno. Una criatura asustada de esta manera tiene una velocidad de 0. Criaturas que estan sorprendidas cuando usas esta hablidad tienen desventaja en la salvacion",
                action : ["action", ""],
            },

            "subclassfeature6": {
                name: "Exponer a los herejes",
                source: ["HB", 0],
                minlevel: 6,
                description: "\n   " + "Las criaturas que están asustadas o encantadas por ti tiene una desventaja en las tiradas hechas para engañarte o esconderse de ti. Además, tienes ventaja en las tiradas y salvaciones hechas para percibir o ver a través de ilusiones, y puedes lanzar ver invisibilidad en ti mismo una vez sin usar materiales ni componentes o gastar un espacio de hechizo. Una vez que lances el hechizo de esta manera, no puedes volver a hacerlo hasta que completes un descanso largo.",
                spellcastingBonus: {
                    spells: ["see invisibility"],
                    selection: ["see invisibility"],
                },
                action : ["action", ""],
                usages: 1,
                recovery: "LR",
            },

            "subclassfeature8" : {
                name: "Golpes divinos", 
                source : ["HB", 0], 
                minlevel: 8,
                description: "\n    " + "A nivel 8, obtienes la capacidad de infundir tu arma que golpea con energía divina. Una vez en cada uno de tus turnos cuando golpeas a una criatura con un arma de ataque, puedes hacer que el ataque inflija 1d8 de daño radiante adicional a el objetivo. Cuando alcanzas el nivel 14, el daño adicional aumenta a 2d8.",

            },

            "subclassfeature18" : {
                name: "Terminar blasfemia", 
                source : ["HB", 0],
                minlevel: 17,
                description: "\n    " + "Como acción, elige una criatura que puedas ver a menos de 60 pies. de ti. La criatura debe hacer una salvación de Sabiduria. En una salvacion fallida cualquier hechizo en curso por el objetivo y que le este afectado finaliza. Hasta el final del próximo turno, la criatura no puede lanzar hechizos o usar hablidades mágicas u objetos magicos que no sean artefactos. Una vez ha utilizado esta hablidad, no la puedes volver a lanzar hasta que termines un descanso largo                ",
                usages: 1,
                recovery: "LR",
            }
        }
    }
);