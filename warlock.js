var iFileName = "Inevitablewarlock.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999);

AddSubClass( // this is the function you will be calling to add the variant

    "warlock", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

    "inevitable", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

    { // don't forget this opening bracket

        regExpSearch: /specialme/i,

        subname: "The inevitable", //required; the name of the subclass

        source: ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

        // after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
        // For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

        fullname: "Inevitable of Warlock", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"
        spellcastingExtra: ["longstrider", "magic missile", "knock", "silence", "haste", "sending", "locate creature", "resilient sphere", "geas", "wall of force"],

        features: { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight

            "subclassfeature1": { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
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