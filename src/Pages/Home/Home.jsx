import React from 'react'
import Bannar from '../../Components/Bannar/Bannar'
import NewsSection from '../../Components/NewsSection/NewsSection'
import GellaryWithOthers from '../../Components/GellaryWithOthers/GellaryWithOthers'
import About from '../../Components/About/About'
import HeroImage from '../../Components/HeroImage/HeroImage'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <NewsSection></NewsSection>
            <GellaryWithOthers></GellaryWithOthers>
            <HeroImage></HeroImage>
            <About></About>
            <Footer></Footer>
        </div>
    )
}

export default Home