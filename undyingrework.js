var iFileName = "undyingwarlockrework.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

AddSubClass(

    "warlock",
    "reworkedundying", {

        regExpSearch: /specialme/i,
        subname: "Undying reworked", //required; the name of the subclass

        source: ["HB", 0],
        fullname: "Undying Reword of Warlock", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"
        spellcastingExtra: ["false life", "ray of sickness", "blindness/deafness", "silence", "feign death", "revivify", "aura of life", "death ward", "legend lore", "raise dead"],

        features: {

            "subclassfeature1": {
                name: "Among the Dead",
                source: ["HB", 0],
                minlevel: 1,
                description: "\n   " + "When I use Second Wind, I can also heal three allies within 60 that can see or hear me",
                additional: ["", "", "3 HP", "4 HP", "5 HP", "6 HP", "7 HP", "8 HP", "9 HP", "10 HP", "11 HP", "12 HP", "13 HP", "14 HP", "15 HP", "16 HP", "17 HP", "18 HP", "19 HP", "20 HP"],
                eval: "RemoveAction(\"bonus action\", \"Second Wind\"); AddAction(\"bonus action\", \"Second Wind (+ Rallying Cry)\", \"Purple Dragon Knight\")", //eval is custom code that is run when the feature is added. It is used here, because the "Second Wind" bonus action is removed, and replaced by the "Second Wind (+ Rallying Cry)" bonus action. If you instead just want to add a bonus action for "Rallying Cry", use the action object (i.e. action : ["bonus action", ""],)
                removeeval: "RemoveAction(\"bonus action\", \"Second Wind (+ Rallying Cry)\"); AddAction(\"bonus action\", \"Second Wind\", \"Fighter\")", //removeeval is custom code that is run when the feature is removed. Here the "Second Wind (+ Rallying Cry)" bonus action is removed and replaced by the plain "Second Wind" bonus action
            },
            "subclassfeature7": {
                name: "Royal Envoy",
                source: ["S", 128],
                minlevel: 7,
                description: "\n   " + "I gain proficiency and expertise with the Persuasion skill" + "\n   " + "If already proficient, I can choose Animal Handling, Insight, Intimidation, or Perform.",
                skillstxt: "\n\n" + toUni("Purple Dragon Knight (Royal Envoy)") + ": Persuasion proficiency and expertise; if already proficient, choose one from Animal Handling, Insight, Intimidation, and Performance.",
                skills: ["Persuasion"],
            },
            "subclassfeature10": {
                name: "Inspiring Surge",
                source: ["S", 128],
                minlevel: 10,
                description: "\n   " + "When I use my Action Surge, I can inspire an ally within 60 ft that can see or hear me" + "\n   " + "The ally can then use its reaction to make one melee or ranged weapon attack",
                additional: ["", "", "", "", "", "", "", "", "", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "1 ally", "2 allies", "2 allies", "2 allies"],
            },
            "subclassfeature15": {
                name: "Bulwark",
                source: ["S", 128],
                minlevel: 15,
                description: "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same affect" + "\n   " + "It only works if I'm not incapacitated, the ally is within 60 ft and can see or hear me",
            },
        }
    }
);