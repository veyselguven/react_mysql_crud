import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lamadev123",
  database: "test",
});
// if there is a auth issue

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Lamadev123'

app.use(express.json()); // it allows us to send any json file using a client

app.get("/", (req, res) => {
  res.json("Hello This is the backendd");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?) ";
  // const values = [
  //   "title from backend",
  //   "desc from backend",
  //   "cover pic from backend",
  // ];
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created succesfull... ");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";
  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted succesfull... ");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend....");
});
