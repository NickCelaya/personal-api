
var user = {
  name: "Nick Celaya",
  location: "Salt Lake City",
  occupations: ["Dev", "Cowboy", "salesman", "gunfighter", "software engineer"],
  hobbies: [
    {
      name: "Shooting",
      type: "Action"
    },
    {
      name: "Cooking",
      type: "Home"
    },
    {
      name: "Fishing",
      type: "Outdoors",
    }
  ],
  family: [
    {
      name: "Jessica",
      relation: "Wife",
      gender: "Female"
    },
    {
      name: "Pete",
      relation: "Friend",
      gender: "Puppy"
    },
    {
      name: "Cindy",
      relation: "Mother",
      gender: "Female"
    }
  ],
  restaurants: [
    {
      name: "Churrascos",
      type: "SteakHouse",
      rating: 7,
    },
    {
      name: "Cristos",
      type: "Tapas",
      rating: 10
    },
    {
      name: "Cubbies",
      type: "burgers",
      rating: 4
    }
  ],
  guns:[
    {
    name: "AccuracyInternational",
    caliber: "6.5 Creedmoore",
    cost: "$8,000"
  },
  {
    name: "ruger",
    caliber: "308 Win",
    cost: "$2,000"
  },
],
};


module.exports = user;


// put user.hobbies[1].type = req.body.type
// req.status(200).send(user.hobbies)

// post user.hobbies.push(req.body)
// req.status(200).send(user.hobbies)
