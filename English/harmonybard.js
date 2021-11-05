var iFileName = "HarmonyBard.js";

AddSubClass(
    "bard",

    "Harmony Bard",

    {

        regExpSearch: /harmony/i,

        subname: "College of Harmony",

        source: ["TCEE", 12],


        fullname: "Bard of Harmony",

        features: {

            "subclassfeature3": {
                name: "Harmonic Bond",
                source: ["TCEE", 12],
                minlevel: 3,
                description: "\n   " + "You learn to link your allies with magical synergy to inspire themselves and each other to keep in the fight. When a creature that has a Bardic Inspiration die from you takes damage, it can roll the die and reduce the damage taken by an amount equal to that number plus your Charisma modifier" + "\n    " + "Alternatively, a creature with a Bardic Inspiration die from you can use its reaction to grant this benefit to another creature within 30 feet of it, when that other creature takes damage.",
            },

            "subclassfeature3.1": {
                name: "Guided Initiative",
                source: ["TCEE", 12],
                minlevel: 3,
                description: desc([
                    "You learn the guidance cantrip, which counts as a bard cantrip for you but doesn’t count against your number of bard cantrips known. For you, it has a range of 30 feet.",
                    "Additionally, whenever you roll initiative, you can use your reaction to grant one creature other than yourself within 30 feet of you a 1d4 bonus to its initiative result",
                ]),
                spellcastingBonus: {
                    spells: ["guidance"],
                    selection: ["guidance"],
                },
            },

            "subclassfeature6": {
                name: "Shared Spell",
                source: ["TCEE", 12],
                minlevel: 6,
                description: "\n   " + "When you cast a spell that can only target one creature, and that does not have a range of self, you can instead target two creatures if one of them has a Bardic Inspiration die from you.",
            },

            "subclassfeature14": {
                name: "Harmonic Link",
                source: ["TCEE", 12],
                minlevel: 14,
                description: "\n   " + "You can link your allies in perfect harmony, working effortlessly as a team to bolster each other’s defenses. When a creature that has a Bardic Inspiration die from you is hit by an attack, it can spend its die to magically reach out to nearby allies. Each creature within 30 feet can use its reaction to grant the target a +2 bonus to the targeted creature’s AC" + "\n   " + "This effect is cumulative. For example, if two creatures use their reactions to grant this benefit, the creature gains a +4 bonus to its AC against the triggering attack. ",
            },

        }
    }
);