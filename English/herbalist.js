/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Subclass (a.k.a. Archetype)
	Effect:		This is the syntax for adding a new subclass/archetype to a class that is defined in the sheet, or to a class you made yourself
	Sheet:		v12.999 (2017-11-29)
*/

var iFileName = "herbalist.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

AddSubClass( // this is the function you will be calling to add the variant

    "ranger", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

    "herbalist", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

    { // don't forget this opening bracket

        regExpSearch: /herbalist/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

        subname: "Herbalist", //required; the name of the subclass

        source: ["TCEE", 35], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

        // after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
        // For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

        fullname: "Herbalist Ranger", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

        features: {
            "subclassfeature3.1": { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
                name: "Herbalist Magic",
                source: ["TCEE", 35],
                minlevel: 3,
                description: "\n" + "You learn an additional spell when you reach certain levels in this class, as shown in the Herbalist Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
                spellcastingExtra: ["purify food and drink", "enhance ability", "feign death", "death ward", "greater restoration"],

            },
            "subclassfeature3.2": { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
                name: "Bonus proficiency",
                source: ["TCEE", 35],
                minlevel: 3,
                description: "\n" + "I gain proficiency with herbalism kit aswell as either Medicine, Nature, or Survival skill. You can add double your proficiency bonus when using an herbalism kit or the chosen skill. Additionally, when you use your action to stabilize a creature, you can make your Wisdom (Medicine) check with advantage.",


            },
            "subclassfeature3.3": { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
                name: "Create Concotion",
                source: ["TCEE", 35],
                minlevel: 3,
                description: "\n As part of a long rest, you are able to create a number of salves and tinctures using your herbalism kit and materials you have collected during your travels (including medicinal herbs, roots and animal glands). When you finish a long rest, you can prepare a number of concoctions equal to 2 + your Wisdom modifier (minimum of 3) chosen from the Salves and Tinctures list below. Each concoction provides a single dose, which is consumed upon use.If you are in one of your favoured terrains, you may produce one additional concoction as you are able to easily find extra ingredients. These creations lose their potency after 24 hours.",
                limfeaname: "Concotions",
                usages: "2 + Wisdom modifier per ",
                usagescalc: "event.value = 2 + What('Wis Mod');",
                recovery: "long rest",
                "Burning Beeswax": {
                    name: "Burning Beeswax",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "",
                    action: ["action"],
                },
                "Death Bell": {
                    name: "Death Bell",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "A foul tasting tonic that is said prevents the dying from slipping into death. A creature can ingest the tonic as a bonus action to gain advantage on death saving throws for 8 hours.",
                    action: ["bonus action"],
                },
                "Displacer Herb": {
                    name: "Displacer Herb",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "This rare herb seems to forever shift and shiver in the hand. A creature can consume the herb as a bonus action. Until the start of its next turn, the creature does not provoke opportunity attacks as its form becomes difficult to focus upon.",
                    action: ["bonus action"],
                },
                "Elfroot Granola": {
                    name: "Elfroot Granola",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "This recipe of simple nuts, fruit and nearby vegetation lightens the spirit and relieves tension. A creature that spends 1 minute consuming the food gains temporary hit points equal to 1d8 plus your wisdom modifier.",
                },
                "Gnomeberry Juice": {
                    name: "Gnomeberry Juice",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "This iron-tasting extract from a rare fruit can temporarily shrink you in size. As a bonus action, a creature can consume the liquid to gain the Reduce effects of the Enlarge/Reduce spell for 10 minutes.",
                    action: ["bonus action"],
                },
                "Hastening Sap": {
                    name: "Hastening Sap",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "This golden liquid is said to be sap from the trees of the Feywild, though it can be found on trees near portals to that realm. A creature can ingest it as a bonus action to gain an increase of 15 feet to their speed for the next minute.",
                    action: ["bonus action"],
                },
                "Hollowbone Tonic": {
                    name: "Hollowbone Tonic",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "Torn feathers float in this blueish liquid. A creature can consume the tonic as a bonus action, granting it resistance to falling damage and preventing any damage for falls of less than 30 feet for 8 hours.",
                    action: ["bonus action"],
                },
                "Night Eye Berries": {
                    name: "Night Eye Berries",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "These dark berries can allow temporary vision in the darkest of locations. As an action, a creature can squeeze the juice from these berries into its eyes to gain darkvision for 1 hour. If a creature already has darkvision, its range increases by 30 feet.",
                    action: ["action"],
                },
                "Poison-Purge Potion": {
                    name: "Poison-Purge Potion",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "This vial of carefully distilled poison from local creatures and plants can forcibly remove toxins from the body. A creature can drink the potion as a bonus action to end the poisoned condition.",
                    action: ["bonus action"],
                },
                "Pond Leaf": {
                    name: "Pond Leaf",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "This dried and twisted leaf reeks of pond water. A creature that chews on this leaf for 1 minute can breathe water and gains a swimming speed equal to its walking speed for 8 hours.",
                },
                "Potent Musk": {
                    name: "Potent Musk",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "This mixture of animal glands can be used to calm a wild beast. A creature can apply the musk to their hands and clothing as an action, granting them advantage on Wisdom (Animal Handling) checks for 1 hour.",
                    action: ["action"],
                },
                "Shadow Rose Pollen": {
                    name: "Shadow Rose Pollen",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "This aromatic flower is known to calm the nerves and improve concentration. A creature can consume the pollen as an action to gain advantage on Dexterity (Stealth) checks for 1 hour.",
                    action: ["action"],
                },
                "Slipstone Oil": {
                    name: "Slipstone Oil",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "This clear and slimy oil is difficult to procure and contain. A creature can spend 1 minute applying the oil to their person to gain advantage on saving throws against effects that would leave them grappled or restrained.",
                },
                "Stinging Spores": {
                    name: "Stinging Spores",
                    extraname: "Concotion",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "These delicate spores can explode into tiny airborne barbs when struck. A creature can spend one minute applying them to a cloak or armor of a creature. The next time the creature is hit by a melee attack, the attacker takes 2d6 piercing damage.",
                },
                autoSelectExtrachoices: [{
                        extrachoice: "Burning Beeswax"
                    }, {
                        extrachoice: "Death Bell"
                    }, {
                        extrachoice: "Displacer Herb"
                    },
                    {
                        extrachoice: "Elfroot Granola"
                    },
                    {
                        extrachoice: "Gnomeberry Juice"
                    }, {
                        extrachoice: "Hastening Sap"
                    }, {
                        extrachoice: "Hollowbone Tonic"
                    }, {
                        extrachoice: "Night Eye Berries"
                    }, {
                        extrachoice: "Poison-Purge Potion"
                    }, {
                        extrachoice: "Pond Leaf"
                    }, {
                        extrachoice: "Potent Musk"
                    }, {
                        extrachoice: "Shadow Rose Pollen"
                    }, {
                        extrachoice: "Slipstone Oil"
                    }, {
                        extrachoice: "Stinging Spores"
                    },
                ]

            },
            "subclassfeature7": {
                name: "Natural Resistance",
                source: ["TCEE", 35],
                minlevel: 7,
                description: "\n   " + "Your knowledge and use of various herbs has hardened your body against ill effects. You are immune to poison. This knowledge also leads you to make more potent concoctions. Each dose of one of your concoctions restores 1d8 hit points to its recipients, in addition to its standard effects.",
                savetxt: {
                    immune: ["poison"]
                },
            },
            "subclassfeature11": {
                name: "Elemental Balm",
                source: ["TCEE", 35],
                minlevel: 10,
                description: "\n   " + "At 11th level, you have learned to use your magic to infuse your creations with elemental energy. As an action, and with your herbalism kit in hand, you can spend a spell slot of 1st level or higher to apply a defensive balm to a creature within 5 feet of you. The creature gains resistance to your choice of one of the following damage types: acid, cold, fire, lightning, poison or thunder. This resistance lasts for 1 hour." + "\n   " + "A creature under this effect can choose to end the resistance as an action, making a melee spell attack against a creature within 5 feet of it, using your spell attack bonus. This attack deals a number of d8s equal to the spell slot used, of the relevant damage type.",
            },
            "subclassfeature15": {
                name: "Potent Mixture",
                source: ["TCEE", 35],
                minlevel: 15,
                description: "\n   " + "You have learned to be able to quickly produce a number of powerful mixtures from your gathered herbs and medicines. Over the course of 10 minutes, you can create one of the following mixtures. This creation loses its potency after 24 hours. Once you use this feature you cannot use it again until you finish a long rest.",
                recovery: "Long Rest",
                usages: 1,
                "Refreshing Herbs": {
                    name: "Refreshing Herbs",
                    extraname: "Potent Mixture",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "This collection of fresh and potent herbs can be ingested by a creature as a bonus action to remove all levels of exhaustion.",
                    action: ["bonus action"],
                },
                "Prophetic Powder": {
                    name: "Prophetic Powder",
                    extraname: "Potent Mixture",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "These dried and crushed rare flowers allow the user a supernatural glimpse of the immediate future. A creature can consume the powder as a bonus action. For the next minute, the creature has advantage on attack rolls, saving throws and ability checks.",
                    action: ["bonus action"],
                },
                "Regenerative Potion": {
                    name: "Regenerative Potion",
                    extraname: "Potent Mixture",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "This murky bottle contains a pickled troll eye. A creature can consume the potion as a bonus action. For the next minute, the creature regains 1d8 hit points at the start of each of its turns. This effect ceases to function if the creature takes any fire or acid damage.",
                    action: ["bonus action"],
                },
                "Tincture of Life": {
                    name: "Tincture of Life",
                    extraname: "Potent Mixture",
                    source: ["TCEE", 35],
                    description: "" + "\n   " + "This golden liquid has been carefully distilled from a rare and deadly plant usually found in the Feywild. A creature can use an action to feed the mixture to a humanoid that has died within the last hour. The dead creature returns to 1 hit point and immediately suffers one level of exhaustion.",
                    action: ["action"],
                },
                autoSelectExtrachoices: [{
                        extrachoice: "Refreshing Herbs"
                    },
                    {
                        extrachoice: "Prophetic Powder"
                    },
                    {
                        extrachoice: "Regenerative Potion"
                    },
                    {
                        extrachoice: "Tincture of Life"
                    },
                ]
            },
        }
    }
);