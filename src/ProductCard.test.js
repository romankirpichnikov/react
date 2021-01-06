import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductCard from "./ProductCard";

test("render product in a Card", () => {
  const product = {
    Title: "macbook",
    Cover:
      "https://cdnblob.moshi.com/uploadedfiles/photo/v3/productImages/1316/01.jpg",
    Price: "$2000",
    Description: "description",
    Discount: true
  };

  const { getByText } = render(<ProductCard product={product} />);

  expect(getByText("$2000")).toBeInTheDocument();
  expect(getByText("macbook")).toBeInTheDocument();
  expect(getByText("description")).toBeInTheDocument();
});

test("render an empty product in a Card", () => {
  const { getByText } = render(<ProductCard />);

  expect(getByText("Empty product")).toBeInTheDocument;
});
