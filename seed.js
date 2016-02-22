var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/pup_buds');

var User = require('./models/User');
var Puppy = require('./models/Puppy');

var fooPuppy, fundlePuppy, newUsers, newPuppies;

fooPuppy = Puppy.create(newPuppies[0]);
fundlePupply = Puppy.create(newPuppies[1]);

newUsers = [
  {
    name: "John",
    age: 30,
    zipCode: "90026",
    bio: "I'm a friendly guy!",
    picture: "#",
    puppies: [
    
    ]
  },
  {
    name: "Bob",
    age: 28,
    zipCode: "90026",
    bio: "I'm a friendly guy!",
    picture: "#",
    puppies: [
    ]
  }
]

newPuppies = [
  {
    name: "Fundle",
    age: 8,
    therapy: false,
    friendliness: "Really friendly",
    hypoallerginc: true,
    size: "Really small",
    users: [//{
   
    ]
  },
  {
    name: "Foo",
    age: 7,
    therapy: false,
    friendliness: "Really friendly",
    hypoallerginc: true,
    size: "Really small",
    users: [

    ]
  }
]

User.remove({}, function(err){
  Puppy.remove({}, function(err){
    Puppy.create(newPuppies, function(err, puppies){
     console.log(puppies.length + " puppies created.");
      newUsers.forEach(function(user){
        User.register(new User({
          name: user.name,
          age: user.age,
          zipCode: user.zipCode,
          bio: user.bio,
          picture: user.picture,
          puppies: user.puppies
        })
      )}
    );
   });
  });
});





mongoose.disconnect();




