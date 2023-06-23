import React from 'react'

import imgicon1 from '../../assects/images/avator-six.jpg';
import CardlData from './card-data';
const Cards = () => {
  return (
    <div style={{backgroundColor: '#F3F4F6'}}>
    <div className="container">
      <div className="row">
        <div className="">
          <h1 className="text-center text-danger" style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: 600, fontFamily: 'Poppins, sans-serif', margin: '10rem 0 8px', display: 'flex', justifyContent: 'center' }}>TOTAL FINANCIAL FREEDOM</h1>
          <h2 className="text-center" style={{ fontSize: '3.5rem', lineHeight: '1.2', fontWeight: 600, fontFamily: 'Poppins, sans-serif', margin: '0 0 8px', display: 'flex', justifyContent: 'center' }}>Comprehensive Solution For Individuals &</h2>
          <h2 className="text-center" style={{ fontSize: '3.5rem', lineHeight: '1.2', fontWeight: 600, fontFamily: 'Poppins, sans-serif', margin: '0 0 8px', display: 'flex', justifyContent: 'center' }}>Businesses Seeking Funding</h2>
        </div>
      </div>
     
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {CardlData.map((item, index) => (
          <div key={index} className="col">
            <div className="card text-center" style={{ height: '308px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <img src={item.icon} className="card-img-top" style={{ width: '100px', height: '100px', padding: '8px' }} alt={`icon-${index}`} />
              </div>
              <h4 className="card-title" style={{ color: '#1F2937', fontSize: '1.25rem', fontWeight: 600, fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>{item.title}</h4>
              <p className="card-text" style={{ color: '#4B5563', fontSize: '1rem', fontFamily: 'Poppins, sans-serif', textAlign: 'center', padding: '8px' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Cards