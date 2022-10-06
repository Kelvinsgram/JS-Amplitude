"use strict";

//finding the max and min values in an array//
//the function should ignore errors of (not being a number)
// list of arrays
let tempArrays1 = [
  //numbers go here
];

let tempArrays2 = [
  //numbers go here
];

//Merging the two arrays together//
let tempArrays3 = tempArrays1.concat(tempArrays2);

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  //creating the loop to go through each elemnt in the array//
  for (let i = 0; i < temps.length; i++) {
    //creating a variable for the current temperature in each iteration
    let currentTemps = temps[i];

    //checking for the error with continue//
    if (typeof currentTemps != "number") continue;

    if (currentTemps > max) max = currentTemps;
    if (currentTemps < min) min = currentTemps;
  }
  console.log(max);
  console.log(min);

  return max - min;
};
//calling the function with the prefered array//
let amplitude = calcTempAmplitude(tempArrays3);
console.log(amplitude);
