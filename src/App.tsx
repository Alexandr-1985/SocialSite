import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { StateType, StoreType } from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import store from "./redux/redux-store";

type AppPropsType = {
  state: StateType;
  dispatch: Function;
  store: Array<string>;
};
const App = (props: AppPropsType) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
