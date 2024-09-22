import React from 'react';
import Ellipsis from '../../assets/icons/icon-ellipsis.svg'
import { cardData } from './data';

export const Cards = () => {
  return (
    <div>
      {
        cardData.map((data) => (
          <div className={`cards_content ${data.class}`}>
            <div className='cards-image'>
              <img src={data.image} alt='icon-work' />
            </div>
            <div className='cards-container'>
              <div className='cards-menu'>
                <p className='cards-text text'>{data.nome}</p>
                <p className='cards-text time'>{data.horas}</p>
              </div>
              <div className='cards-time'>
                <img className='cards-icon' src={Ellipsis} alt='icon-ellipsis' />
                <p className='cards-text'>Last Week - {data.subhoras}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}
