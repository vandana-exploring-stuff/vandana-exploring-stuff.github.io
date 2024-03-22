import React from 'react';
import './Colors.css';
import Input from '../../Components/Input';

export default function Colors({handleChange}) {
   return (
      <div>
         <h2 className="sidebar-title color-title"> Colors</h2>
         <label  className='sidebar-label-container'>
             <input  onChange={handleChange} type='radio' value='' name='test3' />
             <span className='checkmark all'></span>All
         </label>
         <Input 
                handleChange= {handleChange}
                value='black'
                title='Black'
                name='test3'
                color='black'
             />
             <Input 
                handleChange= {handleChange}
                value='blue'
                title='Blue'
                name='test3'
                color='blue'
             />
             <Input 
                handleChange= {handleChange}
                value='orange'
                title='orange'
                name='test3'
                color='orange'
             />
             <Input 
                handleChange= {handleChange}
                value='green'
                title='Green'
                name='test3'
                color='green'
             />
             <Input 
                handleChange= {handleChange}
                value='pink'
                title='pink'
                name='test3'
                color='pink'
             />
             <label className='sidebar-label-container'>
                  <input type='radio' onChange={handleChange} value='white' name='test3' />
                  <span className='checkmark' style={{background:'white', border:'2px solid black'}} />White

             </label>
      </div>
      );
}
