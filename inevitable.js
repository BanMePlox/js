var iFileName = "Inevitablewarlock.js";
RequiredSheetVersion(12.999);

AddSubClass(
    "warlock",
    "inevitable", {

        regExpSearch: /specialme/i,

        subname: "The inevitable",

        source: ["HB", 0],
        fullname: "Inevitable of Warlock",
        spellcastingExtra: ["longstrider", "magic missile", "knock", "silence", "haste", "sending", "locate creature", "resilient sphere", "geas", "wall of force"],

        features: {
            "subclassfeature1": {
                name: "Mark of Justice",
                source: ["HB", 0],
                minlevel: 1,
                description: "\n   " + "You can use divination magic to help you tail, investigate, or interrogate leads and quarries. As a bonus action, you can mark one creature you can see. You have advantage on any Wisdom (Perception) on Intelligence (Investigation) check you make to find that creature and on any Wisdom (Insight) check you make against it. The mark lasts until you use this feature again.",
                usages: "Cha mod per ",
                recovery: "Long rest",

            },
            "subclassfeature1.2": {
                name: "Rule of Law",
                source: ["HB", 0],
                minlevel: 1,
                description: "\n  " + "You learn the command spell. It counts as a warlock spell for you, but doesn’t count against the number of spells you know." + "\n     " + "You can cast command as a bonus action once without expending a spell slot. You can’t do so again until you finish a short or long rest.",
                usages: 1,
                recovery: "Short rest",
                spellcastingBonus: {
                    spells: ["command"],
                    selection: ["command"],
                }
            },
            "subclassfeature6": {
                name: "Law of Averages",
                source: ["HB", 0],
                minlevel: 6,
                description: "\n   " + "You can impose law and order through the actions of those around you. When an ally you can see within 30 feet of you makes an ability check, attack roll, or saving throw, you can use your reaction to cause it to forgo rolling the d20 and treat the die as if it rolled 8 + your proficiency bonus." + "\n   " + "Once you use this feature, you can’t use it again until you finish a short or long rest. ",
                usages: 1,
                recovery: "Short rest",
                action: ["reaction", ""]

            },
            "subclassfeature10": {
                name: "Protective Edict",
                source: ["HB", 0],
                minlevel: 10,
                description: "\n   " + "You can declare your authority and punish those who deny it. You can cast the sanctuary spell once without expending a spell slot. Whenever a creature damages the target before the spell ends, you can use your reaction to cause that creature to take force damage equal to your warlock level. " + "\n   " + "If you are the target, dealing this damage doesn’t end the spell for you. Once you cast sanctuary in this way, you can’t do so again until you finish a short or long rest.",
                spellcastingBonus: {
                    spells: ["sanctuary"],
                    selection: ["command"],
                    firstCol: "SR",

                },
                recovery: "Short Rest",
                usages: 1,
                action: ["reaction", ""],
            },
            "subclassfeature14": {
                name: "Unerring Strike",
                source: ["HB", 0],
                minlevel: 14,
                description: "\n   " + "As an action, you can deal 50 force damage to a creature within 5 feet of you" + "\n   " + "Once you use this feature, you can’t use it again until you finish a long rest",
                action: ["action", ""],
                recovery: "Long Rest",
                usages: 1,

            },
        }
    }
);