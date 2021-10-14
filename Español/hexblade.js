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
            name: "Espectro maldito",
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
                ["Espectro maldito", true]
            ],
            creatureOptions: [{
                name: "Espectro maldito",
                nameAlt: ["Espectro maldito"],
                source: [
                    ["X", 56]
                ],
                size: 3,
                type: "No muerto",
                alignment: "Caótico malvado",
                ac: 12,
                hp: 22,
                hd: [5, 8],
                speed: "Vuelo 50 ft (planeo)",
                scores: [1, 14, 11, 10, 10, 12],
                damage_resistances: "acido; frio; fuego; rayo; trueno; contundente, perforante, y cortante de armas no mágicas",
                damage_immunities: "necrótico, veneno",
                condition_immunities: "atraido, agotamiento, agarrado, paralizdo, petrificado, envenenado, tumbado, agarrado, inconsciente",
                senses: "Vision en la oscuridad 60 ft; Bajo el sol, desventaja en tiradas de Sab(Percepcion) usando la vista",
                passivePerception: 10,
                languages: "lenguajes conocidos en vida, pero no puede hablar",
                challengeRating: "1",
                proficiencyBonus: 2,
                attacksAction: 1,
                attacks: [{
                    name: "Drenaje de vida",
                    ability: 2,
                    damage: [3, 6, "necrótico"],
                    range: "Melee (5 ft)",
                    description: "Salvación de DC 10 Con  o reduce la salud máxima igual al daño recibido hasta el próximo descanso largo",
                    modifiers: ["max(oCha|0)", ""],
                    abilitytodamage: false,
                    tooltip: "Salvación de DC 10 Con  o reduce la salud máxima igual al daño recibido hasta el próximo descanso largo",
                }],
                traits: [{
                    name: "Movimiento incorpóreo",
                    description: "El espectro puede moverse a través de criaturas y objetos como si fueran terreno difícil.Recibe 5 (1d10) daño de fuerza si termina el turno dentro de un objeto."
                }, {
                    name: "Hipersensibilidad solar",
                    description: "Bajo el sol, el espectro tiene desventajas en tiradas de ataque, igual que en tiradas de Sab(Percepcion) para tiradas que dependan de la vista"
                }, {
                    name: "Drenaje de vida",
                    description: "Salvación de DC 10 Con  o reduce la salud máxima igual al daño recibido hasta el próximo descanso largo"
                }],
                features: [{
                    name: "Espíritu atado",
                    description: "El espectro obedece mis ordenes verbales y permanece a mi servicio hasta el final de mi próximo descanso largo, punto en el que desaparece. Tiene su propia iniciativa y actua en su propio turno, aunque obedece tus ordenes verbales."
                }],
                header: "Espíritu atado",
                eval: function(prefix) {
                    AddTooltip(prefix + 'Comp.Use.HP.Temp', "El espectro maldito gana vida temporal igual a la mitad de mi nivel de brujo.");
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