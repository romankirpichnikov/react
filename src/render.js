import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";

const product = {
  Title: "macbook",
  Cover:
    "https://cdnblob.moshi.com/uploadedfiles/photo/v3/productImages/1316/01.jpg",
  Price: "2000",
  Description: "asdasd sad as das d asd as das d asd as da sdas d asd asd",
  Discount: true
};

const render = () => ReactDOMServer.renderToString(<App product={product} />);

export default render;
