import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const handleChange = (e) => {
    setBook((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(book);
  return (
    <div className="form">
      <h1>Add new Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
