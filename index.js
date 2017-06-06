
const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const mainCtrl = require("./controllers/mainCtrl.js");
const middleware = require("./controllers/middleware.js");
const app = express();

app.use(bodyParser.json());
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(middleware.addHeaders);


// Get requests
app.get("/name", mainCtrl.getName);
app.get("/location", mainCtrl.getLocation)
app.get("/occupations", mainCtrl.getOccupations)
app.get("/latestoccupation", mainCtrl.getLatestOccupation)
app.get("/hobbies", mainCtrl.getHobbies)
app.get("/hobbies/:type", mainCtrl.getHobbiesType)
app.get("/family", mainCtrl.getFamily)
app.get("/family/:gender", mainCtrl.getGender)
app.get("/restaurants", mainCtrl.getRestaurants)
app.get("/restaurant1", mainCtrl.getRestaurant1) //query ?name=Cristos
app.get("/restaurants/:name", mainCtrl.getRestaurantsName)//param: /cristos
app.get("/guns", mainCtrl.getGuns)



//post
app.post("/occupations", mainCtrl.postOccupations)

//put
app.put("/name",mainCtrl.putName)


const PORT = 3000;
app.listen(PORT, function(){
  console.log("War on port", PORT);
})






//
//
// putName: function(req, res, next){
//   user.name = (req.body.name)
//   res.status(200).send(user.name)
// }
