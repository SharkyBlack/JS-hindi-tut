//dates

let d = new Date()
// console.log(d.toString())
// console.log(d.toDateString())
// console.log(d.toLocaleString())

// let mydate = new Date(2025,0,23)
let mydate = new Date("01-14-2023")
// console.log(mydate.toDateString());

// let myTimeStamp = Date.now()
// console.log(Math.floor(Date.now()/1000))

let newdate = new Date()
console.log(newdate.getMonth()+1);

newdate.toLocaleString('default',{
    weekday: "long",
    
})
