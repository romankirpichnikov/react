import ReactDom from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";
import books from "./books.json"

const author = {
  Name: "Фредрик",
  EMail: "fredrik@gmail.com",
  Avatar:
    "https://img.yakaboo.ua/media/entity/author/cache/1/thumbnail/540x/17f82f742ffe127f42dca9de82fb58b1/b/a/backman1.jpg",
  Bio:
    "Фредрик Бакман – известный шведский блогер, колумнист, фрилансер, популярный писатель. Его книги - бестселлеры переведены на 25 языков мира, а англоязычная версия романа «Вторая жизнь Уве» 42 недели возглавляла рейтинги «New York Times». Совокупный тираж книг - более пяти миллионов экземпляров, продаваемых в 40 странах мира. В 2013 году Фредрик признан самым успешным автором Швеции"
};


ReactDom.render(
  <App book={books[0]} author={author} />,
  document.getElementById("root")
);
