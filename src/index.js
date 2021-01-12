import ReactDom from "react-dom";
import React from "react";
import App from "./App";

const books = [
  {
    Id: 1,
    Title: "Вторая жизнь Уве",
    Description:
      "На первый взгляд Уве самый неуживчивый чело­век на свете. Он, как и многие из нас, считает, что его окружают преимущественно идиоты – соседи, непра­вильно паркующие машины; продавцы, говорящие на птичьем языке; бюрократы, отравляющие жизнь нор­мальным людям...",
    Cover: "https://cdn1.ozone.ru/multimedia/wc1200/1037906986.jpg",
    Price: "387",
    Pages: "384",
    Language: "RU",
    Progress: "50",
    SubscribeInfo: {
      MinPrice: 500,
      DesiredPrice: "999",
      CollectedAmount: "25",
      ExpectedAmount: "1000000"
    }
  }
];

const author = {
  Name: "Фредрик",
  EMail: "fredrik@gmail.com",
  Avatar:
    "https://img.yakaboo.ua/media/entity/author/cache/1/thumbnail/540x/17f82f742ffe127f42dca9de82fb58b1/b/a/backman1.jpg",
  Bio:
    "Фредрик Бакман – известный шведский блогер, колумнист, фрилансер, популярный писатель. Его книги - бестселлеры переведены на 25 языков мира, а англоязычная версия романа «Вторая жизнь Уве» 42 недели возглавляла рейтинги «New York Times». Совокупный тираж книг - более пяти миллионов экземпляров, продаваемых в 40 странах мира. В 2013 году Фредрик признан самым успешным автором Швеции",
};

ReactDom.render(
  <App books={books} author={author} />,
  document.getElementById("root")
);
