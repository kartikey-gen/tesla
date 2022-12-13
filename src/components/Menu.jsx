import React from 'react'
import MenuItem from './MenuItem'
import './Menu.css'
const Menu = () => {
  return (
    <div className='menu'>
     <MenuItem title='existing inventory'></MenuItem> 
     <MenuItem title='used inventory'></MenuItem>
     <MenuItem title='trade-in'></MenuItem>  
     <MenuItem title='cybertruck'></MenuItem>
     <MenuItem title='roadster'></MenuItem>
     <MenuItem title='semi'></MenuItem>
     <MenuItem title='charging'></MenuItem>
     <MenuItem title='powerwall'></MenuItem>
     <MenuItem title='commercial solar'></MenuItem>
     <MenuItem title='test drive'></MenuItem>
     <MenuItem title='find us'></MenuItem>
     <MenuItem title='support'></MenuItem>
     <MenuItem title='United States'></MenuItem>
        </div>
  )
}

export default Menu