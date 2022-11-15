import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lamadev123",
  database: "test",
});

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

app.listen(8800, () => {
  console.log("Connected to backend....");
});
