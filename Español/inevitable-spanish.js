var iFileName = "Inevitablewarlock.js";

AddSubClass(
    "warlock",
    "inevitable", {

        regExpSearch: /inevitable/i,

        subname: "the Inevitable",

        source: ["HB", 0],
        fullname: "Inevitable Warlock",
        spellcastingExtra: ["longstrider", "magic missile", "knock", "silence", "haste", "sending", "locate creature","otiluke's resilient sphere", "geas", "wall of force"],

        features: {
            "subclassfeature1": {
                name: "Marca de la justicia",
                source: ["HB", 0],
                minlevel: 1,
                description: "\n   " + "Puedes utilizar la magia adivinatoria para ayudarte a seguir, investigar o interrogar. Como acción bonus, puedes marcar una criatura que puedas ver. Tienes ventaja en cualquier tirada de Sabiduría (Percepción) en un tirada de Inteligencia (Investigación) que hagas para encontrar a esa criatura y en cualquier tirada de Sabiduría (Perspicacia) que hagas contra ella. La marca dura hasta que vuelvas a utilizar esta característica de nuevo. Puedes usar este rasgo un número de veces igual a tu modificador de Carisma (mínimo una vez), y recuperas todos los usos gastados cuando terminas un descanso largo.",
                usages: "Cha mod per ",
                recovery: "Long rest",

            },
            "subclassfeature12": {
                name: "Reglas de la ley",
                source: ["HB", 0],
                minlevel: 1,
                description: "\n  " + "Aprendes el hechizo de command. Cuenta como un hechizo hechizo para ti, pero no cuenta para el número maximo de hechizos que conoces." + "\n     " + "Puedes castearlo como una acción bonus una vez sin gastar una ranura de hechizo. No puedes volver a hacerlo hasta que termines un descanso corto o largo.",
                usages: 1,
                recovery: "Short Rest",
                spellcastingBonus: {
                    spells: ["command"],
                    selection: ["command"],
                }
            },
            "subclassfeature6": {
                name: "Ley de la media",
                source: ["HB", 0],
                minlevel: 6,
                description: "\n   " + "Puedes imponer la ley y el orden a través de las acciones de aquellos que te rodean. Cuando un aliado que puedas ver a menos de 30 pies de ti hace una tirada de habilidad, una tirada de ataque o una tirada de salvación, puedes usar tu reacción para hacer que renuncie a tirar el d20 y tratar el dado como si sacara 8 + tu bonificación de competencia. Una vez que utilices este rasgo, no podrás volver a utilizarlo hasta que que termines un descanso corto o largo.",
                usages: 1,
                recovery: "Short Rest",
                action: ["reaction", ""],

            },
            "subclassfeature10": {
                name: "Edicto protector",
                source: ["HB", 0],
                minlevel: 10,
                description: "\n   " + "Puedes declarar tu autoridad y castigar a los que la niegan. Puedes lanzar el hechizo de sanctuary una vez sin gastar una ranura de hechizo. Siempre que una criatura dañe al objetivo antes de que el hechizo termine, puedes usar tu reacción para hacer que esa criatura reciba un daño de fuerza igual a tu nivel de brujo. Si tú eres el objetivo, infligir este daño no termina el hechizo para ti. Una vez que lanzas Santuario de esta manera, no puedes hacerlo hasta que termines un descanso corto o largo.",
                spellcastingBonus: {
                    spells: ["sanctuary"],
                    selection: ["sanctuary"],
                    firstCol: "SR",

                },
                recovery: "Short Rest",
                usages: 1,
                action: ["reaction", ""],
            },
            "subclassfeature14": {
                name: "Golpe infalible",
                source: ["HB", 0],
                minlevel: 14,
                description: "\n   " + "Como acción, puedes infligir 50 de daño de fuerza a una criatura en un radio de 5 pies de ti" + "\n   " + "Una vez que usas este rasgo, no puedes usarlo hasta que termines un descanso largo.",
                action: ["action", ""],
                recovery: "Long Rest",
                usages: 1,

            },
        }
    }
);