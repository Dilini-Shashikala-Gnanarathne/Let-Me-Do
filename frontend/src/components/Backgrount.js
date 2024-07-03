import B1 from '../assets/B1.png';
import B2 from '../assets/B2.png';
import B3 from '../assets/B3.png';
import R2 from '../assets/R2.png';
import R3 from '../assets/R3.png';

import React from 'react'

const Backgrount = () => {
  return (
    <>
    <div className='b1'>
    <img src={B1} alt="b1" className='b1' /> 
      <img src={B2} alt="b1" className='b1' />  
      <img src={B3} alt="b1" className='b1' /> 
    </div>
    <div className='b2'>
      <img src={R2} alt="R1" className='b2' />  
      <img src={R3} alt="R1" className='b2' /> 
    </div>
    </>
  )
}

export default Backgrount
