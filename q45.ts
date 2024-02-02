interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...args: any[]): Car {
  const car: Car = {
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
const myCar = createCar(
  'Toyota',
  'Camry',
  'color',
  'blue',
  'optionalFeature',
  'sunroof'
);
console.log(myCar);
