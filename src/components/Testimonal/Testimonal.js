import React from 'react'
import './Testimonal.css'

function Testimonal() {
    return (
        <div className='testimonal-container'>
            <div className='doing-business-right'>
                <h3 className='testimonal-title'>DOING BUSINESS THE RIGHT WAY</h3>
                <p className='testimonal-text'>Fish is one of the last hunted food sources and like all hunted species, is under threat of overhunting. We've always known this threat and for the last 40 years, we've worked with whoever would listen to make sure that fish and seafood are caught in numbers that don't threaten their existence. We've worked with Governments and Non-Government Organisations across the world to make sure that there are always plenty of other fish in the sea.</p>
                <p className='testimonal-text'>We never buy fish from suppliers that don’t go about their business in the right way. Our fish and seafood always comes from well-managed fisheries and is always responsibly sourced. We don't do business with fishermen or farms that don't live up to our exacting standards. <span style={{fontWeight:'bold', cursor:'pointer'}}>Find out more here.</span></p>
                <p className='testimonal-text'>Let’s be straight. We want your business to do well, because when you do well, so do we. Simple. We promise to get you high quality, fresh fish and seafood at a fair price and deliver it with care every time. We are the fresh fish market on your doorstep.</p>
                <p className='testimonal-text'>Want to know more? Check out where we source our fish from and the big players in marine conservation we work with on sustainability. Get to know more about us, or sign up to get your local branch’s daily specials and offers sent straight to your phone or tablet. There’s always something special on but act quick to get first dibs.</p>
                <p className='testimonal-text'>Have a question? We’d love to help. Give us a call on 01296 610600. </p>
            </div>
            
            <div className='testimonal-safely-sourced-container'>
            <img className='testimonal-img' alt='Salmon' src='https://www.mjseafood.com/assets/uploads/images/large/1fb48d5b-26ac-425f-a841-fc80d677344b.jpg'/>
            <h3 className='safely-sourced-title'>Safely Sourced Seafood List</h3>
            <p className='safely-sourced-info'>Become part of the Fish2fork, Sustainable Restaurant Association and the Sustainable Fish Cities schemes.</p>
            </div>
            
        </div>
    )
}

export default Testimonal
