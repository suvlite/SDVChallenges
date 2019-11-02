class SdvGenerator {

    constructor(difficulty) {
        switch (difficulty) {
            case 'Easy': {
                this.availablePoints = 320;
                this.maxValue = 99;
                break;
            }
            case 'Medium': {
                this.availablePoints = 240;
                this.maxValue = 25;
                break;
            }
            case 'Hard': {
                this.availablePoints = 180;
                this.maxValue = 18;
                break;
            }
            case 'Very Hard':
            default:
                this.availablePoints = 120;
                this.maxValue = 15;
        }

        this.data = {
            "crop": [{
                    "id": "BlueJazz",
                    "points": 2,
                    "tags": ["hasFlower"],
                    "name": "Blue Jazz",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/2/2f/Blue_Jazz.png",
                    "uuid": 0
                }, {
                    "id": "Cauliflower",
                    "points": 8,
                    "name": "Cauliflower",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png",
                    "uuid": 1
                }, {
                    "id": "CoffeeBean",
                    "points": 10,
                    "name": "Coffee Beans",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/33/Coffee_Bean.png",
                    "uuid": 2
                }, {
                    "id": "Garlic",
                    "points": 4,
                    "name": "Garlic",
                    "tags": ["hasOil"],
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/c/cc/Garlic.png",
                    "uuid": 3
                }, {
                    "id": "GreenBean",
                    "points": 6,
                    "name": "Green Beans",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/5/5c/Green_Bean.png",
                    "uuid": 4
                }, {
                    "id": "Kale",
                    "points": 7,
                    "name": "Kale",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/d/d1/Kale.png",
                    "uuid": 5
                }, {
                    "id": "Parsnip",
                    "points": 4,
                    "name": "Parsnip",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png",
                    "uuid": 6
                }, {
                    "id": "Potato",
                    "points": 8,
                    "name": "Potato",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png",
                    "uuid": 7
                }, {
                    "id": "Rhubarb",
                    "points": 8,
                    "name": "Rhubarb",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/6/6e/Rhubarb.png",
                    "uuid": 8
                }, {
                    "id": "Strawberry",
                    "points": 16,
                    "name": "Strawberry",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/6/6d/Strawberry.png",
                    "uuid": 9
                }, {
                    "id": "Tulip",
                    "points": 2,
                    "name": "Tulip",
                    "tags": ["hasFlower"],
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/c/cf/Tulip.png",
                    "uuid": 10
                }, {
                    "id": "Blueberry",
                    "points": 24,
                    "name": "Blueberry",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png",
                    "uuid": 11
                }, {
                    "id": "Corn",
                    "points": 6,
                    "name": "Corn",
                    "tags": ["hasOil"],
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png",
                    "uuid": 12
                }, {
                    "id": "Hops",
                    "points": 16,
                    "name": "Hops",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/5/59/Hops.png",
                    "uuid": 13
                }, {
                    "id": "HotPepper",
                    "points": 11,
                    "name": "Hot Pepper",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png",
                    "uuid": 14
                }, {
                    "id": "Melon",
                    "points": 16,
                    "name": "Melon",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png",
                    "uuid": 15
                }, {
                    "id": "Poppy",
                    "points": 6,
                    "name": "Poppy",
                    "season": "1",
                    "tags": ["hasFlower"],
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/37/Poppy.png",
                    "uuid": 16
                }, {
                    "id": "Radish",
                    "points": 9,
                    "name": "Radish",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/d/d5/Radish.png",
                    "uuid": 17
                }, {
                    "id": "RedCabbage",
                    "points": 16,
                    "name": "Red Cabbage",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/2/2d/Red_Cabbage.png",
                    "uuid": 18
                }, {
                    "id": "Starfruit",
                    "points": 24,
                    "name": "Starfruit",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/d/db/Starfruit.png",
                    "uuid": 19
                }, {
                    "id": "SummerSpangle",
                    "points": 5,
                    "name": "Summer Spangle",
                    "season": "1",
                    "tags": ["hasFlower"],
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/9f/Summer_Spangle.png",
                    "uuid": 20
                }, {
                    "id": "Sunflower",
                    "points": 4,
                    "name": "Sunflower",
                    "season": "1",
                    "tags": ["hasOil"],
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/81/Sunflower.png",
                    "uuid": 21
                }, {
                    "id": "Tomato",
                    "points": 11,
                    "name": "Tomato",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png",
                    "uuid": 22
                }, {
                    "id": "Wheat",
                    "points": 5,
                    "name": "Wheat",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/e/e2/Wheat.png",
                    "uuid": 23
                }, {
                    "id": "Amaranth",
                    "points": 12,
                    "name": "Amaranth",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/f/f6/Amaranth.png",
                    "uuid": 24
                }, {
                    "id": "Artichoke",
                    "points": 15,
                    "name": "Artichoke",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/d/dd/Artichoke.png",
                    "uuid": 25
                }, {
                    "id": "Beet",
                    "points": 12,
                    "name": "Beet",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/a/a4/Beet.png",
                    "uuid": 26
                }, {
                    "id": "BokChoy",
                    "points": 8,
                    "name": "Bok Choy",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/4/40/Bok_Choy.png",
                    "uuid": 27
                }, {
                    "id": "Cranberry",
                    "points": 22,
                    "name": "Cranberries",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cranberries.png",
                    "uuid": 28
                }, {
                    "id": "Eggplant",
                    "points": 13,
                    "name": "Eggplant",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/8f/Eggplant.png",
                    "uuid": 29
                }, {
                    "id": "FairyRose",
                    "points": 8,
                    "name": "Fairy Rose",
                    "tags": ["hasFlower"],
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/5/5c/Fairy_Rose.png",
                    "uuid": 30
                }, {
                    "id": "Grape",
                    "points": 19,
                    "name": "Grapes",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png",
                    "uuid": 31
                }, {
                    "id": "Pumpkin",
                    "points": 16,
                    "name": "Pumpkin",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png",
                    "uuid": 32
                }, {
                    "id": "Yam",
                    "points": 11,
                    "name": "Yam",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/5/52/Yam.png",
                    "uuid": 33
                }, {
                    "id": "AncientFruit",
                    "points": 30,
                    "name": "Ancient Fruit",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/0/01/Ancient_Fruit.png",
                    "uuid": 34
                }, {
                    "id": "CactusFruit",
                    "points": 12,
                    "name": "Cactus Fruit",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png",
                    "uuid": 35
                }, {
                    "id": "MixedSeeds",
                    "points": 8,
                    "name": "Mixed Seeds",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/2/2e/Mixed_Seeds.png",
                    "uuid": 36
                }, {
                    "id": "SweetGemBerry",
                    "points": 30,
                    "name": "Sweet Gem Berry",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/88/Sweet_Gem_Berry.png",
                    "uuid": 37
                }
            ],
            "animal": [{
                    "id": "Chicken",
                    "name": "Chicken",
                    "points": 5,
                    "tags": ["hasEgg"],
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/2/22/White_Chicken.png",
                    "uuid": 38
                }, {
                    "id": "Duck",
                    "name": "Duck",
                    "points": 3,
                    "tags": ["hasEgg"],
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/38/Duck.png",
                    "uuid": 39
                }, {
                    "id": "Rabbit",
                    "name": "Rabbit",
                    "points": 4,
                    "tags": ["hasWool"],
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/f/fd/Rabbit.png",
                    "uuid": 40
                }, {
                    "id": "Cow",
                    "name": "Cow",
                    "points": 6,
                    "tags": ["hasMilk"],
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/36/White_Cow.png",
                    "uuid": 41
                }, {
                    "id": "Goat",
                    "name": "Goat",
                    "points": 4,
                    "tags": ["hasMilk"],
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/5/52/Goat.png",
                    "uuid": 42
                }, {
                    "id": "Sheep",
                    "name": "Sheep",
                    "points": 4,
                    "tags": ["hasWool"],
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/c/cc/Sheep.png",
                    "uuid": 43
                }, {
                    "id": "Pig",
                    "name": "Pig",
                    "points": 5,
                    "tags": ["hasOil"],
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/30/Pig.png",
                    "uuid": 44
                }
            ],
            "artisan": [{
                    "id": "BeeHouse",
                    "points": 10,
                    "tags": ["hasAgeable"],
                    "condition": "hasFlower",
                    "name": "Bee House",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/c/ce/Bee_House.png",
                    "uuid": 45
                }, {
                    "id": "Cask",
                    "points": 10,
                    "condition": "hasAgeable",
                    "name": "Cask",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/7/7c/Cask.png",
                    "uuid": 46
                }, {
                    "id": "CheesePress",
                    "points": 15,
                    "tags": ["hasAgeable"],
                    "condition": "hasMilk",
                    "name": "Cheese Press",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/7/79/Cheese_Press.png",
                    "uuid": 47
                }, {
                    "id": "Keg",
                    "points": 20,
                    "tags": ["hasAgeable"],
                    "condition": "hasCrop",
                    "name": "Keg",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/7/7c/Keg.png",
                    "uuid": 48
                }, {
                    "id": "Loom",
                    "points": 12,
                    "condition": "hasWool",
                    "name": "Loom",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/3b/Loom.png",
                    "uuid": 49
                }, {
                    "id": "MayoMachine",
                    "points": 15,
                    "condition": "hasEgg",
                    "name": "Mayo Machine",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/e/ef/Mayonnaise_Machine.png",
                    "uuid": 50
                }, {
                    "id": "OilMaker",
                    "points": 10,
                    "condition": "hasOil",
                    "name": "Oil Maker",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/c/c5/Oil_Maker.png",
                    "uuid": 51
                }, {
                    "id": "PreservesJar",
                    "points": 15,
                    "name": "Preserves",
                    "condition": "hasCrop",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/1/1e/Preserves_Jar.png",
                    "uuid": 52
                }, {
                    "id": "Tapper",
                    "points": 6,
                    "name": "Tapper",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/d/da/Tapper.png",
                    "uuid": 53
                }
            ],
            "fish": [{
                    "id": "Albacore",
                    "name": "Albacore",
                    "points": 8,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/e/e1/Albacore.png",
                    "uuid": 54
                }, {
                    "id": "Anchovy",
                    "name": "Anchovy",
                    "points": 2,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/7/79/Anchovy.png",
                    "uuid": 55
                }, {
                    "id": "Carp",
                    "name": "Carp",
                    "points": 2,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/a/a8/Carp.png",
                    "uuid": 56
                }, {
                    "id": "Sunfish",
                    "name": "Sunfish",
                    "points": 2,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/5/56/Sunfish.png",
                    "uuid": 57
                }, {
                    "id": "Herring",
                    "name": "Herring",
                    "points": 2,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/f/f1/Herring.png",
                    "uuid": 58
                }, {
                    "id": "Sardine",
                    "name": "Sardine",
                    "points": 2,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/0/04/Sardine.png",
                    "uuid": 59
                }, {
                    "id": "Bream",
                    "name": "Bream",
                    "points": 3,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/82/Bream.png",
                    "uuid": 60
                }, {
                    "id": "Ghostfish",
                    "name": "Ghostfish",
                    "points": 3,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/7/72/Ghostfish.png",
                    "uuid": 61
                }, {
                    "id": "SmallmouthBass",
                    "name": "Smallmouth Bass",
                    "points": 3,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/a/a5/Smallmouth_Bass.png",
                    "uuid": 62
                }, {
                    "id": "RedSnapper",
                    "name": "Red Snapper",
                    "points": 3,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/d/d3/Red_Snapper.png",
                    "uuid": 63
                }, {
                    "id": "Chub",
                    "name": "Chub",
                    "points": 3,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/b/bd/Chub.png",
                    "uuid": 64
                }, {
                    "id": "Perch",
                    "name": "Perch",
                    "points": 3,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/4/43/Perch.png",
                    "uuid": 65
                }, {
                    "id": "Shad",
                    "name": "Shad",
                    "points": 3,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/e/ef/Shad.png",
                    "uuid": 66
                }, {
                    "id": "RainbowTrout",
                    "name": "Rainbow Trout",
                    "points": 5,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/1/14/Rainbow_Trout.png",
                    "uuid": 67
                }, {
                    "id": "Salmon",
                    "name": "Salmon",
                    "points": 5,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/e/e0/Salmon.png",
                    "uuid": 68
                }, {
                    "id": "RedMullet",
                    "name": "Red Mullet",
                    "points": 5,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/f/f2/Red_Mullet.png",
                    "uuid": 69
                }, {
                    "id": "SeaCucumber",
                    "name": "Sea Cucumber",
                    "points": 5,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/a/a9/Sea_Cucumber.png",
                    "uuid": 70
                }, {
                    "id": "Sandfish",
                    "name": "Sandfish",
                    "points": 5,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/b/bb/Sandfish.png",
                    "uuid": 71
                }, {
                    "id": "Bullhead",
                    "name": "Bullhead",
                    "points": 8,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/d/db/Bullhead.png",
                    "uuid": 72
                }, {
                    "id": "Tilapia",
                    "name": "Tilapia",
                    "points": 8,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/7/73/Tilapia.png",
                    "uuid": 73
                }, {
                    "id": "Albacore",
                    "name": "Albacore",
                    "points": 8,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/e/e1/Albacore.png",
                    "uuid": 74
                }, {
                    "id": "Woodskip",
                    "name": "Woodsip",
                    "points": 8,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/97/Woodskip.png",
                    "uuid": 75
                }, {
                    "id": "Squid",
                    "name": "Squid",
                    "points": 10,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/81/Squid.png",
                    "uuid": 76
                }, {
                    "id": "Halibut",
                    "name": "Halibut",
                    "points": 10,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/0/02/Halibut.png",
                    "uuid": 77
                }, {
                    "id": "Eel",
                    "name": "Eel",
                    "points": 10,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/91/Eel.png",
                    "uuid": 78
                }, {
                    "id": "Tuna",
                    "name": "Tuna",
                    "points": 12,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/c/c5/Tuna.png",
                    "uuid": 79
                }, {
                    "id": "LargemouthBass",
                    "name": "Largemouth Bass",
                    "points": 15,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/1/11/Largemouth_Bass.png",
                    "uuid": 80
                }, {
                    "id": "Pike",
                    "name": "Pike",
                    "points": 12,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/31/Pike.png",
                    "uuid": 81
                }, {
                    "id": "Dorado",
                    "name": "Dorado",
                    "points": 12,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/1/18/Dorado.png",
                    "uuid": 82
                }, {
                    "id": "Slimejack",
                    "name": "Slimejack",
                    "points": 12,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/34/Slimejack.png",
                    "uuid": 83
                }, {
                    "id": "Walleye",
                    "name": "Walleye",
                    "points": 10,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/0/05/Walleye.png",
                    "uuid": 84
                }, {
                    "id": "Lingcod",
                    "name": "Lingcod",
                    "points": 12,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/87/Lingcod.png",
                    "uuid": 85
                }, {
                    "id": "Octopus",
                    "name": "Octopus",
                    "points": 12,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/5/5a/Octopus.png",
                    "uuid": 86
                }, {
                    "id": "ScorpionCarp",
                    "name": "Scorpion Carp",
                    "points": 12,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/7/76/Scorpion_Carp.png",
                    "uuid": 87
                }, {
                    "id": "TigerTrout",
                    "name": "Tiger Trout",
                    "points": 12,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/0/01/Tiger_Trout.png",
                    "uuid": 88
                }, {
                    "id": "VoidSalmon",
                    "name": "Void Salmon",
                    "points": 5,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/a/ad/Void_Salmon.png",
                    "uuid": 89
                }, {
                    "id": "Pufferfish",
                    "name": "Pufferfish",
                    "points": 15,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/b/ba/Pufferfish.png",
                    "uuid": 90
                }, {
                    "id": "Catfish",
                    "name": "Catfish",
                    "points": 12,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/99/Catfish.png",
                    "uuid": 91
                }, {
                    "id": "Sturgeon",
                    "name": "Sturgeon",
                    "points": 12,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/4/42/Sturgeon.png",
                    "uuid": 92
                }, {
                    "id": "SuperCucumber",
                    "name": "Super Cucumber",
                    "points": 12,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/d/d5/Super_Cucumber.png",
                    "uuid": 93
                }, {
                    "id": "Stonefish",
                    "name": "Stonefish",
                    "points": 10,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/0/03/Stonefish.png",
                    "uuid": 94
                }, {
                    "id": "IcePip",
                    "name": "Ice Pip",
                    "points": 10,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/6/63/Ice_Pip.png",
                    "uuid": 95
                }, {
                    "id": "LavaEel",
                    "name": "Lava Eel",
                    "points": 15,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/1/12/Lava_Eel.png",
                    "uuid": 96
                }, {
                    "id": "NightFish",
                    "name": "Night Fish",
                    "points": 15,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/83/Midnight_Squid.png",
                    "uuid": 97
                }, {
                    "id": "CrabPot",
                    "name": "Crab Pot",
                    "points": 20,
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/92/Crab_Pot.png",
                    "uuid": 98
                }
            ],
            "maps": [{
                    "id": "StandardMap",
                    "points": 30,
                    "name": "Standard Map",
                    "bgurl": "https://stardewvalleywiki.com/mediawiki/images/thumb/d/de/Standard_Farm.png/294px-Standard_Farm.png",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/0/05/Standard_Farm_Map_Icon.png",
                    "uuid": 99
                }, {
                    "id": "RiverlandMap",
                    "points": 10,
                    "name": "Riverlands",
                    "bgurl": "https://stardewvalleywiki.com/mediawiki/images/thumb/a/ad/Riverlands_Farm.png/294px-Riverlands_Farm.png",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/4/4a/Riverland_Farm_Map_Icon.png",
                    "uuid": 100
                }, {
                    "id": "ForestMap",
                    "points": 10,
                    "name": "Forest Map",
                    "bgurl": "https://stardewvalleywiki.com/mediawiki/images/thumb/6/64/Forest_Farm.png/294px-Forest_Farm.png",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/7/77/Forest_Farm_Map_Icon.png",
                    "uuid": 101
                }, {
                    "id": "WildernessMap",
                    "points": 20,
                    "name": "Wilderness Map",
                    "bgurl": "https://stardewvalleywiki.com/mediawiki/images/thumb/f/fd/Wilderness_Farm.png/294px-Wilderness_Farm.png",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/36/Wilderness_Farm_Map_Icon.png",
                    "uuid": 102
                }, {
                    "id": "HilltopMap",
                    "points": 15,
                    "name": "Hilltop Map",
                    "bgurl": "https://stardewvalleywiki.com/mediawiki/images/thumb/4/40/Hilltop_Farm.png/294px-Hilltop_Farm.png",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/7/74/Hilltop_Farm_Map_Icon.png",
                    "uuid": 103
                }
            ],
            "tool": [{
                    "id": "Tools",
                    "points": 4,
                    "name": "Tools",
                    "tiers": [{
                            "id": 0,
                            "url": "https://stardewvalleywiki.com/mediawiki/images/5/51/Watering_Can.png",
                            "name": "Basic"
                        }, {
                            "id": 1,
                            "url": "https://stardewvalleywiki.com/mediawiki/images/0/0d/Copper_Watering_Can.png",
                            "name": "Copper"
                        }, {
                            "id": 2,
                            "url": "https://stardewvalleywiki.com/mediawiki/images/6/66/Steel_Watering_Can.png",
                            "name": "Steel"
                        }, {
                            "id": 3,
                            "url": "https://stardewvalleywiki.com/mediawiki/images/7/74/Gold_Watering_Can.png",
                            "name": "Gold"
                        }, {
                            "id": 4,
                            "url": "https://stardewvalleywiki.com/mediawiki/images/5/5e/Iridium_Watering_Can.png",
                            "name": "Iridium"
                        }
                    ],
                    "uuid": 104
                }, {
                    "id": "Sprinkler",
                    "points": 6,
                    "name": "Sprinklers",
                    "condition": "hasCrop",
                    "tiers": [{
                            "id": 0,
                            "url": "http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png",
                            "name": "Forbidden"
                        }, {
                            "id": 1,
                            "url": "https://stardewvalleywiki.com/mediawiki/images/0/08/Sprinkler.png",
                            "name": "Basic"
                        }, {
                            "id": 2,
                            "url": "https://stardewvalleywiki.com/mediawiki/images/a/af/Quality_Sprinkler.png",
                            "name": "Quality"
                        }, {
                            "id": 3,
                            "url": "https://stardewvalleywiki.com/mediawiki/images/9/90/Iridium_Sprinkler.png",
                            "name": "Iridium"
                        }
                    ],
                    "uuid": 105
                }
            ],
            "forage": [{
                    "id": "WildHorseRadish",
                    "points": 1,
                    "name": "Wild Horseradish",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png",
                    "uuid": 106
                }, {
                    "id": "Daffodil",
                    "points": 1,
                    "name": "Daffodil",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/4/4b/Daffodil.png",
                    "uuid": 107
                }, {
                    "id": "Leek",
                    "points": 2,
                    "name": "Leek",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png",
                    "uuid": 108
                }, {
                    "id": "Dandelion",
                    "points": 2,
                    "name": "Dandelion",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/b/b1/Dandelion.png",
                    "uuid": 109
                }, {
                    "id": "SpringOnion",
                    "points": 1,
                    "name": "Spring Onion",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/0/0c/Spring_Onion.png",
                    "uuid": 110
                }, {
                    "id": "Morel",
                    "points": 2,
                    "name": "Morel",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/b/b1/Morel.png",
                    "uuid": 111
                }, {
                    "id": "CommonMushroom",
                    "points": 1,
                    "name": "Common Mushroom",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/2/2e/Common_Mushroom.png",
                    "uuid": 112
                }, {
                    "id": "Salmonberry",
                    "points": 0,
                    "name": "Salmonberry",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/5/59/Salmonberry.png",
                    "uuid": 113
                }, {
                    "id": "SpiceBerry",
                    "points": 2,
                    "name": "Spice Berry",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/c/c6/Spice_Berry.png",
                    "uuid": 114
                }, {
                    "id": "SweetPea",
                    "points": 2,
                    "name": "Sweet Pea",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/d/d9/Sweet_Pea.png",
                    "uuid": 115
                }, {
                    "id": "RedMushroom",
                    "points": 2,
                    "name": "Red Mushroom",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/e/e1/Red_Mushroom.png",
                    "uuid": 116
                }, {
                    "id": "FiddleheadFern",
                    "points": 2,
                    "name": "Fiddlehead Fern",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/4/48/Fiddlehead_Fern.png",
                    "uuid": 117
                }, {
                    "id": "WildPlum",
                    "points": 2,
                    "name": "WildPlum",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/3b/Wild_Plum.png",
                    "uuid": 118
                }, {
                    "id": "Hazelnut",
                    "points": 3,
                    "name": "Hazelnut",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/31/Hazelnut.png",
                    "uuid": 119
                }, {
                    "id": "Blackberry",
                    "points": 0,
                    "name": "Blackberry",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/2/25/Blackberry.png",
                    "uuid": 120
                }, {
                    "id": "Chanterelle",
                    "points": 2,
                    "name": "Chanterelle",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/1/1d/Chanterelle.png",
                    "uuid": 121
                }, {
                    "id": "WinterRoot",
                    "points": 1,
                    "name": "Winter Root",
                    "season": "3",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/1/11/Winter_Root.png",
                    "uuid": 122
                }, {
                    "id": "CrystalFruit",
                    "points": 3,
                    "name": "Crystal Fruit",
                    "season": "3",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/1/16/Crystal_Fruit.png",
                    "uuid": 123
                }, {
                    "id": "SnowYam",
                    "points": 2,
                    "name": "SnowYam",
                    "season": "3",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/3f/Snow_Yam.png",
                    "uuid": 124
                }, {
                    "id": "Crocus",
                    "points": 1,
                    "name": "Crocus",
                    "season": "3",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/2/2f/Crocus.png",
                    "uuid": 125
                }, {
                    "id": "Holly",
                    "points": 2,
                    "name": "Holly",
                    "season": "3",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/b/b8/Holly.png",
                    "uuid": 126
                }, {
                    "id": "Beach",
                    "points": 5,
                    "name": "Beach Forage",
                    "season": "3",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/3d/Rainbow_Shell.png",
                    "uuid": 127
                }, {
                    "id": "ApricotTree",
                    "points": 3,
                    "name": "Apricot Tree",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/9d/Apricot_Sapling.png",
                    "uuid": 128
                }, {
                    "id": "CherryTree",
                    "points": 3,
                    "name": "Cherry Tree",
                    "season": "0",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/2/22/Cherry_Sapling.png",
                    "uuid": 129
                }, {
                    "id": "OrangeTree",
                    "points": 3,
                    "name": "Orange Tree",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/0/08/Orange_Sapling.png",
                    "uuid": 130
                }, {
                    "id": "PeachTree",
                    "points": 3,
                    "name": "Peach Tree",
                    "season": "1",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/e/e3/Peach_Sapling.png",
                    "uuid": 131
                }, {
                    "id": "AppleTree",
                    "points": 3,
                    "name": "Apple Tree",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/6/68/Apple_Sapling.png",
                    "uuid": 132
                }, {
                    "id": "PomegranateTree",
                    "points": 3,
                    "name": "Pome. Tree",
                    "season": "2",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/1/10/Pomegranate_Sapling.png",
                    "uuid": 133
                }
            ],
            "mats": [{
                    "id": "Wood",
                    "points": 1,
                    "name": "Wood",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/d/df/Wood.png",
                    "uuid": 134
                }, {
                    "id": "HardWood",
                    "points": 3,
                    "name": "Hardwood",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/e/ed/Hardwood.png",
                    "uuid": 135
                }, {
                    "id": "Stone",
                    "points": 1,
                    "name": "Stone",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/d/d4/Stone.png",
                    "uuid": 136
                }, {
                    "id": "Copper",
                    "points": 2,
                    "name": "Copper",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/7/78/Copper_Ore.png",
                    "alturl": "https://stardewvalleywiki.com/mediawiki/images/f/f1/Copper_Bar.png",
                    "uuid": 137
                }, {
                    "id": "Iron",
                    "points": 3,
                    "name": "Iron",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/87/Iron_Ore.png",
                    "alturl": "https://stardewvalleywiki.com/mediawiki/images/6/6c/Iron_Bar.png",
                    "uuid": 138
                }, {
                    "id": "Gold",
                    "points": 4,
                    "name": "Gold",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/f/f7/Gold_Ore.png",
                    "alturl": "https://stardewvalleywiki.com/mediawiki/images/4/4e/Gold_Bar.png",
                    "uuid": 139
                }, {
                    "id": "Iridium",
                    "points": 5,
                    "name": "Iridium",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/e/e9/Iridium_Ore.png",
                    "alturl": "https://stardewvalleywiki.com/mediawiki/images/c/c4/Iridium_Bar.png",
                    "uuid": 140
                }
            ],
            "npc": [{
                    "id": "Caroline",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png",
                    "uuid": 141
                }, {
                    "id": "Clint",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png",
                    "uuid": 142
                }, {
                    "id": "Demetrius",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png",
                    "uuid": 143
                }, {
                    "id": "Dwarf",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png",
                    "uuid": 144
                }, {
                    "id": "Evelyn",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png",
                    "uuid": 145
                }, {
                    "id": "George",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/7/78/George.png",
                    "uuid": 146
                }, {
                    "id": "Gus",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png",
                    "uuid": 147
                }, {
                    "id": "Jas",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png",
                    "uuid": 148
                }, {
                    "id": "Jodi",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png",
                    "uuid": 149
                }, {
                    "id": "Kent",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png",
                    "uuid": 150
                }, {
                    "id": "Krobus",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png",
                    "uuid": 151
                }, {
                    "id": "Lewis",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png",
                    "uuid": 152
                }, {
                    "id": "Linus",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/3/31/Linus.png",
                    "uuid": 153
                }, {
                    "id": "Marnie",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png",
                    "uuid": 154
                }, {
                    "id": "Pam",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png",
                    "uuid": 155
                }, {
                    "id": "Pierre",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png",
                    "uuid": 156
                }, {
                    "id": "Robin",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png",
                    "uuid": 157
                }, {
                    "id": "Sandy",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png",
                    "uuid": 158
                }, {
                    "id": "Vincent",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png",
                    "uuid": 159
                }, {
                    "id": "Willy",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png",
                    "uuid": 160
                }, {
                    "id": "Wizard",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png",
                    "uuid": 161
                }, {
                    "id": "Alex",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png",
                    "uuid": 162
                }, {
                    "id": "Elliott",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png",
                    "uuid": 163
                }, {
                    "id": "Harvey",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png",
                    "uuid": 164
                }, {
                    "id": "Sam",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png",
                    "uuid": 165
                }, {
                    "id": "Sebastian",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png",
                    "uuid": 166
                }, {
                    "id": "Shane",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png",
                    "uuid": 167
                }, {
                    "id": "Abigail",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png",
                    "uuid": 168
                }, {
                    "id": "Emily",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png",
                    "uuid": 169
                }, {
                    "id": "Haley",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png",
                    "uuid": 170
                }, {
                    "id": "Leah",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png",
                    "uuid": 171
                }, {
                    "id": "Maru",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png",
                    "uuid": 172
                }, {
                    "id": "Penny",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png",
                    "uuid": 173
                }
            ],
            "marriage": [{
                    "id": "Alex",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png",
                    "uuid": 174
                }, {
                    "id": "Elliott",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png",
                    "uuid": 175
                }, {
                    "id": "Harvey",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png",
                    "uuid": 176
                }, {
                    "id": "Sam",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png",
                    "uuid": 177
                }, {
                    "id": "Sebastian",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png",
                    "uuid": 178
                }, {
                    "id": "Shane",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png",
                    "uuid": 179
                }, {
                    "id": "Abigail",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png",
                    "uuid": 180
                }, {
                    "id": "Emily",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png",
                    "uuid": 181
                }, {
                    "id": "Haley",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png",
                    "uuid": 182
                }, {
                    "id": "Leah",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png",
                    "uuid": 183
                }, {
                    "id": "Maru",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png",
                    "uuid": 184
                }, {
                    "id": "Penny",
                    "imgurl": "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png",
                    "uuid": 185
                }
            ]
        }
        
        this.result = new Set();
        this.tags = new Set();
        this.sorted = {
            crop: new Set(),
            forage: new Set(),
            animal: new Set(),
            fish: new Set(),
            tool: new Set(),
            artisan: new Set(),
            mats: new Set(),
            maps: new Set(),
            npc: new Set(),
            marriage: new Set()
        }
    }

    weights = {
        crop: 3,
        forage: 3,
        animal: 3,
        fish: 7,
        artisan: 6,
        tool: 7,
        mats: 6
    }

    cropSeasonWeight = {
        '0': 0,
        '1': 0,
        '2': 0,
    }

    forageSeasonWeight = {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0
    }

    selectRandom(selection) {
        let rand = Math.random();
        rand *= selection.length;
        rand = Math.floor(rand);
        return selection[rand];
    }

    satisfiesCondition(object) {
        if (object.condition == null) {
            return true
        }
        return this.tags.has(object.condition);
    }

    addSelect(object, category = null) {
        if (object.points == null) {
            object.points = 0;
        }
        if (this.availablePoints < object.points || !this.satisfiesCondition(object)) {
            return false;
        }
        if ((category !== 'animal' && category !== 'tool') && this.result.has(object)) {
            return false;
        }
        if (category !== 'maps' && this.maxValue < object.points) {
            return false;
        }
        if (category === 'tool') {
            let existingTool = [...this.result].find(obj => obj.id === object.id);
            if (existingTool) {
                if (existingTool.id === 'Tools' && existingTool.tier >= 4) {
                    return false;
                }
                if (existingTool.id === 'Sprinkler' && existingTool.tier >= 3) {
                    return false;
                }
                if (existingTool.tier + 1 * object.points > this.maxValue) {
                    return false;
                }
                existingTool.tier++;
            }
        }
        if (category === 'animal' && this.result.has(object)) {
            let existingAnimal = [...this.result].find(obj => obj.id === object.id);
            if (existingAnimal.count >= 8 || (existingAnimal.count + 1) * object.points > this.maxValue) {
                return false;
            }
            existingAnimal.count++;
        }
        if (category === 'animal' && !this.result.has(object)) {
            object.count = 1;
        }
        this.availablePoints -= object.points;
        this.result.add(object);
        if (category != null) {
            this.tags.add('has' + category.charAt(0).toUpperCase() + category.substr(1).toLowerCase());
        }
        if (object.tags && object.tags.length) {
            object.tags.forEach(tag => this.tags.add(tag))
        }
        this.sorted[category].add(object);
        return true;
    }

    pickCategory() {
        let categories = Object.keys(this.weights);
        let weightClone = JSON.parse(JSON.stringify(this.weights));
        while (true) {
            let randomCat = this.selectRandom(categories);
            weightClone[randomCat]--;
            if (weightClone[randomCat] <= 0) {
                return randomCat;
            }
        }
    }

    selectCrop(crops, weights) {
        let minVal = Math.min(...Object.values(weights));
        let seasons = Object.keys(weights).filter(season => weights[season] === minVal);
        let selection = crops.filter(crop => crop.season == null || seasons.includes(crop.season));
        let crop = this.selectRandom(selection);
        if (crop.season) {
            weights[crop.season]++;
        }
        return crop;
    }

    selectMap() {
        let selection = this.selectRandom(this.data.maps)
        this.addSelect(selection, 'maps');
    }

    selectNpc(count) {
        while (count > 0) {
            let selection = this.selectRandom(this.data.npc);
            if (this.addSelect(selection, 'npc')) {
                count--;
            }
        }
    }

    selectMarriage() {
        let selection = this.selectRandom(this.data.marriage);
        this.addSelect(selection, 'marriage');
    }
   
    generate() {
        let basicTool = this.data.tool[0];
        basicTool.tier = 0;
        this.addSelect(basicTool, 'tool');
        let basicSprinkler = this.data.tool[1];
        basicSprinkler.tier = 0;
        basicSprinkler.condition = null;
        this.addSelect(basicSprinkler, 'tool');
        this.selectMap();
        this.selectNpc(3);
        this.selectMarriage();

        while (this.availablePoints > 5) {
            let cat = this.pickCategory();
            let selection;
            if (cat === 'crop') {
                selection = this.selectCrop(this.data[cat], this.cropSeasonWeight)
            } else if (cat === 'forage') {
                selection = this.selectCrop(this.data[cat], this.forageSeasonWeight)
            } else {
                selection = this.selectRandom(this.data[cat]);
            }
            if (this.addSelect(selection, cat)) {
                this.weights[cat]++;
            }
        }

        return {
            crop: [...this.sorted.crop],
            forage: [...this.sorted.forage],
            animal: [...this.sorted.animal],
            fish: [...this.sorted.fish],
            tool: [...this.sorted.tool],
            artisan: [...this.sorted.artisan],
            mats: [...this.sorted.mats],
            npc: [...this.sorted.npc],
            marriage: [...this.sorted.marriage][0],
            maps: [...this.sorted.maps][0]
        };
    }

    loadSave(saveCode) {
        let parts = saveCode.split("-");
        let code = parts[0];
        let detailCode = parts[1];
        let details = {};
        for(let i=0; i < detailCode.length; i+=3) {
            details[parseInt(detailCode.substr(i,2), 36)] = parseInt(detailCode.substr(i+2,1));
        }
        let idList = [];
        for(let i=0; i < code.length; i+=2) {
            idList.push(parseInt(code.substr(i,2), 36));
        }

        idList.forEach(id => {
            Object.keys(this.data).some(key => {
                let found = this.data[key].find(object => object.uuid === id);
                if (found) {
                    if (details[id] != null) {
                        if (key === 'animal') {
                            found.count = details[id];
                        }
                        if (key === 'tool') {
                            found.tier = details[id];
                        }
                    }
                    this.sorted[key].add(found);
                    return true;
                } else {
                    return false;
                }
            })
        });

        return {
            crop: [...this.sorted.crop],
            forage: [...this.sorted.forage],
            animal: [...this.sorted.animal],
            fish: [...this.sorted.fish],
            tool: [...this.sorted.tool],
            artisan: [...this.sorted.artisan],
            mats: [...this.sorted.mats],
            npc: [...this.sorted.npc],
            marriage: [...this.sorted.marriage][0],
            maps: [...this.sorted.maps][0]
        };
    }
}


