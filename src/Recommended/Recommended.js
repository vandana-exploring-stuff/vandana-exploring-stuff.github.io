import React from 'react';
import './Recommended.css';
import Buttons from '../Components/Buttons';

export default function Recommended({handleClick}) {
  return <>
    <div>
       < h2 className='recommended-title'> Recommended </h2>
            <div className="recommended-flex">
                 <Buttons onClickHandler={handleClick} value='' title='All Products' />  
                 <Buttons onClickHandler={handleClick} value='Kids wear' title='Kids wear' />
                 <Buttons onClickHandler={handleClick} value='Top for girls' title='Top for girls' />
                 <Buttons onClickHandler={handleClick} value='Kurta pair' title='Kurta pair' />
                 <Buttons onClickHandler={handleClick} value='Tshirts' title='Tshirts' />
            </div>

    </div>
  
  </>
    
}
