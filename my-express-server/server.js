const express = require('express');
const app = express();
app.get("/", function(request, response){
  response.sendFile('/index.html', {root: __dirname });
});

app.get("/about", function(request, response){
  response.send("<h1>This is about page</h1>");
});

app.get("/contact", function(request, response){
  response.send("<h1>fatihangungor@gmail.com</h1>");
});

app.listen(3000, function(){
  console.log("server running on port 3000");
});


/*
Create pipeline
CI CD
*/
