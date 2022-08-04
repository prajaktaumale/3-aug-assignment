let object = [
    { "person": "John", "age": 30, "company": "Google" },
    { "person": "mohn", "age": 37, "company": "Filpcart" },
    { "person": "Kohn", "age": 38, "company": "Amazon" },
    { "person": "Sohan", "age": 40, "company": "Myntra" },
    { "person": "Jenny", "age": 70, "company": "Apple" }
]
//for loop
for (let i = 0; i < object.length; i++) {
        console.log(object[i].person),
            console.log(object[i].age),
            console.log(object[i].company)
    }

//forEach loop
object.forEach(function (object) {
    console.log(object.person),
        console.log(object.age),
        console.log(object.company)
})


//for in loop
for (let key in object) {
        console.log(object)
        console.log(key)
        console.log(`person:${object[key].person}`)
        console.log(`age:${object[key].age}`)
        console.log(`company:${object[key].company}`)
        
    }


//for of loop
for(let key of object){
    console.log(`comapny:${data.comapny}`)
}
