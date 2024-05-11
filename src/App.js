import {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';


import {setBreedList, setBreedChange} from './store/breeds/breeds.reducer';
import { selectBreedChange } from './store/breeds/breeds.selector';


import Home from './routes/home/home.component';

function App() {
  const dispatch = useDispatch();
  const breedChange = useSelector(selectBreedChange);

  useEffect(() => {
    const cat_response = async () => {
    try{
      const response = await axios.get("https://api.thecatapi.com/v1/breeds");
      dispatch(setBreedList(response.data));
      dispatch(setBreedChange(!breedChange));
    } catch (error){
      console.error(error);
    }
  }
  cat_response();
  }, []);
   
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
    
    
}

export default App;
