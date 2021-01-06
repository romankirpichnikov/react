import ReactDom from "react-dom";
import React from "react";
import App from "./App";

const product = {
  Title: "macbook",
  Cover:
    "https://cdnblob.moshi.com/uploadedfiles/photo/v3/productImages/1316/01.jpg",
  Price: "2000",
  Description: "asdasd sad as das d asd as das d asd as da sdas d asd asd",
  Discount: true
};
ReactDom.render(<App product={product} />, document.getElementById("root"));
