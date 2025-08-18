import React, { useState } from 'react'
import Container from '../Components/Container'
import logo from '../assets/Logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = () => {
    let [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    }
  
    return (
        <header className='py-3'>
            <Container>
                <div className='lg:flex items-center'>
                    <div className='w-2/12'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='w-full lg:w-10/12'>
                        <ul className={`lg:flex gap-6 justify-center duration-300 ease-in-out text-center
                            ${menu == true 
                                ? "bg-[silver] h-[200px] opacity-100" 
                                : "bg-[#262626] h-[0px] opacity-0 overflow-hidden"} 
                            lg:bg-transparent lg:h-auto lg:opacity-100 lg:overflow-visible`}>
                                
                                <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out cursor-pointer'> <Link to={"/"}>Home </Link></li>
                              
                          
                            <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out cursor-pointer'><Link to={"/Shop"}>Shop</Link></li>
                            <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out cursor-pointer'>About</li>
                            <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out cursor-pointer'>Contact</li>
                            <li className='font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out cursor-pointer'>Journal</li>
                        </ul>
                    </div>
                    <div className='lg:hidden absolute top-[10px] right-2' onClick={handleMenu}>
                        {menu ? <RxCross1 /> : <FaBars />}
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
