import React, { useEffect, useRef, useState } from 'react';
import logo from "../assets/logo.PNG";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const closeMenu = (e) => {
            if (menuRef.current && menuRef.current.contains(e.target)) {
                return;
            }
            setIsMenuOpen(false);
        };

        document.addEventListener('click', closeMenu);

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [menuRef]);



    return (
        <div className='shadow-md bg-white w-full sticky top-0 z-1001000 md:w-[100%] h-[80px] justify-between flex px-11'>
            <Link to="/">
                <div className='flex items-center justify-center h-full'>
                    <img src={logo} alt="protadacom" className='w-full h-full' />
                    
                </div>

            </Link>
            <div className='md:flex hidden'>
                <ul className='flex gap-9 text-[#4A5568] font-inter justify-center items-center font-bold text-lg'>
                    

                    <li>
                        <button >
                            <Link to="/AboutUs">About us</Link>
                        </button>
                    </li>
                    <li>
                        <button >
                            <Link to="/Services">Services</Link>
                        </button>
                    </li>
                    <li>
                        <button >
                            <Link to="/Casestudies">Case Studies</Link>
                        </button>
                    </li>
                    
                    <li className='text-white'>
                        <button className='gradient rounded-sm py-2 px-7' >
                            <Link to="/Contact">Contact</Link>
                        </button>
                    </li>
                </ul>
            </div>
            <div className='md:hidden mt-8 ' ref={menuRef}>
                <button onClick={toggleMenu}>
                    <MenuIcon />
                </button>
                {isMenuOpen && (
                    <div className=' fixed top-[10%] px-2 right-1 w-[35%] flex flex-col h-full bg-white gap-4 items-center text-lg'>
                        <button className='text-start w-full border-b-2 mb-3 mt-3' >
                            <Link to="/">Home</Link>
                        </button>

                        <button className='text-start w-full border-b-2 mb-3 mt-3' >
                            <Link to="/AboutUs">About Us</Link>
                        </button>
                        <button className='text-start w-full border-b-2 mb-3 mt-3' >
                            <Link to="/Services">Services</Link>
                        </button>
                        <button className='text-start w-full border-b-2 mb-3 mt-3' >
                            <Link to="/Casestudies">Case Studies</Link>
                        </button>
                       
                        <button className='gradient w-full flex items-start rounded-sm py-2 px-5 text-white'>
                            <Link to="/Contact">Contact</Link>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
