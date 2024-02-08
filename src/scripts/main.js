console.log("Welcome to the main module")

import { createSoybean } from './seeds/soybean.js'
import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant, usePlants } from './field.js'
import { createCorn } from './seeds/corn.js'
import { plantSeeds } from './tractor.js'
import { catalog } from './catalog.js'
import { harvestPlants } from './harvester.js'

const yearlyPlan = createPlan()
const soyBeanSeed = createSoybean()
const corn = createCorn()
const asparagusSeed = createAsparagus()
const plantsArray = usePlants ()


console.log(plantsArray)


const parentHTMLElement = document.querySelector(".messages")

// Invoke the function that renders the HTML list


parentHTMLElement.innerHTML = catalog()

