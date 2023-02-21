// console.log(__dirname); // --> path to current file
// console.log(process.cwd()); // --> path to current folder
const fs = require('fs'); // --> file system --> handle file
// fs.writeFile(process.cwd() + '/test.txt', 'Hello World!', (err) => {});

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  port: '3306',
  database: 'db_node27',
});

// app: assign ham cho 1 bien
const app = express();
// Express: middleware cho phep BE doc JSON
app.use(express.json());
app.use(express.static('.')); // --> define path to static file
// CORS: grant permission cho FE truy cap server API
app.use(cors());

// Khoi tao server bang express
// port: dia chi dinh dang server
app.listen(8080);

const rootRoute = require('./routes/rootRoute');
app.use('/api', rootRoute);

// Khoi tao phuong thuc (CRUD) tra ve cho FE
// method: GET
// rest param
// app.get("/demo", (req, res) => {
/*
 * tra du lieu ve cho FE
 * tra ve string, object, list of object
 * KHONG cho phep tra ve number
 */

/* Truyen du lieu bang param (BE define)
 * app.get("/demo/:id") --> truyen 1 tham so
 * app.get("demo/:id/:name") --> truyen 2 tham so
 * let id = req.params.id;
 */
// let { id, hoTen, tuoi } = req.body;

/*
 * Truyen du lieu bang query (FE define)
 * app.get("/demo") --> ko can define tham so trong code
 * Khi nhap url khai bao param --> /demo?id=123
 * Truyen 2 param --> /demo?id=123&name=alice
 * let id = req.query.id;
 */

/* Truyen du lieu bang body
 * truyen json object {} vao API
 * let { id, hoTen, tuoi } = req.body;
 * res.status(200).send({ id, hoTen, tuoi });
 */

//   res.status(200).send({ id, hoTen, tuoi });
// });

// app.post();
// app.put();
// app.delete();

/*
app.get("/user/:key", (req, res) => {
  let { key } = req.params;
  const sql = `SELECT * FROM users WHERE ho_ten LIKE '%${key}%'`;

  conn.query(sql, (err, result) => {
    res.send(result);
  });

  // Thuong it su dung cach nay. Chu yeu xai ORM
});
*/

// app.get("/user", (req, res) => {
//   const sql = "SELECT * FROM users";
//   conn.query(sql, (err, result) => {
//     res.send(result);
//   });
// });
