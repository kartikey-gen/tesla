import React from 'react'
import './Headerblock.css'
const Headerblock = () => {
  return (
    <div className='headerblock'>
        <div className='headerblock-info'>
            <div className='headblock-infotext'>
                <h1>Model 3</h1>
                <h4>
                    Order Online for <span>Touchless Delivery</span>
                </h4>
            </div>
        </div>
        <div className='headerblock-actions'>
                <button className='headerblock-buttonprimary'>Custom Order</button>
                <button className='headerblock-buttonsecondary'>Existing Inventory</button>
            </div>
    </div>
  )
}

export default Headerblock