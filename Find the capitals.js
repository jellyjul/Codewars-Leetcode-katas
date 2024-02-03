// DESCRIPTION:
// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

var capitals =(word) => {
    return word.split('')
                .map((item,index) =>  item === item.toUpperCase() ? index : null)
                .filter((item)=> item !== null)
   
};

console.log(capitals('CodEWaRs'))