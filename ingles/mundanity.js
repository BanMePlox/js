var iFileName = "Monk of mundanity.js";
AddSubClass("monk", "mundanity", {

    regExpSearch: /mundanity/i,
    subname: "Way of Mundanity",

    source: ["HB", 0],

    fullname: "Mundanity Monk",


    features: {

        "subclassfeature3": {
            name: "Arcane Detection",
            source: ["HB", 0],
            minlevel: 3,
            description: "\n   " + "You gain proficiency in the Arcana skill if you do not already have it. Additionally, you can spend 1 ki point to cast the detect magic spell as an action..",
            skills: ["Arcana"],
            skillstxt: "\n\n" + toUni("Monk of Mundanity (Arcane Detection)") + ": Proficiency on Arcana",
            spellcastingBonus: {
                name: "Deteccion arcana",
                spells: ["detect magic"],
                selection: ["detect magic"],
                firstCol: 1,

            }

        },
        "subclassfeature3.1": {
            name: "Spell Deflection",
            source: ["HB", 0],
            minlevel: 3,
            description: "\n   " + "You can use your Deflect Missiles ability to reduce the damage you take from magical sources. When targeted by any magical damage that isn’t bludgeoning, slashing, or piercing you can spend 1 ki point to reduce the damage dealt as you would with Deflect Missiles. If you reduce the damage to 0, you can choose to cause your next melee attack to deal additional force damage equal to 1 of your martial arts dice.",
        },
        "subclassfeature6": {
            name: "Supressing Ki",
            source: ["HB", 0],
            minlevel: 6,
            description: "\n   " + "You’ve learned to use your ki to disrupt the magical nature of other creatures or objects. You can spend 3 ki points to cast counterspell, dispel magic, nondetection, or remove curse, using Wisdom as your spellcasting modifier." + "\n  " + "Beginning at 17th level, you can also spend 8 ki points to cast antimagic field as an action.",
            spellcastingBonus: {
                spells: ["counterspell", "dispel magic", "remove curse", "nondetection"],
                selection: ["counterspell", "dispel magic", "remove curse", "nondetection"],
                firstCol: 3,
                times: 4,

            }
        },
        "subclassfeature11": {
            name: "Magical Rending",
            source: ["HB", 0],
            minlevel: 11,
            description: "\n   " + "When you hit a creature that has the Magic Resistance trait with an unarmed strike, you can expend 2 ki points to nullify that trait until the end of your next turn.",
        },
        "subclassfeature17": {
            name: "Fusión",
            source: ["HB", 0],
            minlevel: 17,
            description: "\n   " + "When you make a saving throw against a spell or other magical effect, you can use your reaction to gain advantage on the saving throw and resistance to damage from the spell. If the effect is a spell, you also regain a number of ki points equal to the level of the spell cast." + +"\n   " + "Once you have used this ability, you may not do so again until you finish a long rest.",
            recovery: "long rest",
            usages: 1,
            spellcastingBonus: {
                spells: ["antimagic field"],
                selection: ["antimagic field"],
                firstCol: 8,
            },
            action: ["reaction", ""]
        },
    }
});