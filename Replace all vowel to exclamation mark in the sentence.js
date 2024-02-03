// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

const replace = (s) => s.replace(/[aeiuo]/gi,'!')

console.log(replace("Hi!"))
console.log(replace("!Hi! Hi!"))