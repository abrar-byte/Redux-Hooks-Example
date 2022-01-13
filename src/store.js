import { createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web



const initialState = {
  mode: "bg-light"
};

// membuat variabel state


export const reducer = (state = initialState, a) => {
  // a adalah  action

  if (a.type === "gantiMode") {
    return { ...state, mode: a.mode };
  }
  return state;
};
// buat nyimpen setState
const persistedReduser = persistReducer(
  { key: "j", storage }, reducer
)
// buat local storage untuk state dan set statenya

export const store = createStore(persistedReduser
)
export const persistor = persistStore(store)
// buat storenya diambil dari local storage "persistedReduser"


