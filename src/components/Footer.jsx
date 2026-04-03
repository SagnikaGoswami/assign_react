

const Footer = () => {

    const footer = [
        {
            title: "Company",
            links: ["Home", "Studio", "Service", "Blog"]
        },
        {
            title: "Terms & Policies",
            links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"]
        },
        {
            title: "Follow Us",
            links: ["Instagram", "LinkedIn", "Youtube", "Twitter"]
        },
        {
            title: "Terms & Policies",
            links: ["1498w Fluton ste, STE 2D Chicgo, IL 63867.", "(123) 456789000", "info@elementum.com"]
        },

    ]

    return (
        <div className='flex flex-col justify-center items-center w-full mx-auto md:mt-22 lg:mt-42 bg-[#D7EEDD]'>
            {/* subscribe section */}
            <div className="flex flex-col items-center justify-center w-full md:w-[70%] p-8 md:p-12 mt-13">

                <h1 className="font-[400] text-[30px] md:text-[60px] lg:text-[100px] leading-[38px] md:leading-[75px] lg:leading-[116px] font-['Gerbil'] tracking-normal text-center mb-10">
                    Subscribe to
                    our newsletter
                </h1>

                <p className="text-center text-sm md:text-base lg:text-[24px] lg:leading-[36px] font-['Satoshi-Regular'] tracking-normal mb-10">
                    To make your stay special and even more memorable
                </p>

                <button className="px-6 py-3 md:px-7 md:py-4 bg-black text-white rounded-full text-sm md:text-base lg:text-[20px] lg:leading-[30px] font-['Satoshi-Bold'] tracking-normal cursor-pointer">
                    Subscribe Now
                </button>
            </div>

            <hr className='w-[90%] border-t-2 border-gray-500 mb-12 mt-5' />

            <footer className="px-10 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {
                        footer.map((item, index) => (
                            <div key={index}>
                                <h3 className="lg:text-[22px] lg:leading-[30px] font-['Gerbil'] mb-10 ">{item.title}</h3>
                                <ul>
                                    {
                                        item.links.map((link, index) => (
                                            <li key={index}
                                                className="lg:text-[22px] lg:leading-[30px] font-['Satoshi-Regular'] mb-5 cursor-pointer">
                                                {link}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </footer>

            <div className="flex justify-center mt-10">
                <p className="lg:text-[18px] lg:leading-[30px] font-['Satoshi-Regular'] text-center mb-5">
                    ©2023 Elementum. All rights reserved
                </p>
            </div>

        </div>
    )
}

export default Footer