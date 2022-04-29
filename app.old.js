const http = require('http');
const { env } = require('process');
const con = require('./db.mysql.js');

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const server = http.createServer((req,res)=>{
    
        if(req.url=='/'){
            res.write('Welcome ot home page');
            res.end();
        }else{
            res.write('Pag not found');
            res.end();
        }
    
    });
    //console.log(env);
    const port = env.PORT || 3000;
    server.listen(port);

    //create table
    // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });

    // var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table altered");
    // });

    // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("1 record inserted");
    // });

    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
      ['John', 'Highway 71'],
      ['Peter', 'Lowstreet 4'],
      ['Amy', 'Apple st 652'],
      ['Hannah', 'Mountain 21'],
      ['Michael', 'Valley 345'],
      ['Sandy', 'Ocean blvd 2'],
      ['Betty', 'Green Grass 1'],
      ['Richard', 'Sky st 331'],
      ['Susan', 'One way 98'],
      ['Vicky', 'Yellow Garden 2'],
      ['Ben', 'Park Lane 38'],
      ['William', 'Central st 954'],
      ['Chuck', 'Main Road 989'],
      ['Viola', 'Sideway 1633']
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
});
