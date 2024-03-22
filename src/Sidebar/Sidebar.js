import React from 'react';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import './Sidebar.css';

export default function Sidebar({handleChange}) {
  
  return (
      <>
            <section className="sidebar">
              <div>
              <h1 className='sidebar-title'>  </h1>
              </div>
                <Category handleChange={handleChange} />
                <Price handleChange={handleChange} />
                <Colors handleChange={handleChange} />
            </section>
  </>
  );
}
