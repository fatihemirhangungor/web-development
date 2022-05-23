const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Kiwi is great!"
});

//fruit.save();

// Fruit.find(function(err, fruits){
//     if (err){
//         console.log(err);
//     } else {
//         fruits.forEach(function(fruit){
//             console.log(fruit.name);
//         });
//     }
//     mongoose.connection.close();
// })

// Fruit.updateOne({_id: "628bfe997266bee45412a0fc"}, {name: "Peach", review: "Peach is good"}, function(err){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Successfully Updated");
//     }
// })

// Fruit.deleteOne({name: "Peach"}, function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully Deleted");
//     }
// })

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoireFruite: fruitSchema
})

const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//     name: "Pineapple",
//     rating: 8,
//     review: "Its great!"
// })

// pineapple.save();

// const person = new Person({
//     name: "Ezgi",
//     age: 23,
//     favoireFruite: pineapple
// })

// person.save();

const watermelon = new Fruit({
    name: "Watermelon",
    rating: 9,
    review: "My favorite"
});

watermelon.save();

Person.updateOne({name: "Fatih"}, {favoireFruite: watermelon}, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated");
    }
})