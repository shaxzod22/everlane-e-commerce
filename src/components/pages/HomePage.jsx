import Header from "../Header"
import CategorySection from "../sections/Homepage/CategorySection"
import MissionSection from "../sections/Homepage/MissionSection"
import ShopExampleSection from "../sections/Homepage/ShopExampleSection"
import ShopNowSection from "../sections/Homepage/ShopNowSection"

const HomePage = () => {
  return (
    <>
     <Header/> 
     <ShopNowSection/>
     <CategorySection/>
     <ShopExampleSection/>
     <MissionSection/>
    </>
  )
}

export default HomePage
