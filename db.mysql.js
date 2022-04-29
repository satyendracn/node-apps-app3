const {createConnection} = require('mysql'); 

var con = createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database:'node_apps'
});
  
module.exports = con;