import { combineReducers } from "@reduxjs/toolkit";
import { breedReducer } from "./breeds/breeds.reducer";


export const rootReducer = combineReducers({
  breed:breedReducer,
})
