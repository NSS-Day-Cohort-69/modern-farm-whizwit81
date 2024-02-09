
export const catalog = (harvestedPlants) => {

    let htmlString = ""
    
for (const foodObjects of harvestedPlants) {

            htmlString += `<main class = "plant"> ${foodObjects.type}</main>`
}
    return htmlString
}
