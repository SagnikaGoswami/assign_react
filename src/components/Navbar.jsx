import { useState } from 'react';
import { TbMenu } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pages = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

    return (
        <div className="mb-30 md:mb-42">
            <nav className="flex justify-between items-center h-16 w-[90%] pt-6 px-6 lg:mx-auto relative">

                {/* logo section */}
                <div className="font-['Gerbil'] text-[28px] leading-[46px] tracking-normal font-[400]">
                    Elementum
                </div>

                {/* menu section */}
                <div className="flex items-center justify-end h-ful">
                    <ul
                        className={`flex flex-col absolute top-full right-0 w-[200px] z-10 text-right transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen
                            ? "scale-y-100 opacity-100 bg-white rounded-lg shadow-lg pointer-events-auto pr-4 pl-4"
                            : "scale-y-0 opacity-0 pointer-events-none"
                            }`}
                    >
                        {pages.map((page, index) => (
                            <div key={index} className="w-full">
                                <li className="w-full pt-2 pb-2 leading-[24px] text-[18px]">
                                    <Link
                                        to={page.toLowerCase() === "home" ? "/" : `/${page.toLowerCase()}`}
                                        className="block w-full"
                                    >
                                        {page}
                                    </Link>
                                </li>
                                <hr className="w-full border-t border-gray-300" />
                            </div>
                        ))}
                    </ul>

                    <ul className="hidden lg:flex items-center justify-end h-[24px] w-[533px] gap-x-15">
                        {pages.map((page, index) => (
                            <li
                                key={index}
                                className="text-[18px] leading-[24px] hover:text-gray-700 transition-colors duration-300 ease-in-out"
                            >

                                <Link
                                    to={page.toLowerCase() === "home" ? "/" : `/${page.toLowerCase()}`}
                                    className="block w-full"
                                >
                                    {page}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* menu icon */}
                    <div
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="cursor-pointer lg:hidden ml-4"
                    >
                        <TbMenu size={25} />
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar