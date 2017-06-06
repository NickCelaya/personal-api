// accessing the data from user.js file into our controller. like dependency injection in angular.
var user = require("./../user.js");

module.exports = {


getName: function(req, res, next){
  res.status(200).send({"name": user.name})
},

getLocation: function(req, res, next){
  res.status(200).send({"location": user.location})
},

getOccupations: function(req, res, next){
  if(req.query.order){
    console.log("Whats up Nick");
   if(req.query.order === "desc"){
     user.occupations.sort()
   }else if(req.query.order ==="asc"){
     user.occupations.reverse()
   }
  }
  res.status(200).send(user.occupations)
},

getLatestOccupation: function(req, res, next){

  res.status(200).send(user.occupations.slice(user.occupations.length -1))

},

getHobbies: function(req, res, next){
  res.status(200).send(user.hobbies)
},

getHobbiesType: function(req, res, next){
  res.status(200).send(user.hobbies.filter(function(item){
    return item.type === req.params.type
  }))
},

getFamily: function(req, res, next){
  res.status(200).send(user.family)
},

getGender: function(req, res, next){
  res.status(200).send(user.family.filter(function(item){
    return item.gender === req.params.gender
  }))
},

getRestaurants: function(req, res){
  res.status(200).send(user.restaurants)
},

getRestaurant1: function(req, res, next){
  console.log(req.query);
  if(req.query) {
    res.status(200).send(user.restaurants.filter(function(item){
      return item.name === req.query.name
    }))
  } else {
  res.status(200).send(user.restaurants)
  }
},


getRestaurantsName: function(req, res, next){
  res.status(200).send(user.restaurants.filter(function(item){
    return item.name === req.params.name
  }))
},
//
// getRestaurantsType: (req,res) => {
//   if(req.params.type === type){
//     return
//   }
// }

getGuns: function(req, res, next){
  res.status(200).send(user.guns)
},


// post = postData function
postOccupations: function(req, res, next){
  user.occupations.push(req.body.occupations)
  res.status(200).send(user.occupations)
},


putName: function(req, res, next){
  user.name = (req.body.name)
  res.status(200).send(user.name)
}



};
