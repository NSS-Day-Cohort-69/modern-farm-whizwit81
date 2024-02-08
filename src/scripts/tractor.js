import { createSoybean } from './seeds/soybean.js'
import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant, usePlants } from './field.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'


export const plantSeeds = (plan) => {
    
            for ( const row of plan) {

                for (const foodType of row) {

                    if ( foodType === "Asparagus") {
                        addPlant(createAsparagus())
                    }
                    if ( foodType === "Corn") {
                        addPlant(createCorn())
                    }
                    if ( foodType === "Potato") {
                        addPlant(createPotato())
                    }
                    if ( foodType === "Soybean") {
                        addPlant(createSoybean())
                    }
                    if ( foodType === "Sunflower") {
                        addPlant(createSunflower())
                    }
                    if ( foodType === "Wheat") {
                        addPlant(createWheat())
                    }
                    
        }

    }
}


