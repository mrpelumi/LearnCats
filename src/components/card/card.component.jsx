import { useSelector } from 'react-redux';
import { selectFilteredBreedItem } from '../../store/breeds/breeds.selector';

import './card.styles.scss';


const Card = () => {
  const filteredBreedItem = useSelector(selectFilteredBreedItem); 
  const {name, origin, temperament,description, life_span, reference_image_id} = filteredBreedItem;

  
 return ( 
    <div className='card-container'>
      <div className='image-container'>
        <img src={`https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`} alt='Cats' />
      </div>
      <div className='detail-container'>
        <p className='cat-name'>Name: <span className='name-text'> {name}</span></p>
        <p className='cat-origin'>Origin: <span className='origin-text'>{origin}</span> </p>
        <p className='cat-description'>Description: <span className='description-text'>{description}</span> </p>
        <p className='cat-temperament'>Temperament: <span className='temperament-text'>{temperament}</span> </p>
        <p className='cat-life_span'>Life-Span: <span className='life_span-text'>{life_span} Years</span> </p>
      </div>
    </div>
  )
}

export default Card;