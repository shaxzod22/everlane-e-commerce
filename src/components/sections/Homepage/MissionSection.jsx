import MissionBg from './../../../assets/img/missionBg.png'
import './../../styles/homeStyles/Mission.scss'

const MissionSection = () => {
    return (
        <section className="mission">
        <div className="mission__container container" style={{ backgroundImage:`url(${MissionBg})` }}>
        <div className="mission__info__wrapper">
        <h2 className="mission__heading">We`re on a Mission To Clean Up the Industry</h2>
        <p className="mission__title">Read about our progress in our latest Impact Report.</p>
        </div>
        <button className="mission__btn cursor">LEARN MORE</button>
        </div>
        </section>
        )
    }
    
    export default MissionSection
    