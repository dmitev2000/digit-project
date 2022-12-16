import React from 'react'
import LocationBtn from './LocationsBtn';
import './Intro.css';
import SpecialOffer from './special-offer/SpecialOffer';
import CoffeeMachine from './dish/CoffeeMachine';

const Intro = () => {
  return (
    <div className='intro'>
        <LocationBtn />
        <CoffeeMachine />
        <SpecialOffer />
    </div>
  )
}

export default Intro;