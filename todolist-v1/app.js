/*Server başlangıç dosyası
root '/' route una bakınca
ilk olarak date alıyoruz
en sonda da bir ejs dosyasını render ediyoruz
ejs dosyasında html kodları bulunuyor. list.ejs
*/

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();

let items = [];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// root page
app.get("/", function(req, res) {
  let day = date.getDay();
//renders our ejs file which contains ejs
//render edeceğimizz ejs dosyasına server tarafında
//işleme aldığımız parametreleri yollayabiliyoruz
//parametreleri eşlerken ejs dosyasında o parametrelere ejs tagları içerisine alıyoruz ki belli olsun
  res.render("list", {
    listTitle: day,
    newListItems: items,
  });
})

// root kısmına bir post attığımızda burada alıyoruz onu
// yollanılan data ya req ten ulaşabiliyoruz
app.post("/", function(req, res) {
  // req = our data
  // req.body.whateverTheBodyContains
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
})

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  })
})

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about", function(req, res) {
  res.render("about");
})

app.listen(3000, function() {
  console.log("Server running on port 30000");
})
