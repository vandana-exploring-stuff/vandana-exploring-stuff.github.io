import React from 'react';
import './Category.css';
import Input from '../../Components/Input';

export default function Category({handleChange}) {
  return (
  <div>
     <h2 className="sidebar-title"> Category</h2>

       <div>
         <label  className='sidebar-label-container'>
             <input  onChange={handleChange} type='radio' value='' name='test' />
             <span className='checkmark'></span>All
         </label>
         </div>

         <Input
            handleChange= {handleChange}
            value='Kids wear'
            title='Kids wear'
            name='test'
          />
          <Input
            handleChange= {handleChange}
            value='Top for girls'
            title='Top for girls'
            name='test'
          />
          <Input
            handleChange= {handleChange}
            value='Kurta pair'
            title='Kurta pair'
            name='test'
          />
          <Input
            handleChange= {handleChange}
            value='Tshirts'
            title='Tshirts'
            name='test'
          />

           </div>
  );
}
