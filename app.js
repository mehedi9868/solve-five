/*
This is first problem. Simple math operation and return value.
*/
function mindGame(number) {
    if (typeof number !== 'number' || number < 0) {
        return 'please provide a valid number';
    }
    const result = (number * 3 + 10) / 2 - 5;
    return result;
}
/*
This is second problem. receive string, check wheater valid string or not then
count the size of string and lastly checked wheather the size can equally dividable and return ans.
*/
function evenOdd(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return 'please provide a valid string';
    }
    const character = string.length;
    if (character % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
/*
this is third problem. first check number parameter wheather it is valid number type or not.
then compare it with 7 and get difference. according to difference with help of if else if condition we get to output as return.
*/
function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'please provide a valid number';
    }
    const difference = (number - 7);
    if (difference < 7) {
        return difference;
    } else if (difference >= 7) {
        return number * 2;
    }
}
/*
this is fourth problem. first check the parameter value is array or not. then
we loop through the array and get every element. check the element wheather it is negetive or positive
with if condition and we count negative number and store it as badNumber. finally we return negative
element counts as badNumberCount.
*/
function findingBadData(arrOfNumbers) {
    if (Array.isArray(arrOfNumbers) !== true || arrOfNumbers.length === 0) {
        return 'please provide an array of numbers';
    }
    let badNumberCount = 0;
    for (let i = 0; i < arrOfNumbers.length; i++) {
        const number = arrOfNumbers[i];
        if (number < 0) {
            badNumberCount++
        }
    }
    return badNumberCount;
}
/*
this is last fifth problem. first check wheather three parameter value is number or not.
then using math operation get the diamond value of specific friend. then using math operation we get
total value of three friends diamond. then we use if else condition and return two different value
from the function.
*/
function gemsToDiamond(friend1Gem, friend2Gem, friend3Gem) {
    if (typeof friend1Gem !== 'number' || typeof friend2Gem !== 'number' || typeof friend3Gem !== 'number' || friend1Gem < 0 || friend2Gem < 0 || friend3Gem < 0) {
        return 'please provide valid gem numbers';
    }
    const friend1Diamond = friend1Gem * 21;
    const friend2Diamond = friend2Gem * 32;
    const friend3Diamond = friend3Gem * 43;
    const totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond;
    if (totalDiamond >= 1000 * 2) {
        return totalDiamond - 2000;
    } else {
        return totalDiamond;
    }
}