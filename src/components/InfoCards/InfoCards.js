import React from 'react'
import './InfoCards.css'

const cardData = [
    {
        id:1,
        img:'https://www.mjseafood.com/assets/uploads/images/large/94716978-53c3-43c0-8ce1-dda48a1dc808.jpg',
        title:'NEW ONLINE APP',
        info: 'Download our fast & efficient app from the Play & App store now!',
    }
    ,{
        id:2,
        img:'https://www.mjseafood.com/assets/uploads/images/large/34cbec1c-d5d4-4f6e-a778-430ccfaddbf2.jpg',
        title:'BECOME A CUSTOMER',
        info:'If you need straightforward, no nonsense fishmongery fresh to your kitchen call us today or sign up online.',
    }
    ,{
        id:3,
        img:'https://www.mjseafood.com/assets/uploads/images/large/6423a39c-4f62-473c-b0a9-d72adbbbff51.jpg',
        title:'KEEPING YOU SAFE AND SECURE',
        info:'Some of the critical measures and support mechanisms we have in place...',
        alt:'KEEPING YOU SAFE'
    }
    ,{
        id:4,
        img:'https://www.mjseafood.com/assets/uploads/images/large/96710005-3762-4c44-b376-8b9b7a4cef04.jpg',
        title:'FILLETING KNOWLEDGE',
        info:'Years of experience and skill at your fingertips with these filleting video lessons.',
        alt:'FILLETING KNOWLEDGE'
    }
    ,{
        id:5,
        img:'https://www.mjseafood.com/assets/uploads/images/large/af9c12ac-96e5-4f5e-8bff-9e997a83c071.jpg',
        title:'FOLLOW US',
        info: 'Get your hands on the latest landings around the British coastline - sometimes while the skipper is still out at sea.',
        alt:'FOLLOW US'
    }
    ,{
        id:6,
        img:'https://www.mjseafood.com/assets/uploads/images/large/8c0b9cf6-805e-498c-b7f6-f424ec5bb8e9.jpg',
        title:'FIND YOUR LOCAL M&J HERE' ,
        info:'Local means we can move quickly. Local means quick delivery so your fresh fish stays fresh.',
        alt:'FIND YOUR LOCAL M&J HERE'
    }
    ,{
        id:7,
        img:'https://www.mjseafood.com/assets/uploads/images/large/194c7c86-f83a-4066-97a2-ea35ac80a2e2.jpg',
        title:'OUR FISH AND SEAFOOD',
        info:'If you want it, we can get it (as long it’s responsible to do so). See our range of products here.',
        alt:'OUR FISH AND SEAFOOD'
    }
    ,{
        id:8,
        img:'https://www.mjseafood.com/assets/uploads/images/large/1b881efd-8e09-4d0f-8202-c6c8ed7122c2.jpg',
        title:'BEST IN THE BUSINESS',
        info:'Leave the worrying to us. The way we go about our business is safe, accredited and globally recognised.',
        alt:'BEST IN THE BUSINESS'
    }
    ,{
        id:9,
        img:'https://www.mjseafood.com/assets/uploads/images/large/fafd0389-3e3d-45ce-b6f9-d9ccfc0e0e89.jpg',
        title:'FISHMONGERING - MORE THAN A JOB',
        info:"It's a tradition that's handed down from master to apprentice.",
        alt:'MORE THAN A JOB'
    }
]







function InfoCards() {
    return (
        <div className='infoCard'>
        <div className='infocards-container'>
            
                <p className='paragraph'>
                M & J SEAFOOD. FORTY YEARS OF FRESH, SALT-OF-THE-EARTH FISH MONGERING. 
                WORKING 24 HOURS A DAY, SIX DAYS A WEEK TO BRING THE DAILY LOCAL 
                FISH AND SEAFOOD LANDINGS AND THE BEST OF THE 
                WORLD'S CATCH TO YOUR KITCHEN DOOR EVERY MORNING.
                ALL RESPONSIBLY SOURCED AND EXPERTLY FILLETED BY THE BEST IN THE BUSINESS.
                </p>
        
            </div>
            {cardData.map(card =>
             { return(
                <div key={card.id} className='card-container'>
                    <img className='card-img' src={card.img}  alt={card.alt} />
                    <span className='card-title'>{card.title}</span>
                    <p className='card-info'>{card.info}</p>
                </div>)
            })}
        </div>
    )
}

export default InfoCards
