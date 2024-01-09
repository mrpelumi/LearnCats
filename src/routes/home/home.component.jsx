import Card from "../../components/card/card.component";
import Button from "../../components/button/button.component";
import HeaderLogo from "../../components/headerLogo/headerLogo.component";
import './home.styles.scss';

const Home = () => {
  return (
    <div className="main-container">
      <HeaderLogo />
      <Card />
      <Button />
    </div>
  )
}

export default Home;