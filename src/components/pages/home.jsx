import '../../App.css'
import React from 'react';
import HeroSec from '../HeroSec'
import { Card } from '../Card'; 
import Footer from './Footer';

function Home() {
    return(
         <>
         <HeroSec/>
         <Card/>
         <Footer/>
         </>

    );
}

export default Home;