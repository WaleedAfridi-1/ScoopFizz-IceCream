import React from 'react'
import Logo from './Logo&Name.jsx'
import Menu from './Menu.jsx'
import LgMenu from './LgMenu.jsx'
import FindScoopBtn from './FindScoopBtn.jsx'


const Nav = () => {
  return (
    <div className='Nav w-full h-28 lg:h-20 z-20  flex fixed top-0 bg-[#FFFFFF] shadow lg:px-15 justify-between '>
      <Logo/>
      <LgMenu/>
      <Menu/>
      <FindScoopBtn/>
    </div>
  )
}

export default Nav
