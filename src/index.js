import ReactDom from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";
import books from "./books.json";
import authors from "./authors.json";
ReactDom.render(
  <App book={books[0]} authors={authors} />,
  document.getElementById("root")
);
