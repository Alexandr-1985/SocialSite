import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  slidebarPage: sidebarReducer,
});

/* const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    slidebarPage: sidebarReducer,
  },
}); */

let store = createStore(rootReducers);
export type AppStateProps = ReturnType<typeof rootReducers>;
export default store;
