console.log("Welcome to the main module")

import { createSoybean } from './seeds/soybean.js'
import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant, usePlants } from './field.js'
import { createCorn } from './seeds/corn.js'
import { plantSeeds } from './tractor.js'
import { catalog } from './catalog.js'
import { harvestPlants } from './harvester.js'
import { createWheat } from './seeds/wheat.js'
import { createPotato } from './seeds/potato.js'
import { createSunflower } from './seeds/sunflower.js'

// addPlant works with the seed object as argument: below


const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const plantsArray = usePlants()



const harvestPlantsArray = harvestPlants(plantsArray)

// catalog returns string
const finishedCatalog = catalog(harvestPlantsArray)


const parentHTMLElement = document.querySelector(".messages")

// Invoke the function that renders the HTML list


parentHTMLElement.innerHTML = finishedCatalog

