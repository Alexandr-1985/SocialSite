import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { render } from "@testing-library/react";
import { StateType } from "./redux/state";
type AppPropsType = {
  state: StateType;
  dispatch: (message: string) => void;
};
const App = (props: AppPropsType) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs"
            element={<Dialogs dialogsPage={props.state.dialogsPage} />}
          />

          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
