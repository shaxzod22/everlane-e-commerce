import ShirtImage from './../../../assets/img/shirtImage.png'
import DenimImage from './../../../assets/img/denimImage.png'
import TeesImage from './../../../assets/img/tessImage.png'
import PantsImage from './../../../assets/img/pantsImage.png'
import SweatersImage from './../../../assets/img/sweatersImage.png'
import OutwearImage from './../../../assets/img/outerwearImage.png'
import './../../styles/homeStyles/Category.scss'

const CategorySection = () => {
  return (
    <section className="category">
      <div className="category__container container">
        <h2 className="category__heading">Shop by Category</h2>
        <ul className="category__list">
            <li className="category__item cursor">
                <img src={ShirtImage} alt="shirt" className="category__item__img" />
                <h3 className="category__inner__title">SHIRTS </h3>
            </li>
            <li className="category__item cursor">
                <img src={DenimImage} alt="denim" className="category__item__img" />
                <h3 className="category__inner__title">DENIM </h3>
            </li>
            <li className="category__item cursor">
                <img src={TeesImage} alt="tees" className="category__item__img" />
                <h3 className="category__inner__title">TEES </h3>
            </li>
            <li className="category__item cursor">
                <img src={PantsImage} alt="pants" className="category__item__img" />
                <h3 className="category__inner__title">PANTS </h3>
            </li>
            <li className="category__item cursor">
                <img src={SweatersImage} alt="sweater" className="category__item__img" />
                <h3 className="category__inner__title">SWEATERS </h3>
            </li>
            <li className="category__item cursor">
                <img src={OutwearImage} alt="outwear" className="category__item__img" />
                <h3 className="category__inner__title">OUTERWEAR </h3>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default CategorySection
