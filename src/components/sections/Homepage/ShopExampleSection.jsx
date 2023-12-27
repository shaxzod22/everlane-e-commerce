import LatestImage from './../../../assets/img/shoplatestImage.png'
import FavouritesImage from './../../../assets/img/shopfavouritesImage.png'
import OccasionImage from './../../../assets/img/shopOccasionImage.png'
import './../../styles/homeStyles/ShopExample.scss'

const ShopExampleSection = () => {
  return (
    <section className="shopExample">
    <div className="shopExample__container container">
        <ul className="shopExample__list">
            <li className="shopExample__item" style={{ backgroundImage:`url(${LatestImage})` }}>
                <h2 className="shopExample__inner__title">New Arrivals</h2>
                <button className="shopExample__btn cursor">SHOP THE LATEST</button>
            </li>
            <li className="shopExample__item" style={{ backgroundImage:`url(${FavouritesImage})` }}>
                <h2 className="shopExample__inner__title">New Arrivals</h2>
                <button className="shopExample__btn cursor">SHOP THE LATEST</button>
            </li>
            <li className="shopExample__item" style={{ backgroundImage:`url(${OccasionImage})` }}>
                <h2 className="shopExample__inner__title">New Arrivals</h2>
                <button className="shopExample__btn cursor">SHOP THE LATEST</button>
            </li>
        </ul>
    </div>
    </section>
  )
}

export default ShopExampleSection
