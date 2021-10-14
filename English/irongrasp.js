var iFileName = "IronGraspMonk.js";
RequiredSheetVersion(12.999);

AddSubClass(

    "monk",

    "irongraspmonk",

    {


        regExpSearch: /specialme/i,

        subname: "Way of Iron Grasp",

        source: ["HB", 0],


        fullname: "Way of Iron Grasp Monk",


        features: {

            "subclassfeature3": {
                name: "Iron Grasp Technique",
                source: ["HB", 0],
                minlevel: 3,
                description: "\n   " + "You can disrupt the flow of ki in another creature’s body with grappling techniques that prevent it from moving and harming allies." + "\n   " + "You master special martial arts techniques used to disable opponents and safeguard allies. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows and that creature is no more than one size category larger than you, you can force the creature to make a Strength or Dexterity saving throw (its choice) against your ki save DC. On a failed save, the target is grappled by you. You must use a free hand for the grapple as normal" + "\n" + "While grappled in this way, the creature has disadvantage on attack rolls against targets other than you. If the creature uses its action to try to escape the grapple, it makes its ability check against your ki save DC. When it does so, you can expend 1 ki point as a reaction to impose disadvantage on its ability check.",
            },
            "subclassfeature6": {
                name: "Ethereal Grasp",
                source: ["HB", 0],
                minlevel: 6,
                description: "\n   " + "You can grapple incorporeal creatures, such as ghosts, even if they are normally immune to the grappled condition.",
            },
            "subclassfeature6.1": {
                name: "Iron Sentinel",
                source: ["HB", 0],
                minlevel: 6,
                description: "\n   " + "When a ranged attack hits a target you can see, you can use your Deflect Missiles feature to reduce the damage that target takes from the attack—and possibly catch the missile—just as you would for yourself. You must be either within 5 feet of the target or the attacker, or be providing the target with half cover against the attack.",
            },
            "subclassfeature11": {
                name: "Iron Stance",
                source: ["HB", 0],
                minlevel: 11,
                description: "\n   " + "If a creature or effect moves you against your will along the ground, you can use your reaction to reduce the distance you are moved by a number of feet up to half your speed.",
            },
            "subclassfeature17": {
                name: "Crushing Grasp",
                source: ["HB", 0],
                minlevel: 17,
                description: "\n    " + "Your grasp allows you to more easily interfere with the flow of ki in an opponent’s body. When you attempt a stunning strike against a creature you’re grappling with your Iron Grasp Technique, the creature has disadvantage on its saving throw.",

            }
        }
    }
);