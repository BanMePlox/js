{
	"name": "Time Surge",
	"level": 2,
	"school": "T",
	"time": [
		{
			"number": 1,
			"unit": "bonus"
		}
	],
	"range": {
		"type": "point",
		"distance": {
			"type": "feet",
			"amount": 30
		}
	},
	"duration": [
		{
			"type": "timed",
			"duration": {
				"type": "minute",
				"amount": 1,
				"upTo": true
			},
			"concentration": true
		}
	],
	"classes": {
		"fromClassList": [
			{
				"name": "Bard",
				"source": "PHB"
			},
			{
				"name": "Sorcerer",
				"source": "PHB"
			},
			{
				"name": "Ranger",
				"source": "PHB"
			},
			{
				"name": "Warlock",
				"source": "PHB"
			},
			{
				"name": "Wizard",
				"source": "PHB"
			}
		]
	},
	"entries": [
		"Choose a willing creature that you can see within range. Until the spell ends, the target's speed is increased on 30 feet and it gains a +2 bonus to AC."
	],
	"source": "TimeSurge",
	"page": 0,
	"components": {
		"v": true,
		"s": true,
		"m": "A shaving of liquorice root"
	},
	"miscTags": [
		"MAC"
	],
	"areaTags": [
		"ST"
	]
}
