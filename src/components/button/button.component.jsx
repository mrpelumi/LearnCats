import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { sample } from 'lodash';

import { selectBreedList, selectBreedChange } from '../../store/breeds/breeds.selector';
import { setBreedItem, setBreedChange } from '../../store/breeds/breeds.reducer';

import './button.styles.scss';


const Button = () => {
  const dispatch = useDispatch();
  const breedList = useSelector(selectBreedList);
  const breedChange = useSelector(selectBreedChange);

  useEffect(() => {
    const breedItem = sample(breedList);
    dispatch(setBreedItem(breedItem));
  }, [breedChange]);

  const clickHandler = () => dispatch(setBreedChange(!breedChange));

  return (
    <div className='button-container'>
      <button onClick={clickHandler}>REFRESH</button>
    </div>
  )
}

export default Button;