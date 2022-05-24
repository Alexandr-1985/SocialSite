import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "how are you", countLikes: 12 },
  { id: 2, message: "When are we do ", countLikes: 1 },
];

let dialogs = [
  { id: 1, name: "Viva" },
  { id: 2, name: "Alik" },
  { id: 3, name: "Olia" },
  { id: 4, name: "Ira" },
  { id: 5, name: "Vera" },
  { id: 6, name: "Anna" },
];

let messages = [
  { id: 1, message: "hi" },
  { id: 2, message: "how " },
  { id: 3, message: "myau" },
  { id: 4, message: "ou" },
  { id: 5, message: "you" },
  { id: 6, message: "the" },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
