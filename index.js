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
            crop: [
                {
                    id: 'BlueJazz',
                    points: 2,
                    tags: ['hasFlower'],
                    name: 'Blue Jazz',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/2/2f/Blue_Jazz.png'
                },
                {
                    id: 'Cauliflower',
                    points: 8,
                    name: 'Cauliflower',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png'
                },
                {
                    id: 'CoffeeBean',
                    points: 10,
                    name: 'Coffee Beans',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/33/Coffee_Bean.png'
                },
                {
                    id: 'Garlic',
                    points: 4,
                    name: 'Garlic',
                    tags: ['hasOil'],
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/c/cc/Garlic.png'
                },
                {
                    id: 'GreenBean',
                    points: 6,
                    name: 'Green Beans',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/5/5c/Green_Bean.png'
                },
                {
                    id: 'Kale',
                    points: 7,
                    name: 'Kale',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/d/d1/Kale.png'
                },
                {
                    id: 'Parsnip',
                    points: 4,
                    name: 'Parsnip',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png'
                },
                {
                    id: 'Potato',
                    points: 8,
                    name: 'Potato',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png'
                },
                {
                    id: 'Rhubarb',
                    points: 8,
                    name: 'Rhubarb',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/6/6e/Rhubarb.png'
                },
                {
                    id: 'Strawberry',
                    points: 16,
                    name: 'Strawberry',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/6/6d/Strawberry.png'
                },
                {
                    id: 'Tulip',
                    points: 2,
                    name: 'Tulip',
                    tags: ['hasFlower'],
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/c/cf/Tulip.png'
                },
                {
                    id: 'Blueberry',
                    points: 24,
                    name: 'Blueberry',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png'
                },
                {
                    id: 'Corn',
                    points: 6,
                    name: 'Corn',
                    tags: ['hasOil'],
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png'
                },
                {
                    id: 'Hops',
                    points: 16,
                    name: 'Hops',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/5/59/Hops.png'
                },
                {
                    id: 'HotPepper',
                    points: 11,
                    name: 'Hot Pepper',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png'
                },
                {
                    id: 'Melon',
                    points: 16,
                    name: 'Melon',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png'
                },
                {
                    id: 'Poppy',
                    points: 6,
                    name: 'Poppy',
                    season: '1',
                    tags: ['hasFlower'],
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/37/Poppy.png'
                },
                {
                    id: 'Radish',
                    points: 9,
                    name: 'Radish',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/d/d5/Radish.png'
                },
                {
                    id: 'RedCabbage',
                    points: 16,
                    name: 'Red Cabbage',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/2/2d/Red_Cabbage.png'
                },
                {
                    id: 'Starfruit',
                    points: 24,
                    name: 'Starfruit',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/d/db/Starfruit.png'
                },
                {
                    id: 'SummerSpangle',
                    points: 5,
                    name: 'Summer Spangle',
                    season: '1',
                    tags: ['hasFlower'],
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/9f/Summer_Spangle.png'
                },
                {
                    id: 'Sunflower',
                    points: 4,
                    name: 'Sunflower',
                    season: '1',
                    tags: ['hasOil'],
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/81/Sunflower.png'
                },
                {
                    id: 'Tomato',
                    points: 11,
                    name: 'Tomato',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png'
                },
                {
                    id: 'Wheat',
                    points: 5,
                    name: 'Wheat',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/e/e2/Wheat.png'
                },
                {
                    id: 'Amaranth',
                    points: 12,
                    name: 'Amaranth',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/f/f6/Amaranth.png'
                },
                {
                    id: 'Artichoke',
                    points: 15,
                    name: 'Artichoke',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/d/dd/Artichoke.png'
                },
                {
                    id: 'Beet',
                    points: 12,
                    name: 'Beet',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/a/a4/Beet.png'
                },
                {
                    id: 'BokChoy',
                    points: 8,
                    name: 'Bok Choy',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/4/40/Bok_Choy.png'
                },
                {
                    id: 'Cranberry',
                    points: 22,
                    name: 'Cranberries',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/6/6e/Cranberries.png'
                },
                {
                    id: 'Eggplant',
                    points: 13,
                    name: 'Eggplant',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/8f/Eggplant.png'
                },
                {
                    id: 'FairyRose',
                    points: 8,
                    name: 'Fairy Rose',
                    tags: ['hasFlower'],
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/5/5c/Fairy_Rose.png'
                },
                {
                    id: 'Grape',
                    points: 19,
                    name: 'Grapes',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png'
                },
                {
                    id: 'Pumpkin',
                    points: 16,
                    name: 'Pumpkin',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png'
                },
                {
                    id: 'Yam',
                    points: 11,
                    name: 'Yam',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/5/52/Yam.png'
                },
                {
                    id: 'AncientFruit',
                    points: 30,
                    name: 'Ancient Fruit',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/0/01/Ancient_Fruit.png'
                },
                {
                    id: 'CactusFruit',
                    points: 12,
                    name: 'Cactus Fruit',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png'
                },
                {
                    id: 'MixedSeeds',
                    points: 8,
                    name: 'Mixed Seeds',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/2/2e/Mixed_Seeds.png'
                },
                {
                    id: 'SweetGemBerry',
                    points: 30,
                    name: 'Sweet Gem Berry',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/88/Sweet_Gem_Berry.png'
                },
                // {
                //     id: 'WildSeeds',
                //     points: 10,
                //     name: 'Wild Seeds',
                //     imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/39/Spring_Seeds.png'
                // },
            ],
            animal: [
                {
                    id: 'Chicken',
                    name: 'Chicken',
                    points: 5,
                    tags: ['hasEgg'],
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/2/22/White_Chicken.png'
                },
                {
                    id: 'Duck',
                    name: 'Duck',
                    points: 3,
                    tags: ['hasEgg'],
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/38/Duck.png'
                },
                {
                    id: 'Rabbit',
                    name: 'Rabbit',
                    points: 4,
                    tags: ['hasWool'],
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/f/fd/Rabbit.png'
                },
                {
                    id: 'Cow',
                    name: 'Cow',
                    points: 6,
                    tags: ['hasMilk'],
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/36/White_Cow.png'
                },
                {
                    id: 'Goat',
                    name: 'Goat',
                    points: 4,
                    tags: ['hasMilk'],
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/5/52/Goat.png'
                },
                {
                    id: 'Sheep',
                    name: 'Sheep',
                    points: 4,
                    tags: ['hasWool'],
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/c/cc/Sheep.png'
                },
                {
                    id: 'Pig',
                    name: 'Pig',
                    points: 5,
                    tags: ['hasOil'],
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/30/Pig.png'
                }
            ],
            artisan: [
                {
                    id: 'BeeHouse',
                    points: 10,
                    tags: ['hasAgeable'],
                    condition: 'hasFlower',
                    name: 'Bee House',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/c/ce/Bee_House.png'
                },
                {
                    id: 'Cask',
                    points: 10,
                    condition: 'hasAgeable',
                    name: 'Cask',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/7/7c/Cask.png'
                },
                {
                    id: 'CheesePress',
                    points: 15,
                    tags: ['hasAgeable'],
                    condition: 'hasMilk',
                    name: 'Cheese Press',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/7/79/Cheese_Press.png'
                },
                {
                    id: 'Keg',
                    points: 20,
                    tags: ['hasAgeable'],
                    condition: 'hasCrop',
                    name: 'Keg',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/7/7c/Keg.png'
                },
                {
                    id: 'Loom',
                    points: 12,
                    condition: 'hasWool',
                    name: 'Loom',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/3b/Loom.png'
                },
                {
                    id: 'MayoMachine',
                    points: 15,
                    condition: 'hasEgg',
                    name: 'Mayo Machine',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/e/ef/Mayonnaise_Machine.png'
                },
                {
                    id: 'OilMaker',
                    points: 10,
                    condition: 'hasOil',
                    name: 'Oil Maker',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/c/c5/Oil_Maker.png'
                },
                {
                    id: 'PreservesJar',
                    points: 15,
                    name: 'Preserves',
                    condition: 'hasCrop',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/1/1e/Preserves_Jar.png'
                },
                {
                    id: 'Tapper',
                    points: 6,
                    name: 'Tapper',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/d/da/Tapper.png'
                }
            ],
            fish: [
                {
                    id: 'Albacore',
                    name: 'Albacore',
                    points: 8,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/e/e1/Albacore.png'
                },
                {
                    id: 'Anchovy',
                    name: 'Anchovy',
                    points: 2,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/7/79/Anchovy.png'
                },
                {
                    id: 'Carp',
                    name: 'Carp',
                    points: 2,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/a/a8/Carp.png'
                },
                {
                    id: 'Sunfish',
                    name: 'Sunfish',
                    points: 2,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/5/56/Sunfish.png'
                },
                {
                    id: 'Herring',
                    name: 'Herring',
                    points: 2,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/f/f1/Herring.png'
                }, {
                    id: 'Sardine',
                    name: 'Sardine',
                    points: 2,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/0/04/Sardine.png'
                },
                {
                    id: 'Bream',
                    name: 'Bream',
                    points: 3,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/82/Bream.png'
                }, {
                    id: 'Ghostfish',
                    name: 'Ghostfish',
                    points: 3,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/7/72/Ghostfish.png'
                },
                {
                    id: 'SmallmouthBass',
                    name: 'Smallmouth Bass',
                    points: 3,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/a/a5/Smallmouth_Bass.png'
                },
                {
                    id: 'RedSnapper',
                    name: 'Red Snapper',
                    points: 3,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/d/d3/Red_Snapper.png'
                },
                {
                    id: 'Chub',
                    name: 'Chub',
                    points: 3,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/b/bd/Chub.png'
                },
                {
                    id: 'Perch',
                    name: 'Perch',
                    points: 3,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/4/43/Perch.png'
                },
                {
                    id: 'Shad',
                    name: 'Shad',
                    points: 3,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/e/ef/Shad.png'
                },
                {
                    id: 'RainbowTrout',
                    name: 'Rainbow Trout',
                    points: 5,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/1/14/Rainbow_Trout.png'
                },
                {
                    id: 'Salmon',
                    name: 'Salmon',
                    points: 5,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/e/e0/Salmon.png'
                }, {
                    id: 'RedMullet',
                    name: 'Red Mullet',
                    points: 5,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/f/f2/Red_Mullet.png'
                },
                {
                    id: 'SeaCucumber',
                    name: 'Sea Cucumber',
                    points: 5,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/a/a9/Sea_Cucumber.png'
                },
                {
                    id: 'Sandfish',
                    name: 'Sandfish',
                    points: 5,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/b/bb/Sandfish.png'
                },
                {
                    id: 'Bullhead',
                    name: 'Bullhead',
                    points: 8,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/d/db/Bullhead.png'
                },
                {
                    id: 'Tilapia',
                    name: 'Tilapia',
                    points: 8,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/7/73/Tilapia.png'
                }, {
                    id: 'Albacore',
                    name: 'Albacore',
                    points: 8,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/e/e1/Albacore.png'
                },
                {
                    id: 'Woodskip',
                    name: 'Woodsip',
                    points: 8,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/97/Woodskip.png'
                },
                {
                    id: 'Squid',
                    name: 'Squid',
                    points: 10,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/81/Squid.png'
                },
                {
                    id: 'Halibut',
                    name: 'Halibut',
                    points: 10,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/0/02/Halibut.png'
                },
                {
                    id: 'Eel',
                    name: 'Eel',
                    points: 10,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/91/Eel.png'
                }, {
                    id: 'Tuna',
                    name: 'Tuna',
                    points: 12,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/c/c5/Tuna.png'
                },
                {
                    id: 'LargemouthBass',
                    name: 'Largemouth Bass',
                    points: 15,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/1/11/Largemouth_Bass.png'
                },
                {
                    id: 'Pike',
                    name: 'Pike',
                    points: 12,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/31/Pike.png'
                }, {
                    id: 'Dorado',
                    name: 'Dorado',
                    points: 12,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/1/18/Dorado.png'
                },
                {
                    id: 'Slimejack',
                    name: 'Slimejack',
                    points: 12,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/34/Slimejack.png'
                },
                {
                    id: 'Walleye',
                    name: 'Walleye',
                    points: 10,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/0/05/Walleye.png'
                },
                {
                    id: 'Lingcod',
                    name: 'Lingcod',
                    points: 12,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/87/Lingcod.png'
                }, {
                    id: 'Octopus',
                    name: 'Octopus',
                    points: 12,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/5/5a/Octopus.png'
                },
                {
                    id: 'ScorpionCarp',
                    name: 'Scorpion Carp',
                    points: 12,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/7/76/Scorpion_Carp.png'
                },
                {
                    id: 'TigerTrout',
                    name: 'Tiger Trout',
                    points: 12,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/0/01/Tiger_Trout.png'
                },
                {
                    id: 'VoidSalmon',
                    name: 'Void Salmon',
                    points: 5,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/a/ad/Void_Salmon.png'
                }, {
                    id: 'Pufferfish',
                    name: 'Pufferfish',
                    points: 15,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/b/ba/Pufferfish.png'
                },
                {
                    id: 'Catfish',
                    name: 'Catfish',
                    points: 12,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/99/Catfish.png'
                },
                {
                    id: 'Sturgeon',
                    name: 'Sturgeon',
                    points: 12,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/4/42/Sturgeon.png'
                },
                {
                    id: 'SuperCucumber',
                    name: 'Super Cucumber',
                    points: 12,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/d/d5/Super_Cucumber.png'
                }, {
                    id: 'Stonefish',
                    name: 'Stonefish',
                    points: 10,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/0/03/Stonefish.png'
                },
                {
                    id: 'IcePip',
                    name: 'Ice Pip',
                    points: 10,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/6/63/Ice_Pip.png'
                },
                {
                    id: 'LavaEel',
                    name: 'Lava Eel',
                    points: 15,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/1/12/Lava_Eel.png'
                },
                {
                    id: 'NightFish',
                    name: 'Night Fish',
                    points: 15,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/83/Midnight_Squid.png'
                },
                {
                    id: 'CrabPot',
                    name: 'Crab Pot',
                    points: 20,
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/92/Crab_Pot.png'
                },
            ],
            maps: [
                {
                    id: 'StandardMap',
                    points: 30,
                    name: 'Standard Map',
                    bgurl: 'https://stardewvalleywiki.com/mediawiki/images/thumb/d/de/Standard_Farm.png/294px-Standard_Farm.png',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/0/05/Standard_Farm_Map_Icon.png'
                },
                {
                    id: 'RiverlandMap',
                    points: 10,
                    name: 'Riverlands',
                    bgurl: 'https://stardewvalleywiki.com/mediawiki/images/thumb/a/ad/Riverlands_Farm.png/294px-Riverlands_Farm.png',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/4/4a/Riverland_Farm_Map_Icon.png'
                },
                {
                    id: 'ForestMap',
                    points: 10,
                    name: 'Forest Map',
                    bgurl: 'https://stardewvalleywiki.com/mediawiki/images/thumb/6/64/Forest_Farm.png/294px-Forest_Farm.png',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/7/77/Forest_Farm_Map_Icon.png'
                },
                {
                    id: 'WildernessMap',
                    points: 20,
                    name: 'Wilderness Map',
                    bgurl: 'https://stardewvalleywiki.com/mediawiki/images/thumb/f/fd/Wilderness_Farm.png/294px-Wilderness_Farm.png',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/36/Wilderness_Farm_Map_Icon.png'
                },
                {
                    id: 'HilltopMap',
                    points: 15,
                    name: 'Hilltop Map',
                    bgurl: 'https://stardewvalleywiki.com/mediawiki/images/thumb/4/40/Hilltop_Farm.png/294px-Hilltop_Farm.png',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/7/74/Hilltop_Farm_Map_Icon.png'
                }
            ],
            tool: [
                {
                    id: 'Tools',
                    points: 4,
                    name: 'Tools',
                    tiers: [
                        { id: 0, url: 'https://stardewvalleywiki.com/mediawiki/images/5/51/Watering_Can.png', name: 'Basic' },
                        { id: 1, url: 'https://stardewvalleywiki.com/mediawiki/images/0/0d/Copper_Watering_Can.png', name: 'Copper' },
                        { id: 2, url: 'https://stardewvalleywiki.com/mediawiki/images/6/66/Steel_Watering_Can.png', name: 'Steel' },
                        { id: 3, url: 'https://stardewvalleywiki.com/mediawiki/images/7/74/Gold_Watering_Can.png', name: 'Gold' },
                        { id: 4, url: 'https://stardewvalleywiki.com/mediawiki/images/5/5e/Iridium_Watering_Can.png', name: 'Iridium' }
                    ]
                },
                {
                    id: 'Sprinkler',
                    points: 6,
                    name: 'Sprinklers',
                    condition: 'hasCrop',
                    tiers: [
                        { id: 0, url: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png', name: 'Forbidden' },
                        { id: 1, url: 'https://stardewvalleywiki.com/mediawiki/images/0/08/Sprinkler.png', name: 'Basic' },
                        { id: 2, url: 'https://stardewvalleywiki.com/mediawiki/images/a/af/Quality_Sprinkler.png', name: 'Quality' },
                        { id: 3, url: 'https://stardewvalleywiki.com/mediawiki/images/9/90/Iridium_Sprinkler.png', name: 'Iridium' }
                    ]
                }

            ],
            forage: [
                {
                    id: 'WildHorseRadish',
                    points: 1,
                    name: 'Wild Horseradish',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png'
                },
                {
                    id: 'Daffodil',
                    points: 1,
                    name: 'Daffodil',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/4/4b/Daffodil.png'
                },
                {
                    id: 'Leek',
                    points: 2,
                    name: 'Leek',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png'
                },
                {
                    id: 'Dandelion',
                    points: 2,
                    name: 'Dandelion',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/b/b1/Dandelion.png'
                },
                {
                    id: 'SpringOnion',
                    points: 1,
                    name: 'Spring Onion',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/0/0c/Spring_Onion.png'
                },
                {
                    id: 'Morel',
                    points: 2,
                    name: 'Morel',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/b/b1/Morel.png'
                },
                {
                    id: 'CommonMushroom',
                    points: 1,
                    name: 'Common Mushroom',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/2/2e/Common_Mushroom.png'
                },
                {
                    id: 'Salmonberry',
                    points: 0,
                    name: 'Salmonberry',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/5/59/Salmonberry.png'
                },
                {
                    id: 'SpiceBerry',
                    points: 2,
                    name: 'Spice Berry',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/c/c6/Spice_Berry.png'
                },
                {
                    id: 'SweetPea',
                    points: 2,
                    name: 'Sweet Pea',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/d/d9/Sweet_Pea.png'
                },
                {
                    id: 'RedMushroom',
                    points: 2,
                    name: 'Red Mushroom',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/e/e1/Red_Mushroom.png'
                },
                {
                    id: 'FiddleheadFern',
                    points: 2,
                    name: 'Fiddlehead Fern',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/4/48/Fiddlehead_Fern.png'
                },
                {
                    id: 'WildPlum',
                    points: 2,
                    name: 'WildPlum',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/3b/Wild_Plum.png'
                },
                {
                    id: 'Hazelnut',
                    points: 3,
                    name: 'Hazelnut',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/31/Hazelnut.png'
                },
                {
                    id: 'Blackberry',
                    points: 0,
                    name: 'Blackberry',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/2/25/Blackberry.png'
                },
                {
                    id: 'Chanterelle',
                    points: 2,
                    name: 'Chanterelle',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/1/1d/Chanterelle.png'
                },
                {
                    id: 'WinterRoot',
                    points: 1,
                    name: 'Winter Root',
                    season: '3',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/1/11/Winter_Root.png'
                },
                {
                    id: 'CrystalFruit',
                    points: 3,
                    name: 'Crystal Fruit',
                    season: '3',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/1/16/Crystal_Fruit.png'
                },
                {
                    id: 'SnowYam',
                    points: 2,
                    name: 'SnowYam',
                    season: '3',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/3f/Snow_Yam.png'
                },
                {
                    id: 'Crocus',
                    points: 1,
                    name: 'Crocus',
                    season: '3',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/2/2f/Crocus.png'
                },
                {
                    id: 'Holly',
                    points: 2,
                    name: 'Holly',
                    season: '3',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/b/b8/Holly.png'
                },
                {
                    id: 'Beach',
                    points: 5,
                    name: 'Beach Forage',
                    season: '3',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/3d/Rainbow_Shell.png'
                },
                {
                    id: 'ApricotTree',
                    points: 3,
                    name: 'Apricot Tree',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/9d/Apricot_Sapling.png'
                },
                {
                    id: 'CherryTree',
                    points: 3,
                    name: 'Cherry Tree',
                    season: '0',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/2/22/Cherry_Sapling.png'
                },
                {
                    id: 'OrangeTree',
                    points: 3,
                    name: 'Orange Tree',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/0/08/Orange_Sapling.png'
                },
                {
                    id: 'PeachTree',
                    points: 3,
                    name: 'Peach Tree',
                    season: '1',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/e/e3/Peach_Sapling.png'
                },
                {
                    id: 'AppleTree',
                    points: 3,
                    name: 'Apple Tree',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/6/68/Apple_Sapling.png'
                },
                {
                    id: 'PomegranateTree',
                    points: 3,
                    name: 'Pome. Tree',
                    season: '2',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/1/10/Pomegranate_Sapling.png'
                },
            ],
            mats: [
                {
                    id: 'Wood',
                    points: 1,
                    name: 'Wood',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/d/df/Wood.png'
                },
                {
                    id: 'HardWood',
                    points: 3,
                    name: 'Hardwood',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/e/ed/Hardwood.png'
                },
                {
                    id: 'Stone',
                    points: 1,
                    name: 'Stone',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/d/d4/Stone.png'
                },
                {
                    id: 'Copper',
                    points: 2,
                    name: 'Copper',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/7/78/Copper_Ore.png',
                    alturl: 'https://stardewvalleywiki.com/mediawiki/images/f/f1/Copper_Bar.png'
                },
                {
                    id: 'Iron',
                    points: 3,
                    name: 'Iron',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/87/Iron_Ore.png',
                    alturl: 'https://stardewvalleywiki.com/mediawiki/images/6/6c/Iron_Bar.png'
                },
                {
                    id: 'Gold',
                    points: 4,
                    name: 'Gold',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/f/f7/Gold_Ore.png',
                    alturl: 'https://stardewvalleywiki.com/mediawiki/images/4/4e/Gold_Bar.png'
                },
                {
                    id: 'Iridium',
                    points: 5,
                    name: 'Iridium',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/e/e9/Iridium_Ore.png',
                    alturl: 'https://stardewvalleywiki.com/mediawiki/images/c/c4/Iridium_Bar.png'
                }
            ],
            npc: [
                {
                    id: 'Caroline',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png'
                },
                {
                    id: 'Clint',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png'
                },
                {
                    id: 'Demetrius',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png'
                },
                {
                    id: 'Dwarf',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png'
                },
                {
                    id: 'Evelyn',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png'
                },
                {
                    id: 'George',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/7/78/George.png'
                },
                {
                    id: 'Gus',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png'
                },
                {
                    id: 'Jas',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png'
                },
                {
                    id: 'Jodi',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png'
                },
                {
                    id: 'Kent',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png'
                },
                {
                    id: 'Krobus',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png'
                },
                {
                    id: 'Lewis',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png'
                },
                {
                    id: 'Linus',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/3/31/Linus.png'
                },
                {
                    id: 'Marnie',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png'
                },
                {
                    id: 'Pam',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png'
                },
                {
                    id: 'Pierre',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png'
                },
                {
                    id: 'Robin',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png'
                },
                {
                    id: 'Sandy',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png'
                },
                {
                    id: 'Vincent',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png'
                },
                {
                    id: 'Willy',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png'
                },
                {
                    id: 'Wizard',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png'
                },
                {
                    id: 'Alex',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png'
                },
                {
                    id: 'Elliott',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png'
                },
                {
                    id: 'Harvey',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png'
                },
                {
                    id: 'Sam',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png'
                },
                {
                    id: 'Sebastian',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png'
                },
                {
                    id: 'Shane',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png'
                },
                {
                    id: 'Abigail',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png'
                },
                {
                    id: 'Emily',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png'
                },
                {
                    id: 'Haley',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png'
                },
                {
                    id: 'Leah',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png'
                },
                {
                    id: 'Maru',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png'
                },
                {
                    id: 'Penny',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png'
                }
            ],
            marriage: [
                {
                    id: 'Alex',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png'
                },
                {
                    id: 'Elliott',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png'
                },
                {
                    id: 'Harvey',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png'
                },
                {
                    id: 'Sam',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png'
                },
                {
                    id: 'Sebastian',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png'
                },
                {
                    id: 'Shane',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png'
                },
                {
                    id: 'Abigail',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png'
                },
                {
                    id: 'Emily',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png'
                },
                {
                    id: 'Haley',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png'
                },
                {
                    id: 'Leah',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png'
                },
                {
                    id: 'Maru',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png'
                },
                {
                    id: 'Penny',
                    imgurl: 'https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png'
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
        let difficulty = this.difficulty
        slider.noUiSlider.on('set', this.updateSlider)
    },
    data: {
        difficulty: 'Easy',
        genResult: null,
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
            console.log(this.genResult);
            this.sections = Object.keys(this.genResult).filter(section => this.genResult[section].length && section !== 'npc');
        }
    }
})