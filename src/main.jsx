import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BookProvider } from "./context/BookContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookProvider>
    <App />
  </BookProvider>
);
