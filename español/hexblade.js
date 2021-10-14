AddSubClass("warlock", "the hexblade", { // this code was translated by BanMePlox
    regExpSearch: /^(?=.*hexblade)(?=.*warlock).*$/i,
    subname: "the Hexblade",
    source: ["X", 55],
    spellcastingExtra: ["shield", "wrathful smite", "blur", "branding smite", "blink", "elemental weapon", "phantasmal killer", "staggering smite", "banishing smite", "cone of cold"],
    features: {
        "subclassfeature1": {
            name: "Maldición hex",
            source: ["X", 55],
            minlevel: 1,
            description: desc([
                "Como acción bonus, puedo maldecir a una criatura que pueda ver a 30 pies de mi durante 1 minuto.",
                "\u2022 Añado mi bonificador de competencia a las tiradas de daño contra la criatura maldita.",
                "\u2022 Mis tiradas de ataque contra la criatura maldita tienen el crítico reducido a 19 y 20.",
                "\u2022 Si la criatura muere durante la duración, recupero puntos de salud igual a mi nivel de brujo + mi modificador de carisma.",
                "La maldición termina tras un minuto, cuando la criatura muere o soy incapacitado. "
            ]),
            recovery: "short rest",
            usages: 1,
            action: ["bonus action", ""],
            calcChanges: {
                atkAdd: [
                    function(fields, v) {
                        if (!v.isDC && (/curse/i).test(v.WeaponTextName) && !v.CritChance) {
                            v.CritChance = 19;
                            fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20';
                        }
                    },
                    "Si introduzco la palabra 'Curse' en el nombre de un arma, se considerará que es un ataque contra un enemigo maldito automáticamente, añadiendo los modificadores.",
                    19
                ],
                atkCalc: [
                    function(fields, v, output) {
                        if ((/curse/i).test(v.WeaponTextName)) output.extraDmg += output.prof;
                    }, ""
                ]
            }
        },
        "subclassfeature1.1": {
            name: "Guerrero Hex",
            source: ["X", 55],
            minlevel: 1,
            description: desc([
                "Gano competencia con armaduras medias, escudos y armas marciales.",
                "Cuando termino un descanso largo, puedo imbuir un arma que toque a voluntad.",
                "Hasta mi próximo descanso largo, puedo usarla con carisma en lugar de fuerza o destreza.",
                "Tengo que ser competente con el arma y no puede tener la propiedad 'A dos manos'",
                "Este beneficio también funciona con todas las armas del pacto de la cuchilla, sin restricciones."
            ]),
            armorProfs: [false, true, false, true],
            weaponProfs: [false, true],
            calcChanges: {
                atkAdd: [
                    function(fields, v) {
                        var hasPactWeapon = GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade';
                        if (What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') && (v.pactWeapon || v.theWea.pactWeapon || (hasPactWeapon && (/\bpact\b/i).test(v.WeaponTextName)) || (/^(?=.*hexblade)(?!.*((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b).*$/i).test(v.WeaponText))) {
                            fields.Mod = 6;
                        };
                    },
                    "If I include the word 'Hexblade' in the name of a weapon that is not two-handed, it gets treated as the weapon I imbued to use Charisma instead of Strength or Dexterity, if my Charisma modifier is higher than the ability it would otherwise use. Alternatively, if I have the Pact of the Blade feature, this will also work if I include 'Pact' in the name of a weapon, regardless if it has the two-handed property."
                ]
            }
        },
        "subclassfeature6": {
            name: "Accursed Specter",
            source: [
                ["X", 56]
            ],
            minlevel: 6,
            description: desc([
                "Cuando mato a un humanoide, puedo maldecir su alma y alzarlo como un espiritu.",
                "Tiene las estadísticas de un espectro, con vida temporal igual a la mitad de mi nivel de brujo.",
                "Lanza iniciativa y tiene su propio turno, obedeciendo mis ordenes verbales.",
                "Gana un bono a los ataques igual a mi modificador de carisma. (Minimo +0)",
                "El espectro permanece hasta el final de mi próximo descanso largo, entonces desaparece."
            ]),
            additional: levels.map(function(n) { return n < 6 ? "" : Math.floor(n / 2) + " temp HP"; }),
            usages: 1,
            recovery: "long rest",
            creaturesAdd: [
                ["Accursed Specter", true]
            ],
            //JA SU PUTA MADRE VA A TRADUCIR TODO ESTO, Y UNA POLLA. MEJOR DEJO LA HABILIDAD EN INGLES Y TRADUZCO LA DESCRIPCIÓN SOLO. SI ALGÚN DÍA ME ANIMO YA LO HARÉ.
            creatureOptions: [{
                name: "Accursed Specter",
                nameAlt: ["Accursed Spectre"],
                source: [
                    ["X", 56]
                ],
                size: 3,
                type: "Undead",
                alignment: "Chaotic Evil",
                ac: 12,
                hp: 22,
                hd: [5, 8],
                speed: "fly 50 ft (hover)",
                scores: [1, 14, 11, 10, 10, 12],
                damage_resistances: "acid; cold; fire; lightning; thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
                damage_immunities: "necrotic, poison",
                condition_immunities: "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
                senses: "Darkvision 60 ft; While in sunlight, disadv. on Wis (Perception) checks using sight",
                passivePerception: 10,
                languages: "all languages it knew in life, but can't speak",
                challengeRating: "1",
                proficiencyBonus: 2,
                attacksAction: 1,
                attacks: [{
                    name: "Life Drain",
                    ability: 2,
                    damage: [3, 6, "necrotic"],
                    range: "Melee (5 ft)",
                    description: "DC 10 Con save or HP max reduced by same as damage taken until a long rest",
                    modifiers: ["max(oCha|0)", ""],
                    abilitytodamage: false,
                    tooltip: "A target of the specter's life drain must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
                }],
                traits: [{
                    name: "Incorporeal Movement",
                    description: "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
                }, {
                    name: "Sunlight Sensitivity",
                    description: "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
                }, {
                    name: "Life Drain",
                    description: "A target of the specter's life drain must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
                }],
                features: [{
                    name: "Bound Spirit",
                    description: "The specter obeys my verbal commands and remains in my service until the end of my next long rest, at which point it vanishes to the afterlife. It acts on its own turn with its own initiative."
                }],
                header: "Bound Spirit",
                eval: function(prefix) {
                    AddTooltip(prefix + 'Comp.Use.HP.Temp', "The accursed specter gains half my warlock level as temporary HP when created.");
                },
                removeeval: function(prefix) {
                    AddTooltip(prefix + 'Comp.Use.HP.Temp', "");
                },
                changeeval: function(prefix, newLvl) {
                    if (!classes.known.warlock) return;
                    Value(prefix + 'Comp.Use.HP.Temp', Math.floor(classes.known.warlock.level / 2));
                }
            }]
        },
        "subclassfeature10": {
            name: "Armadura de hex",
            source: ["X", 56],
            minlevel: 10,
            description: desc([
                "Como reacción cuando un recipiente de la maldición hex me impacta con un ataque, puedo lanzar un d6.",
                "En un resultado de 4 o superior, el ataque falla, independientemente de su d20."
            ])
        },
        "subclassfeature14": {
            name: "Maestro del hex",
            source: ["X", 56],
            minlevel: 14,
            description: desc([
                "Cuando el objetivo de mi maldición hex muere, puedo maldecir a otra persona que pueda ver a 30 pies",
                "No puedo hacer esto mientras esté incapacitado, y no recupero salud de la muerte del anterior"
            ])
        }
    }
});