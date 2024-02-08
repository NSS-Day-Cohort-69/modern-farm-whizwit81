const allGrowingPlantsInField = []

export const addPlant = (seed) => {
    if (Array.isArray(seed) === true)
        for (const corn of seed) {
            allGrowingPlantsInField.push(corn)
    }
        else (allGrowingPlantsInField.push(seed))
}

export const usePlants = () => {
    return allGrowingPlantsInField
}

