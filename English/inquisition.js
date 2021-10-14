
var iFileName = "Inquisition.js";
AddSubClass(

    "cleric", 
    
    "inqcler",
    
    { 

        regExpSearch: /inquisition/i, 
        
        subname: "Inquisition Domain",
        
        source: ["HB", 0], 
        

        fullname: "Cleric of Inquisition", 
        spellcastingExtra: ["cause fear", "hunter's mark", "branding smite", "detect thoughts", "dispel magic", "speak with dead", "banishment","locate creature", "dispel evil and good", "flame strike"],

        features: { 

            "subclassfeature1": {
                name: "Seeker of Apostates",
                source: ["HB", 0],
                minlevel: 1,
                description: "\n   " + "You gain proficiency with martial weapons, thieves' tools and two of the following skills of your choice: Arcana, Insight, Intimidation, Investigation, Persuasion, Sleight of Hand, Stealth or Religion.",
                weaponProfs : [false, true],
                toolsProfs : {
                    primary : [["Thieves' tools", "Dex"]]
                },

            },
            "subclassfeature1.2": {
                name: "Fear and surprise",
                source: ["HB", 0],
                minlevel: 1,
                description: "\n   " + "Beginning at 1st level, your god grants you the power to act suddenly in pursuit of your enemies. You can add your Wisdom modifier to your initiative rolls." + "\n   ",
                addMod : { type : "skill", field : "Init", mod : "max(Cha|0)", text : "I can add my Wisdom modifier to initiative rolls."},
            },
            "subclassfeature2": {
                name: "Channel Divinity: Cow the Unfaithful",
                source: ["HB", 0],
                minlevel: 2,
                description: "\n   " + "Starting at 2nd level, you can use your Channel Divinity to inspire awe or terror among enemies of your faith. As a bonus action, on the first round of combat you can present your holy symbol and invoke the name of your deity. All hostile creatures within 30 feet of you who can see you must succeed on a Wisdom saving throw or be frightened by you until the end of your next turn. A creature frightened in this way has a speed of 0. Creatures who are surprised when you use this ability have disadvantage on this saving throw.",
                action : ["action", ""],
            },

            "subclassfeature6": {
                name: "Expose the Heretics",
                source: ["HB", 0],
                minlevel: 6,
                description: "\n   " + "Starting at 6th level, your ability to inspire dread among enemies gains the power to end deceptions or illusions." + "\n   " + "Creatures which are frightened or charmed by you have disadvantage on checks made to deceive you or hide from you. " + "\n   " + "Additionally, you have advantage on checks and saving throws made to perceive or see through illusions, and can cast see invisibility on yourself once without using material components or expending a spell slot. Once you have cast the spell in this way, you cannot do so again until you complete a long rest.",
                spellcastingBonus: {
                    spells: ["see invisibility"],
                    selection: ["see invisibility"],
                },
                action : ["action", ""],
                usages: 1,
                recovery: "LR",
            },

            "subclassfeature8" : {
                name: "Divine Strike", 
                source : ["HB", 0], 
                minlevel: 8,
                description: "\n    " + "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.",

            },

            "subclassfeature18" : {
                name: "End Blasphemy", 
                source : ["HB", 0],
                minlevel: 17,
                description: "\n    " + "Starting at 17th level, you may break the ties between an enemy and their magical power." + "\n    " + "As an action, choose a creature you can see within 60 feet of you. The creature must make a Wisdom saving throw. On a failed save, any spells on the target and any ongoing spells tcast by the target end. Until the end of your next turn, the creature may not cast spells or use magical abilities or non-artifact magic items. Once you have used this ability, you may not do so again until you finish a long rest. ",
                usages: 1,
                recovery: "LR",
            }
        }
    }
);