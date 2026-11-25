export function arrOfModels(aircraftsArray, resultAsNum=true) {
    let numOfModels = 0;
    let arrOfModels = [];
    let accNumOfModels = 0;
    // for (const [key, value] of Object.entries(aircraftsArray))
    aircraftsArray.forEach((aircraft) => {
        if (!aircraft.model.colorsPrice) return;

        accNumOfModels = numOfModels;
        for (const value of Object.values(aircraft.model.colorsPrice)) {
            if (Number.isFinite(value) && value > 0) {
                numOfModels++;
            }
        }
        arrOfModels.push(numOfModels - accNumOfModels);
    });
    if (resultAsNum) return numOfModels;
    return arrOfModels;
}