import React from 'react'
import CardItems from './CardItems';
import './Card.css';

export const Card = () => {
  return (
    <div className='card'>
        <h1>Check out these Epic Destinations!</h1>
        <div className="card__container"></div>
        <div className="card__wrapper"></div>

        <ul className='card__items'>
            <CardItems
            src='/images/img-9.jpg'
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/services'
            />

           <CardItems
            src='/images/img-2.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Luxury'
            path='/services'
            />
            
        </ul>
       
          <ul className='card__items'>
            <CardItems
            src='/images/img-3.jpg'
            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
            label='Mystery'
            path='/services'
            />

           <CardItems
            src='/images/img-4.jpg'
            text='Experience Football on Top of the Himilayan Mountains'
            label='Adventure'
            path='/products'
            />

            <CardItems
            src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />

            </ul>
    </div>
  )
}
