//Secret Society
 

//Find the name of a secret society based on the first letter of each member's name.
 

//Examples:
//- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
//- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
//- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.



//Declaracion de las variables como Array 
const secretNames1 = ["Esperanza","Franco", "Nia"]; 
const secretName2 = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"];
const secretName3 = ["Harry", "Ron", "Hermione", ];

const sumaArray = secretNames1.concat(secretName2,secretName3);

//Formula para obtener  un array nuevo del index 0 (.map), name toma la nueva identidad y con .charAt obtiene el index 0 de 
const firstLetter = sumaArray.map( name => name.charAt(0) );
console.log(firstLetter);

