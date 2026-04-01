import { useState } from 'react';
import { TbMenu } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pages = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

    return (
        <div>
            <nav className=" flex justify-around items-center h-16 w-full lg:mx-auto relative">

                {/* Logo */}
                <div className="font-['Gerbil'] font-normal text-[28px] leading-[46px] tracking-normal text-center">
                    Elementum
                </div>

                {/* Pages */}
                {/* <ul className={`lg:flex justify-around items-center  h-[24px] w-[533px] py-3 px-4 ${isMenuOpen ? 'flex flex-col absolute top-full right-0 w-[10%]  z-10 text-right' : 'hidden'}`}>
                    <li className={`text-[18px] leading-[24px] ${isMenuOpen ? 'pt-4' : ''}`}>Home</li>
                    <li className={`pl-4 text-[18px] leading-[24px] ${isMenuOpen ? 'pt-4' : ''}`}>Studio</li>
                    <li className={`pl-4 text-[18px] leading-[24px] ${isMenuOpen ? 'pt-4' : ''}`}>Services</li>
                    <li className={`pl-4 text-[18px] leading-[24px] ${isMenuOpen ? 'pt-4' : ''}`}>Contact</li>
                    <li className={`pl-4 text-[18px] leading-[24px] ${isMenuOpen ? 'pt-4' : ''}`}>FAQs</li>
                </ul> */}

                <ul className={`flex flex-col absolute top-full right-[20px] w-[30%] z-10 text-left transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                    {pages.map((page, index) => (
                        <div key={index} className='w-full'>
                            <li className=' w-full pt-2 pb-2 leading-[24px] text-[18px]'>
                                <Link to={page.toLowerCase()==='home' ? '/' : `/${page.toLowerCase()}`}
                                className='block w-full'
                                >
                                {page}
                                </Link>
                            </li>
                            <hr className='w-full border-t border-gray-300' />
                        </div>
                        
                    ))}
                </ul>

                <ul className="hidden lg:flex justify-around items-center  h-[24px] w-[533px] py-3 px-4">
                    {pages.map((page, index) => (
                        <li key={index}
                        className='pl-4 text-[18px] leading-[24px]'
                        >
                            {page}
                        </li>
                    ))}
                </ul>

                {/* menu icon */}
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer lg:hidden">
                    <TbMenu size={25} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar