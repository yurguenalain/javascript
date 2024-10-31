//JS-04 - Arrays and Loops
//*Sum of Resistors in Series
//Calculate the sum of all resistors connected in series.
//Examples:
//- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
//- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
//- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

//Note: This approach uses the absolute value of each resistance to ensure all values are positive.

constResistence1 = [-1 ,5 ,6, 3] ;
constResistence2 = [14, 3.5 ,6 ];
constResistence3 = [8, 15, 100 ];


let suma = 0; // Se declara suma como variable que va a empezar desde 0.
for (let i = 0; i < constResistence1.length; i++ ){ //se crea el bucle que va a empezar desde el index 0 y va a recorrer cada una de las variables del array
    suma += constResistence1[i]; //se crea la formula escribiendo la variable "suma" que va a empezar desde cero y va a ir sumando cada una de las variables del array.
}
console.log(suma + " Ohms"); //Se imprime  la variable suma que es 0  ya con las variables sumadas una por una y se le agrega un swtich de Ohms.


let suma2 = 0
for (let i = 0; i < constResistence2.length; i++ ){
    suma2 += constResistence2[i];
}

console.log (suma2 + " Ohms");


let suma3 = 0;
for (let i=0; i < constResistence3.length; i++ ){
    suma3 += constResistence3[i];
}
console.log(suma3 + " Ohms")


//juntar los  3 arrays

let sumaArrays = constResistence1.concat(constResistence2,constResistence3);

console.log(sumaArrays);





