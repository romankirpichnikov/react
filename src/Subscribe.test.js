import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Subscribe from "./Subscribe";

describe("render subscribe card", () => {
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
      Progress: "50"
    }
  ];

  const author = {
    Name: "Фредрик",
    EMail: "fredrik@gmail.com",
    Avatar:
      "https://img.yakaboo.ua/media/entity/author/cache/1/thumbnail/540x/17f82f742ffe127f42dca9de82fb58b1/b/a/backman1.jpg",
    Bio:
      "Фредрик Бакман – известный шведский блогер, колумнист, фрилансер, популярный писатель. Его книги - бестселлеры переведены на 25 языков мира, а англоязычная версия романа «Вторая жизнь Уве» 42 недели возглавляла рейтинги «New York Times». Совокупный тираж книг - более пяти миллионов экземпляров, продаваемых в 40 странах мира. В 2013 году Фредрик признан самым успешным автором Швеции",
    MinPrice: books[0].Price,
    DesiredPrice: "999",
    CollectedAmount: "25",
    ExpectedAmount: "1000000"
  };

  describe("render author profile", () => {
    test("render author Card", () => {
      const { getByText } = render(<Subscribe author={author} />);

      expect(getByText(author.Name)).toBeInTheDocument();
      expect(getByText(author.Bio)).toBeInTheDocument();
      expect(getByText(author.MinPrice)).toBeInTheDocument();
      expect(getByText(author.DesiredPrice)).toBeInTheDocument();
      expect(getByText(`${author.CollectedAmount} %`)).toBeInTheDocument();
      expect(getByText(author.ExpectedAmount)).toBeInTheDocument();
    });

    test("render an empty author profile", () => {
      const { getByText } = render(<Subscribe />);

      expect(getByText("Empty author profile")).toBeInTheDocument();
    });
  });
  describe("render books Card", () => {
    test("render books", () => {
      const { getByText } = render(<Subscribe books={books} />);

      expect(getByText(books[0].Title)).toBeInTheDocument();
      expect(getByText(books[0].Price)).toBeInTheDocument();
      expect(getByText(books[0].Description)).toBeInTheDocument();
    });

    test("render an empty books", () => {
      const { getByText } = render(<Subscribe />);

      expect(getByText("Empty books collection")).toBeInTheDocument();
    });
  });
});