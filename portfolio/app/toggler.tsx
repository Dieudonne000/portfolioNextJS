import React from 'react'
import { FaMoon } from 'react-icons/fa6'
import { WiDaySunny } from 'react-icons/wi'

const Toggler = () => {
  return (
    <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="light" />

  {/* sun icon */}
    <WiDaySunny className='swap-on h-8 w-8 fill-current' />


  {/* moon icon */}
    <FaMoon className='swap-off h-8 w-8 fill-current' />
</label>
  )
}

export default Toggler