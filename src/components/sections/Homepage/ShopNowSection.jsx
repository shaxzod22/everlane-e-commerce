import imageBg from './../../../assets/img/shopNowBg.png'
import './../../styles/homeStyles/ShopNow.scss'

const ShopNowSection = () => {
  return (
    <section className="shopNow" style={{ backgroundImage:`url(${imageBg})` }}>
      <div className="shopNow__container">
        <h2 className="shopNow__heading">Your Cozy Era</h2>
        <p className="shopNow__title">Get peak comfy-chic with new winter essentials.</p>
        <button className="shopNow__btn cursor">SHOP NOW</button>
      </div>
    </section>
  )
}

export default ShopNowSection
