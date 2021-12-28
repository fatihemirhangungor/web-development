const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const app = express();
const mailchimp = require('@mailchimp/mailchimp_marketing');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mailchimp.setConfig({
  apiKey: '47c1ceefc0088850e792f1d6051a5278-us20',
  server: 'us20',
});

const listId = "376b13dcbb";
/*const subscribingUser = {
  firstName: req.body.fName,
  lastName: req.body.lName,
  email: req.body.email
};*/

/*async function addListMember() {
  const response = await mailchimp.lists.addListMember(listId, {
    email_address: subscribingUser.email,
    status: "subscribed",
    merge_fields: {
      FNAME: subscribingUser.firstName,
      LNAME: subscribingUser.lastName
    }
  });

  console.log(
    `Successfully added contact as an audience member. The contact's id is ${
      response.id
    }.`
  );
}*/

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res){
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us20.api.mailchimp.com/3.0//lists/" + listId;
  const options = {
    method: "POST",
    auth: "softdeveloperguy:47c1ceefc0088850e792f1d6051a5278-us20"
  }

  const request = https.request(url, options, function(response){
    var num_of_errors;
    response.on("data", function(data){

      num_of_errors = Number(JSON.parse(data).error_count);
      console.log(num_of_errors);
    })

    if (response.statusCode === 200 && (num_of_errors > 0)) {
      res.sendFile(__dirname + "/success.html");
    }
    else {
      res.sendFile(__dirname + "/failure.html");
    }


  })

  request.write(jsonData);
  request.end();
})



app.listen(process.env.PORT || 3000, function(){
  console.log("Server running on port 3000");
})

//API Key
//47c1ceefc0088850e792f1d6051a5278-us20
//List ID
//376b13dcbb
