// store.js
import { configureStore } from "@reduxjs/toolkit";
// import * as actionTypes from "_constants__WEBPACK_IMPORTED_MODULE_0__";
import localforage from "localforage";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import userReducer from "./slices/userSlice";
import frameReducer from "./slices/frameSlice";
import cartReducer from "./slices/cartSlice";
import paymentReducer from "./slices/paymentSlice";


const combinedReducer = combineReducers({
  user: userReducer,
  frames: frameReducer,
  cart: cartReducer,
  payment: paymentReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

const persistConfig = {
  key: "redux",
  storage: localforage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Make sure to configure localforage bxefore the Redux store is created
localforage.config({
  driver: localforage.INDEXEDDB, // or localforage.LOCALSTORAGE
  name: "FBE",
  storeName: "FBE",
  version: 1.0,
  description: "FBE store",
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
