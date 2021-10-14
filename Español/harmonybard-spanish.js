var iFileName = "HarmonyBard.js";

AddSubClass(
    "bard",

    "HarmonyBard",

    {

        regExpSearch: /specialme/i,

        subname: "College of Harmony",

        source: ["HB", 0],


        fullname: "Bard of Harmony",

        features: {

            "subclassfeature3": {
                name: "Unión armónica",
                source: ["S", 128],
                minlevel: 3,
                description: "\n   " + "Aprendes a vincular a tus aliados con una sinergia mágica para inspirarlos. Cuando un aliado que tenga tu inspiración bardica recibe daño, puede usarlo para reducir el daño en lo que salga el dado + tu carisma. " + "\n    " + "Alternativamente, puede usar su reacción para aplicarselo a un aliado a 30 pies.",
            },

            "subclassfeature3.1": {
                name: "Iniciativa guiada",
                source: ["HB", 0],
                minlevel: 3,
                description: "\n	" + "Aprendes el truco de guia , que cuenta como un truco de bardo para ti, pero no cuenta para tu número de trucos de bardo conocidos. " + "\n	" + "Para ti, tiene un alcance de 30 pies. Además, siempre que lances iniciativa, puedes usar tu reacción para otorgar a una criatura distinta a ti y que este a 30 pies un bono de 1d4 a su iniciativa.",
                spellcastingBonus: {
                    spells: ["guidance"],
                    selection: ["guidance"],

                },
            },

            "subclassfeature6": {
                name: "Hechizo compartido",
                source: ["HB", 0],
                minlevel: 6,
                description: "\n   " + "Cuando casteas un hechizo que sea a una sola criatura, y que no sea rango self, puedes lanzar el hechizo a otra criatura mientras esta tenga una inspiración bárdica.",
            },

            "subclassfeature14": {
                name: "Lazo armónico",
                source: ["hb", 0],
                minlevel: 14,
                description: "\n   " + "Puedes vincular a tus aliados en perfecta armonía, trabajando como equipo para reforzar sus defensas. Cuando una criatura que tiene una inspiración bardica por ti es golpeado por un ataque, puede gastar su dado para ayudar mágicamente a los aliados cercanos. Cada criatura en un radio de 30 pies puede usar su reacción para otorgar al objetivo un bonificador de +2 a la AC de la criatura." + "\n   " + "Este efecto es acumulativo. Por ejemplo, si dos criaturas usa sus reacciones para otorgar este beneficio, la criatura gana un +4 bonificador a su CA contra el ataque desencadenante. ",
            },

        }
    }
);