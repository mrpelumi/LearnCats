import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  breed_list: [],
  breed_item:{},
  breed_change:true,
}

export const breedSlice = createSlice({
  name:'breed',
  initialState: INITIAL_STATE, 
  reducers: {
    setBreedList: (state, action) => {
      state.breed_list = action.payload
    },
    setBreedItem: (state, action) => {
      state.breed_item = action.payload
    },
    setBreedChange: (state, action) => {
      state.breed_change = action.payload
    }
  }
})

export const {setBreedList, setBreedItem, setBreedChange} = breedSlice.actions;
export const breedReducer = breedSlice.reducer;