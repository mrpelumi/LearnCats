import cardHeader from '../../assets/cats-world-header.png';
import './headerLogo.styles.scss';

const HeaderLogo = () => {
  return (
    <div className='logo-container'>
      <img src={cardHeader} alt="catsLogo" />
    </div>
  )
}

export default HeaderLogo;