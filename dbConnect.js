var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dlthdus0518',
  database : 'fintech'
});

connection.connect();
connection.query('SELECT * FROM user', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
connection.end();