import React from 'react'
import { Button } from './Button'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='https://youtu.be/uqidwQms2_0' autoPlay loop muted />
            <p>Have a listen!</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'></Button>
            </div>
            
        </div>
    )
}

export default HeroSection
