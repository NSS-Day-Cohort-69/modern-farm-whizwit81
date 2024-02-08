console.log("Welcome to the main module")

import { createSoybean } from './seeds/soybean.js'
import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant, usePlants } from './field.js'
import { createCorn } from './seeds/corn.js'
import { plantSeeds } from './tractor.js'

const yearlyPlan = createPlan()
const soyBeanSeed = createSoybean()
const corn = createCorn()


console.log(soyBeanSeed)

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)




addPlant(corn)


plantSeeds(yearlyPlan)
console.log(usePlants())