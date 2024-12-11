import mysql from 'mysql2';
const cors = require("cors");

app.use(cors({ origin: "*"}));
// Create the MySQL connection with the correct credentials
const Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2002', // Make sure this matches your MySQL root password
  database: 'emp', // Replace with your database name
});

Connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err); 
    return;
  }
  console.log('Connected to MySQL');
});
 
export default Connection


