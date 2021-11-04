var iFileName = "abominationbarb.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

AddSubClass( // this is the function you will be calling to add the variant

    "barbarian", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

    "abomination", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

    {

        regExpSearch: /abomination/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

        subname: "Path of the Abomination", //required; the name of the subclass

        source: ["TCEE", 7], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

        // after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
        // For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

        fullname: "Barbarian of Abomination", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

        abilitySave: 3, //overwrites the abilitySave that was defined in the ClassList
        spellcastingFactor: 3, //overwrites the spellcastingFactor that was defined in the ClassList

        features: { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight

            "subclassfeature3": { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
                name: "Eldritch Transformation",
                source: ["TCEE", 7],
                minlevel: 3,
                description: "\n   " + "You begin to perform vile rituals to improve your capabilities and strike terror into the hearts of your foes. These manifest as horrific physical transformations during the height of your fury. When you rage, choose a transformation from one of the options detailed on the notes page. Your choice lasts for the duration of the rage.",
                    toNotesPage : [{
                        name : "Eldritch Transformation Options",
                        note : [
                            "\nCorrupted Flesh: While raging, your skin hardens in a scaly or scab-like manner, granting you a +1 bonus to your AC. As a reaction, when you fail a Constitution or Dexterity saving throw you can shed the skin to reroll, using the new result. If you do so, the bonus to your AC ends.",
                            "\nBloated Form: While raging, your body swells to an unnatural bloated state. You increase in size by one category—from Medium to Large, for example, your carrying capacity is doubled, and you have advantage on saving throws that would move you or knock you prone.",
                            "\nReprehensible Stench: While raging, you emit a foul-scented cloud of decaying matter, potentially sickening those in an area around you. When a creature within 5 feet of you hits you with a weapon attack, it takes 1d4 poison damage. The damage die increases when you reach certain levels in this class, increasing to 1d6 at 10th level, 1d8 at 15th level, and 1d10 at 20th level.",
                                                   ]
                    }],
            },
            "subclassfeature6": {
                name: "Aberrant Form",
                source: ["TCEE", 7],
                minlevel: 6,
                description: "\n   " + "Choose Unsightly Visage,Gruesome Appendage or Slithering Skin using the \"Choose Feature\" button above",
                choices: ["Unsightly Visage", "Gruesome Appendage", "Slithering Skin"],
                "unsightly visage": {
                    name: "Unsightly Visage",
                    description: "\n    " + "Your appearance takes on a permanent repulsive form—perhaps additional eyes on your neck or tiny tentacles across your face. You gain advantage on Charisma (Intimidation) checks but disadvantage on Charisma (Persuasion) checks against creatures that can see you.",

                },
                "gruesome appendage": {
                    name: "Gruesome Appendage",
                    description: "\n    " + "A partially-functional extra arm or tentacle grows from your torso. The appendage cannot wield weapons or a shield, but can manipulate simple objects. While the appendage is not carrying anything, you can use a bonus action to take the Use an Object action.",
                },
                "slithering skin": {
                    name: "Slithering Skin",
                    description: "\n    " + "Your body begins to produce an oily and repulsive slime. You have advantage on saving throws to avoid being grappled or restrained as well as advantage on ability checks made to escape a grapple.",
                },
            },


            "subclassfeature10": {
                name: "Monstrous Manifestations",
                source: ["TCEE", 8],
                minlevel: 10,
                description: "\n   " + "Your body has been so heavily warped by eldritch forces that you have become hardened to that which would hinder lesser beings. You are immune to poison.",
                savetxt: {
                    immune: ["poison"]
                },
            },




            "subclassfeature14": {
                name: "Twisted Metamorphosis",
                source: ["TCEE", 8],
                minlevel: 14,
                description: "\n   " + "You have mastered ancient techniques and dark rituals to be able to truly become an unrecognisable shadow of your former self. As part of a long rest, you can spend 1 hour performing a ritual to transform yourself in one of the ways detailed below. The metamorphosis lasts until you use this feature again or until you finish a long rest.",
                "Unstoppable Bulk": {
                    name: "Unstoppable Bulk",
                    extraname: "Twisted Metamorphosis",
                    source: ["TCEE", 8],
                    description: "" + "\n   " + "Your body becomes a mass of writhing flesh. While raging, you can use a bonus action to take the Dash action. If you end the dash next to a creature, it must succeed on a Strength saving throw or be pushed 15 feet away from you and take bludgeoning damage equal to 1d12 + your Strength modifier.",
                },
                "Vile Presence": {
                    name: "Vile Presence",
                    extraname: "Twisted Metamorphosis",
                    source: ["TCEE", 8],
                    description: "" + "\n   " + "Your appearance becomes the stuff of nightmares, preventing enemies from escaping through sheer terror. While you're raging, you can use a reaction after hitting a creature to force it to make a Wisdom saving throw. On a failed save, the creature takes 2d8 psychic damage and falls prone. On a successful save, the creature is immune to this effect for 24 hours. A creature is also immune to this effect if it can't see or hear you or if it can't be frightened.",
                },
                "Tentacled Fury": {
                    name: "Tentacled Fury",
                    extraname: "Twisted Metamorphosis",
                    source: ["TCEE", 8],
                    description: "" + "\n   " + "You can transform your arms into powerful eldritch tentacles. While you are raging, you can use a bonus action to increase your reach with melee weapon attacks by 15 feet until the end of your turn. If you hit a target while using this feature, you can choose to drag the creature towards you. The target must succeed on a Strength saving throw with a DC equal to 8 + your proficiency bonus + your Constitution modifier, or be pulled up to 10 feet in a straight line toward you.",
                },
            },
        }
    }

);
