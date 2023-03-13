//weather in kelvin
const kelvin = 293; 
//convert celsius to kelvin
const celsius = kelvin - 273;
// convert celsius inti fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// convert decimal number into whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);
