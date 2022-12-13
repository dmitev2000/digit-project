import React from 'react'
import LocationBtn from './LocationsBtn';
import './Intro.css';
import SpecialOffer from './special-offer/SpecialOffer';

const Intro = () => {
  return (
    <div className='intro'>
        <LocationBtn />
        <SpecialOffer />
    </div>
  )
}

export default Intro;