var app = new Vue({
    el: '#app',
    mounted: function () {
        var slider = document.getElementById('slider');
        noUiSlider.create(slider, {
            start: [100],
            step: 100,
            range: {
                'min': 100,
                'max': 400
            }
        });
        const urlParams = new URLSearchParams(window.location.search);
        this.saveCode = urlParams.get('code');

        slider.noUiSlider.on('set', this.updateSlider);
        if (this.saveCode != null) {
            let gen = new SdvGenerator();
            this.genResult = gen.loadSave(this.saveCode);
            this.sections = Object.keys(this.genResult).filter(section => this.genResult[section].length && section !== 'npc');
        }
    },
    data: {
        difficulty: 'Easy',
        genResult: null,
        saveCode: null,
        sections: [],
        copy: {
            'section-title': {
                'crop': 'Crops',
                'forage': 'Forage',
                'animal': 'Animals',
                'maps': 'Farm type',
                'artisan': 'Artisan',
                'fish': 'Fish',
                'tool': 'Tools',
                'mats': 'Materials',
                'goals': 'Goals'
            },
            'section-subtitle': {
                'tool': '(Max. Tier)',
                'mats': '(Buy/Sell)',
                'goals': '(end of 3rd year)'
            }
        }
    },
    methods: {
        updateSlider: function (values, handle) {
            switch (values[0]) {
                case '100.00': {
                    this.difficulty = 'Easy';
                    break;
                }
                case '200.00': {
                    this.difficulty = 'Medium';
                    break;
                }
                case '300.00': {
                    this.difficulty = 'Hard';
                    break;
                }
                case '400.00':
                default: {
                    this.difficulty = 'Very Hard'
                }
            }
        },
        generate: function () {
            let gen = new SdvGenerator(this.difficulty);
            this.genResult = gen.generate();
            this.sections = Object.keys(this.genResult).filter(section => this.genResult[section].length && section !== 'npc');
            this.saveCode = Object.values(this.genResult).flat().map(object => {
                let id = object.uuid.toString(36);
                if (id.length === 1) {
                    id = "0" + id;
                }
                return id;
            }).join('');
            let detailCode = '-';
            this.genResult['animal'].forEach(animal => {
                detailCode += animal.uuid.toString(36)+animal.count;
            })
            this.genResult['tool'].forEach(animal => {
                detailCode += animal.uuid.toString(36)+animal.tier;
            })
            this.saveCode += detailCode;
        }
    }
})