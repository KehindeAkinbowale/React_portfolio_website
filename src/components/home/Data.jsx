import React from 'react'
import hand from "../../assets/hand.svg"
import './home.css'

const Data = () => {
  return (
    <div className='home__data'>
        <h1 className='home__title'>Hello<img className='home__hand' src={hand} alt="hand" /> I'm Segun
        </h1>
        <h3 className='home__subtitle'>Business Data analyst</h3>
        <p className="home__description">I'm a creative designer based in New York, and I'm very passinate and dedicated to my work.</p>
        <a href="#contact" className='button home_button button--flex'>
            Say Hello <svg style={{width: "25px",
                                    height: "25px"
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="message"><path fill="var(--container-color)" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"></path></svg>
        </a>
    </div>
  )
}

export default Data