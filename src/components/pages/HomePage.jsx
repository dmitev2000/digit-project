import React from 'react'
import Intro from '../ui/Intro';
import TastesYouLove from '../ui/tastesYouLove/TastesYouLove';

const HomePage = () => {
  return (
    <div>
        <Intro />
        {/* <BestSellers /> */}
        <TastesYouLove />
    </div>
  )
}

export default HomePage;