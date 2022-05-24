import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { render } from "@testing-library/react";

type Components = {
  component: Array<Components>;
};

const App: React.FC<Components> = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar activeClassName={""} />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => {
              <Dialogs dialogs={props.dialogs} messages={props.messages} />;
            }}
          />
          <Route
            path="/profile"
            render={() => {
              <Profile posts={props.posts} />;
            }}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
