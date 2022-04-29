const mongo = require('mongodb'); 
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

const con = MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  //db.close();
  return db;
});

module.exports = {con};
