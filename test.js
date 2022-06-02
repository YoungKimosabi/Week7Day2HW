//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// let person3 = {
//     pizza:["Deep Dish","South Side Thin Crust"],
//     tacos:"Anything not from Taco bell",
//     burgers:"Portillos Burgers",
//     ice_cream:["Chocolate","Vanilla","Oreo"],
//     shakes:[{
//         oberwise:"Chocolate",
//         dunkin:"Vanilla",
//         culvers:"All of them",
//         mcDonalds:"Sham-rock-shake",
//         cupids_candies:"Chocolate Malt"
//     }]
// }
// function favfood(dict){
//     for (let [key,value] of Object.entries(dict)){
//         if (Array.isArray(value)){
//             for (let i of value){
//                 if (i instanceof Object){
//                     for (let [k,v] of Object.entries(i)){
//                         console.log(`Person3's favorite ${key} from ${k} is ${v}`)
//                     }
//                 }else{
//                     console.log(`Person3's favorite ${key} is ${i}`)
//                 }
//             }
//         }else{
//             console.log(`Person3's favorite ${key} is ${value}`)
//         }
//     }
// }
// favfood(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     printInfo = () => console.log(`This person's name is ${this.name}, and they are ${this.age} years old`)
//     addAge = () => this.age+=1
// }
// let Kyle = new Person("kyle",23)
// let Patrick = new Person("Patrick", 30)
// console.log(Kyle.printInfo())
// console.log(Kyle.addAge())
// console.log(Kyle.addAge())
// console.log(Kyle.addAge())
// console.log(Kyle.printInfo())
// console.log(Patrick.printInfo())


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
// const isStringGreater = (word) =>{return new Promise((resolve, reject) =>{if(word.length>10){resolve(`Big Word`)}else{reject(`Small Number`)}})}
// isStringGreater('nope').then((result)=>{//if resolved/accepted console.log(result)}).catch((error)=>{console.log(error)})