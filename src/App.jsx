import './App.css'
import BestDeal from './Components/BestDeal/BestDeal'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import HowItWorks from './Components/HowItWorks/HowItWorks'
import Navbar from './Components/Navbar/Navbar'
import PhotoComp from './Components/PhotoComp/PhotoComp'
import Trending from './Components/Trending/Trending'

function App() {

  return (
    <>
       <Navbar />
       <Hero />
       <HowItWorks />
       <PhotoComp />
       <Trending />
       <BestDeal />
       <Footer />
    </>
  )
}

export default App
