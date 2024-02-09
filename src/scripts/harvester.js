

export const harvestPlants = (plants) => {

    let plantsHarvested = []

        for (const plant of plants){
            if (plant.type === "Corn"){
             for (let i = 0; i < plant.output/2; i++)
                plantsHarvested.push(plant)
            
    }
        else {
            for(let i = 0; i <plant.output; i++)
                plantsHarvested.push(plant)
        }
    
    }
    return plantsHarvested
}