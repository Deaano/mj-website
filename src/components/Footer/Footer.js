import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
        <div className='top-footer'>
            <div className='quick-link-container'>
            <h3 className='quick-links-title'>QUICK LINKS</h3>
            <ul className='quick-links-list'>
                <li className='quick-links'>
                    <a>Video Tutorials</a>
                </li>
                <li className='quick-links'>
                    <a>Where We Source From</a>
                </li>
                <li className='quick-links'>
                    <a>Sustainable Alternatives</a>
                </li>
                <li className='quick-links'>
                    <a>Skippers Catch</a>
                </li>
                <li className='quick-links'>
                    <a>Our Skippers</a>
                </li>
                <li className='quick-links'>
                    <a>Daily Specials</a>
                </li>
                <li className='quick-links'>
                    <a>sustainability</a>
                </li>
                <li className='quick-links'>
                    <a>The Fish Book</a>
                </li>
                <li className='quick-links'>
                    <a>Our Range</a>
                </li>
                <li className='quick-links'>
                    <a>Natasha's Law</a>
                </li>
                <li className='quick-links'>
                    <a>Market Review Summer 2021</a>
                </li>
            </ul>
            </div>
            <div className='contact-us-container'>
            <h3 className='contact-us-title'>CONTACT US</h3>
            <ul>
                <li className='contact-list'>
                    <p className='have-a-question'>Have a question?</p>
                </li>
                <li className='contact-list'>
                    <h3 style={{color:'white',fontSize:'1.3rem',fontFamily:'ariel'}}>01296 610600</h3>
                </li>
                <li className='contact-list'>
                    <a> enquiries@mjseafoods.co.uk</a>
                </li>
                <li className='contact-list'>
                    <p className='address'>M&J Seafood, 3-5 Faraday Road Rabans 
                    Lane Industrial Estate Aylesbury, Bucks, HP19 8RY</p>
                </li>
            </ul>
            </div>
            <div className='follow-us'>
                <h3 className='follow-us-title'>LIKE US? FOLLOW US...</h3>
                <p className='follow-us-text'>Keep up to date with the latest landings around the British coastline.</p>
                <i class="fab fa-twitter"></i>
            </div>
            </div>
            <div className='logos'>
                <img className='logo-img' src='https://www.mjseafood.com/assets/images/site/footer_family.jpg' />
                <img className='logo-img' src='https://www.mjseafood.com/assets/uploads/images/large/1f413987-7ee2-46dd-880d-40ca2f8da249.jpg' />
                <img className='logo-img' src='https://www.mjseafood.com/assets/uploads/images/large/7878f8c7-7a58-47e1-a457-05956dce9453.jpg' />
            </div>
            <div className='disclaimer-info'>
            <div className='disclaimer-list'>
                <ul className='bottom-footer-items'>
                    <li className='bottom-footer-links'>
                        <a>Legal disclaimer | </a>
                    </li>
                    <li className='bottom-footer-links'>
                        <a>Terms and Conditions of Sale | </a>
                    </li>
                    <li className='bottom-footer-links'>
                        <a>Modern Slavery Act | </a>
                    </li>
                    <li className='bottom-footer-links'>
                        <a>Natasha's Law | </a>
                    </li>
                    <li className='bottom-footer-links'>
                        <a>Market Review Summer 2021 | </a>
                    </li>
                    <li className='bottom-footer-links'>
                        <a>Gender Pay Gap Report | </a>
                    </li>
                    <li className='bottom-footer-links'>
                        <a>Sitemap | </a>
                    </li>
                    <li className='bottom-footer-links'>
                        <a>Privacy Policy | </a>
                    </li>
                    <li className='bottom-footer-links'>
                        <a>Cookie Setting | </a>
                    </li>
                </ul>
            </div>
            <p className='disclaimer-text'>M&J Seafood 2021. Registered office: Enterprise House, Eureka Business Park, Ashford, Kent. TN25 4AG. Registered in England No. 03053702.</p>
            </div>
            </div>
        
    )
}

export default Footer
