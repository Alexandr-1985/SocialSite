import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import state, { addPost } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { updateNewPostText, subscribe } from "./redux/state";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          updateNewPostText={updateNewPostText}
          addPost={addPost}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};
rerenderEntireTree();
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
