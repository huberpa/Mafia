var express = require('express')
var app = express()
var db
var MongoClient = require('mongodb').MongoClient


app.get('/login', function (req, res) {
 
	MongoClient.connect('mongodb://connection:connection@ds147777.mlab.com:47777/mafiadb', function (err, db) {
  		if (err) throw err

      if(req.query.name){
    		db.collection('Players').insert(
  		   {
           _id: req.query.name,
  		     name: req.query.name,
  		     role: null,
  		     alive: true
  		   }
  		  );
      res.send("Success! Player added");

      }else{
        res.send("Error. Please try again");
      }

  // 		db.collection('Game').find({'_id':'MafiaGame'}).toArray(function (err, result) {
  //   			if (err) throw err

  //   			console.log(result)
  // 			res.send(result)

  // })
})


})

app.listen(3000, function () {
  console.log('Master service activated...')
})


