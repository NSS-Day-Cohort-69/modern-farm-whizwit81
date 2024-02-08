// plantsArray = usePlants() function and invoked on main.js

export const harvestPlants = (plantsArray) => {

    let plantsHarvested = []

        for (const plant of plantsArray) {
            if (plant.type === "corn"){
             for (let i = 0; i < plant.output/2; i++)
                plantsHarvested.push(plant)
    }
        else {
            for(let i = 0; i <plant.output; i++)
                plantsHarvested.push(plant)
        }
    
    }
}