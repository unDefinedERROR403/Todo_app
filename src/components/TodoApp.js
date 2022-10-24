// src/components/TodoPage.js
 
import React, { useState } from "react";
import TextBox from "./TextBox";
import TodoCard from "./TodoCard";
function TodoPage() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
 
  const addToList = (text) => {
    setList([...list, { text: text, id: Math.round(Math.random() * 1000) }]);
  };
 
  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };