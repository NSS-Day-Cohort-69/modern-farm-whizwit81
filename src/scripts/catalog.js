


export const catalog = (harvestedFoodArray) => {

    let htmlString = ""


    for (const foodObjects of harvestedFoodArray) {

            htmlString += `<main class = "plant"> ${foodObjects.type}</main>`
}
    return htmlString
}
