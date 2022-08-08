const mysql = require('mysql')

const connectionX = mysql.createConnection({
      host: 'localhost',
    user: 'root',
    password: 'demo1234',
    database: 'myphp'
})


var sql = "INSERT INTO Test (email, name) VALUES ?";
const customers = [{
    email : "anurag11@yopmail.com" ,
    name : "anurag"
    },
    {
    email : "sameer11@yopmail.com" ,
    name : "sameer"
    },
    {
    email : "ravi11@yopmail.com" ,
    name : "ravi"
    },
    {
    email : "akash11@yopmail.com" ,
    name : "akash"
    },
    {
    email : "anjali11@yopmail.com" ,
    name : "anjai"
    },
    {
    email : "santosh11@yopmail.com" ,
    name : "santosh"
    },
    ]
    connectionX.query(sql, values, function(err) {
        if (err) throw err;
        connectionX.end();
    });
