import { GoArrowRight } from "react-icons/go";
import { RiSearchLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import USDIMAGE from './../assets/img/USD.svg'
import Logo from './../assets/img/logo.svg'
import './styles/Header.scss'

const Header = () => {
    return (
        <header className="header">
        <section className="header__signup">
        <div className="header__signup__container">
        <div className="header__signup__wrapper">
        <p className="header__signup__title">Get early access on launches and offers. <span className="header__signup__direction__title cursor">Sign Up For Texts <GoArrowRight/></span></p>
        
        <img src={USDIMAGE} alt="USD icon" className="header__signup__lang__img" />
        </div>
        </div>
        </section>
        <section className="everlane">
        <div className="everlane__container">
        <ul className="everlane__type__list">
        <li className="everlane__type__item cursor">Women</li>
        <li className="everlane__type__item cursor active">Men</li>
        <li className="everlane__type__item cursor">About</li>
        <li className="everlane__type__item cursor">Everworld Stories</li>
        </ul>
        
        <img src={Logo} alt="logo" className="everlane__logo__img" />
        
        <ul className="everlane__services__list">
        <li className="everlane__services__item cursor">
        <RiSearchLine className="everlane__services__icon" />
        </li>
        <li className="everlane__services__item cursor">
        <FiUser className="everlane__services__icon" />
        </li>
        <li className="everlane__services__item cursor">
        <FiShoppingCart className="everlane__services__icon" />
        </li>
        </ul>
        </div>
        </section>
        <section className="categories">
            <div className="categories__container">
                <ul className="categories__list">
                    <li className="categories__item cursor">Holiday Gifting</li>
                    <li className="categories__item cursor">New Arrivals</li>
                    <li className="categories__item cursor">Best-Sellers</li>
                    <li className="categories__item cursor">Clothing</li>
                    <li className="categories__item cursor">Tops & Sweaters</li>
                    <li className="categories__item cursor">Pants & Jeans</li>
                    <li className="categories__item cursor">Outerwear</li>
                    <li className="categories__item cursor">Shoes & Bags</li>
                    <li className="categories__item cursor active">Sale</li>
                </ul>
            </div>
        </section>
        </header>
        )
    }
    
    export default Header
    