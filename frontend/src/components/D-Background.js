import D1 from '../assets/D1.png';
import D2 from '../assets/D2.png';
import D3 from '../assets/D3.png';
import './D-Back.css';
import React from 'react'

const Dackgrount = () => {
  return (
    <>
    <div className='D1'>
      <img src={D1} alt="D1" className='D1' /> 
      <img src={D2} alt="D1" className='D1' />  
      <img src={D3} alt="D1" className='D1' /> 
    </div>
    
    </>
  )
}

export default Dackgrount
