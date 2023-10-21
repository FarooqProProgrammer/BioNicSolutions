import React, { useContext } from 'react'
import "./index.css"
import logo from "../../assets/Logo/Logo.png"
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { IconButton } from '@chakra-ui/react'
import { AiOutlineMenu } from "react-icons/ai"
import MobileHeader from '../MobileHeader'
import { NavContext } from '../../Hooks/NavContext'
import {ImCross} from "react-icons/im"

export default function Header() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' });
    const {NavEnabled,isNavOpen,NavDisabled} = useContext(NavContext);

    return (
        <>
         <div className='Header lg:px-5 md:px-5 sm:px-2 relative'>

            <img
                src={logo}
                alt=''
            />

            {
                !isTabletOrMobile && <>  <div className='HeaderLinks flex justify-center items-center gap-4'>

                    <select className='bg-transparent text-white cursor-pointer'>
                        <option>Services</option>
                    </select>

                    <select className='bg-transparent text-white cursor-pointer'>
                        <option>Industries</option>
                    </select>

                    <Link className='text-white cursor-pointer'>Case Studies</Link>
                    <Link className='text-white cursor-pointer'>About Us</Link>
                    <Link className='text-white cursor-pointer'>Blog</Link>
                    <Link className='text-white cursor-pointer'>Contact</Link>


                </div>

                    <div className='HeaderButtons flex justify-center items-center gap-3'>
                        <h4 className='text-white'>+34325657567</h4>
                        <button className='bg-[#13C4A3] text-md px-5 py-1 rounded-md text-gray-800'>Contact Us</button>
                    </div>

                </>
            }

            {
                isTabletOrMobile && isNavOpen ?
                
                <IconButton onClick={NavDisabled}>
                    <ImCross />
                </IconButton> :  <IconButton onClick={NavEnabled}>
                    <AiOutlineMenu />
                </IconButton>
            }
            
        </div>
            
            {
                isNavOpen &&  <MobileHeader />
            }
       
        
        </>
       
    )
}
