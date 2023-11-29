import React from 'react'
import './Landingpage.css'
import bgcimg3 from '../../assests/bgcimg3.jpg'
function Landingpage() {
  return (
    <div>
      <img className='img' src={bgcimg3}alt="loading"/>
      <div className='writtings'>
      <h2 className='writting-one'>COSMOSCOPE</h2>
      {/* <h1 className='writting-two'>SUCCESS</h1> */}
      </div>
    </div>
  )
}

export default Landingpage