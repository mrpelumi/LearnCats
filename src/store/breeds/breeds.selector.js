import {pick} from 'lodash';
import { createSelector } from '@reduxjs/toolkit';

export const selectBreedList = (state) => state.breed.breed_list;

export const selectBreedChange = (state) => state.breed.breed_change;


const selectBreedItem = (state) => state.breed.breed_item;

export const selectFilteredBreedItem = createSelector(
  [selectBreedItem],
  (breed_item) => {  
    const objKeysList = ['id', 'name', 'origin', 'temperament','description', 'life_span', 'reference_image_id'];
    const filteredBreedItem = pick(breed_item, objKeysList);
    return filteredBreedItem;
  }
)

 