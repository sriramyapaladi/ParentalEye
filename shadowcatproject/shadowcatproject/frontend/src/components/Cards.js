import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import cyberb from './pages/cyberb.jpg';
import onlinesafety from './pages/onlinesafety.jpg';
import predators from './pages/predators.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>What Can You Do with shadowcat?</h1>
      <p className="center paragraph-spacing font-large">
        You can use this free Android keylogger for parental control and employee monitoring.
        When you need to monitor someones phone,<br /> it will be your good helper.
      </p>
      <h1 className=" section-header font-small">Parental Control–Keep Kids Safe Online</h1>
      <p className="center paragraph-spacing font-large">
      With iKeyMonitor Android keylogger, parental control is easy. You can check your children’s keystroke inputs, including searched terms,<br />
      composed emails, sent text messages, and chat messages on Facebook, Instagram, WhatsApp, WeChat, Line, and more. With the alert<br />words
      feature, you may get instant alerts when there are inappropriate words in your children’s input and protect them from cyberbullies,<br />sexual
       predators, and cyberstalkers.
      </p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         {/* <ul className='cards__items'>
            <CardItem
              src='./image/img-1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='./images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
  </ul>*/}
          <ul className='cards__items'>
            <CardItem
              src={cyberb}
              text='Add alert words to detect cyberbullying
              65% of teens have been involved in a cyberbullying incident.'
              label='STOP CYBER-BULLYING'
              path='/services'
            />
            <CardItem
              src={predators}
              text='Monitor chat messages on social media
              82% of sex crimes involving a minor are initiated on social media.'
              label='SEXUAL PREDATORS'
              path='/products'
            />
            <CardItem
              src={onlinesafety}
              text='Block inappropriate websites
              75% of children share personal information about themselves and their families online.'
              label='ONLINE SAFETY'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;