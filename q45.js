"use strict";
function createCar(manufacturer, model, ...args) {
    const car = {
        manufacturer,
        model,
    };
    // Process additional key-value pairs
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i];
        const value = args[i + 1];
        car[key] = value;
    }
    return car;
}
// Example usage
const myCar = createCar('Toyota', 'Camry', 'color', 'blue', 'optionalFeature', 'sunroof');
console.log(myCar);
