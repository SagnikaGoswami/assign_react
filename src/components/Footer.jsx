

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
        <div className='flex flex-col justify-center items-center w-full mx-auto relative md:mt-22 lg:mt-42 bg-[#D7EEDD]'>

            {/* left arrow */}
            <svg className="absolute top-0 left-1/3"
                width="178" height="123" viewBox="0 0 178 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z" fill="#FF6D6D" />
            </svg>

            {/* right arrow */}
            <svg className="absolute top-0 left-1/2"
                width="178" height="123" viewBox="0 0 178 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z" fill="#FF6D6D" />
            </svg>

            {/* ellipse */}
            <svg className="absolute md:right-10 md:top-50 lg:w-[183px] lg:h-[228px] md:w-[100px] md:h-[125px]  w-[50px] h-[60px] rotate-[-5deg] top-40 right-5 object-contain" 
            width="183" height="228" viewBox="0 0 183 228" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.9994 227.653C47.1247 219.642 34.9637 208.977 25.2106 196.267C15.4576 183.557 8.30358 169.05 4.15702 153.575C0.0104423 138.099 -1.04745 121.959 1.04373 106.075C3.1349 90.1908 8.33419 74.8742 16.3447 60.9995C24.3553 47.1248 35.0202 34.9638 47.7306 25.2108C60.441 15.4577 74.948 8.3037 90.4232 4.15712C105.898 0.0105539 122.039 -1.04734 137.923 1.04383C153.807 3.13501 169.123 8.3343 182.998 16.3449L121.999 121.999L60.9994 227.653Z" fill="#934CEC" />
            </svg>



            {/* subscribe section */}
            <div className="flex flex-col items-center justify-center w-full md:w-[70%] p-8 md:p-12 mt-23 md:mt-13">

                <h1 className="font-[400] text-[25px] md:text-[50px] lg:text-[100px] leading-[38px] md:leading-[75px] lg:leading-[116px] font-['Gerbil'] tracking-normal text-center mb-10">
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