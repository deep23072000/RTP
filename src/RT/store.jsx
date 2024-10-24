import { configureStore } from "@reduxjs/toolkit";
import ecomReducer from './ecomSlice.jsx';
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from "redux-persist";


const persistConfig = {
    key: 'root',
    storage
  }

  const persistedReducer = persistReducer(persistConfig, ecomReducer)
 
const store = configureStore({
    reducer:{
        ecom: persistedReducer
    }
})
export {store};

export const persistor = persistStore(store)

