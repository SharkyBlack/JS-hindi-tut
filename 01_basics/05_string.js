const name = "purab"
const repo = 50;

// console.log(`Hello my name is ${name} and my repo count is ${repo}`)

const gameName = new String('hites-ch')
// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString);

const newy = gameName.slice(-7,4)
console.log(newy);

const hello = "   fhdfhfh  hf "
console.log(hello.trim())

const url = "https://hitesh.com/hitest%20choudhary"
console.log(url.replace('%20','-'))

console.log(gameName.split('-'))