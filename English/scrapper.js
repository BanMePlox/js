var iFileName = "Scrapper.js";

AddSubClass(

    "fighter",

    "Scrapper",

    {


        regExpSearch: /scrapper/i,

        subname: "Scrapper",

        source: ["TCEE1", 24],

        fullname: "Scrapper Fighter",


        features: {

            "subclassfeature3": {
                name: "Makeshift Arsenal",
                source: ["TCEE1", 24],
                minlevel: 3,
                description : desc([
                    "When you choose this archetype at 3rd level, you gain proficiency with improvised weapons. When you deal damage with an improvised weapon, you can choose to deal an amount of damage equal to 2d4 + your Strength modifier instead of the amount normally dealt by such a weapon.",
                    "After dealing damage, you can deal an additional 1d4 damage if you declare that the blow has shattered, splintered, or otherwise broken the improvised weapon beyond further use. You cannot do this if the improvised weapon is a magic item.",
                    "At 11th level, this extra damage increases to 1d8.",
                ])
            },
            "subclassfeature3.1": {
                name: "Dirty Fighting",
                source: ["TCEE1", 24],
                minlevel: 3,
                description : desc([
                    " When you hit a creature with a melee weapon attack, you can use one dirty trick as long as you aren't wielding a weapon with the Two-Handed property and aren't wearing heavy armor",
                    "You have a number of trick points equal to twice your proficiency bonus. When you use a dirty trick, you expend one or more trick points, each of which deals an additional 1d6 bludgeoning damage to the target as part of the attack. The maximum number of trick points you can expend on a single dirty trick cannot exceed your proficiency bonus. You regain all expended trick points when you complete a short or long rest.                    ",
                    "If a dirty trick requires a saving throw, the DC is equal to 8 + your proficiency bonus + your Strength modifier.                    ",
                    "Low Blow. The defender must succeed on a Constitution saving throw or fall prone if it is your size or smaller. This trick has no effect against creatures with more than four legs",
                    "Go For the Eyes. The defender must succeed on a Dexterity saving throw or become blinded until the end of its next turn. This trick has no effect on creatures without eyes.",
                    "Smash Nose. The defender must succeed on a Wisdom saving throw or be unable to take reactions until the start of its next turn. This trick has no effect on creatures without a face.",
                ])
            },
            "subclassfeature3.2": {
                name: "Swagger",
                source: ["TCEE1", 24],
                minlevel: 3,
                description: "\n    "+ "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",
                armorOptions : [{
                    regExpSearch : /swagger/i,
                    name : "Swagger",
                    source : ["TCEE1", 24],
                    ac : "10+Con",
                }],
                armorAdd: "Swagger"
            },
            "subclassfeature7": {
                name: "Heave-Ho",
                source: ["TCEE1", 25],
                minlevel: 7,
                description: "\n   " + "Starting at 7th level, you can use your action to throw a creature you're grappling. If they're smaller than your size, you can throw them a number of feet equal to your Strength score. If they're your size, you can throw them half that distance. If they're one size larger than you, you throw them a number of feet equal to your Strength modifier (minimum 1 foot). The creature falls prone and takes bludgeoning damage equal to your Strength modifier, plus 1d8 bludgeoning damage for every 5 feet you threw it, rounded down. If the creature would strike an object, structure, or other creature, the struck target must succeed on a Dexterity saving throw or else take an equal amount of damage. The thrown creature then stops moving. If the struck target is the same size as or smaller than the thrown creature and fails the saving throw, it is also knocked prone.",
            },
            "subclassfeature7.1": {
                name: "Read the room",
                source: ["TCEE1", 25],
                minlevel: 7,
                description: "\n   " + "You're always expecting a fight. Starting at 7th level, when you spend at least 1 minute observing your immediate environment and the creatures in it, you learn certain details likely to be of use in the event that violence breaks out. The environment must be a confined space, such as a room, or an open space in an urban setting. \n Ask the DM up to three of the following questions, and they must respond truthfully." +"\n   " +  "·Which creatures here have notable combat training or experience?" +"\n    "+ "·Which creatures here are a danger to me or my allies?"+"\n    "+ " · Which creatures here have more hit points than I do? "+"\n   "+" ·Who's in charge here? "+"\n    "+" ·What's useful to me here? "+"\n    "+" ·What's my best way out of here? \n In addition, if a fight breaks out in that environment within the next hour, you have advantage on your initiative roll and cannot be surprised.",
            },
            "subclassfeature10": {
                name: "Shake it Off",
                source: ["TCEE1", 25],
                minlevel: 10,
                description: "\n   " + "While you are conscious, you can spend 1 or more trick points as a bonus action on your turn and gain 1d4 temporary hit points for each point spent this way. You can also spend 3 trick points on your turn to make a saving throw against one effect on you that a successful saving throw can end.",
            },
            "subclassfeature15": {
                name: "I could do this all day (Pablo pa los amigos)",
                source: ["TCEE1", 25],
                minlevel: 15,
                description: "\n   " + "Starting at 15th level, if you have no trick points remaining when your turn begins, you regain one trick point.",
                
            },
            "subclassfeature18": {
                name: "Crushing Grasp",
                source: ["TCEE1", 25],
                minlevel: 18,
                description: "\n    " + "Starting at 18th level, you know it's a fight when everyone else thinks it's still a conversation. When you roll initiative, you can spend 3 trick points to immediately make a melee attack against one creature you can see within 5 feet of you. If the attack hits and you use a dirty trick, the creature has disadvantage on its saving throw.Starting at 18th level, you know it's a fight when everyone else thinks it's still a conversation. When you roll initiative, you can spend 3 trick points to immediately make a melee attack against one creature you can see within 5 feet of you. If the attack hits and you use a dirty trick, the creature has disadvantage on its saving throw.",

            }
        }
    }
);