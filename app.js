'use strict';
const http = require('http');
const { env } = require('process');

//const db_con = require('./db.js');

//console.log(db_con);
// const dbo = db_con.db('mydb')
// dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
// });

const server = http.createServer((req,res)=>{
  //console.log(req);
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

