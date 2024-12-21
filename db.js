const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: 'Gokul4242',   
  database: 'test_db' 
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  } else {
    console.log('Connected to the MySQL database.');
  }
});

module.exports = connection;
