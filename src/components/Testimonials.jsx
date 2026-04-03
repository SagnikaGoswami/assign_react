import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Testimonials = () => {

    const images1 = [
        {
            src: '/images/img1_left.png',
            alt: 'img1',
            position: "bottom-1/3 left-25 -translate-y-1/2",
            size: "w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20"
        },
        {
            src: '/images/img1.png',
            alt: 'img1',
            position: "top-1/3 left-[10%] lg:top-[25%] -translate-y-1/2",
            size: "w-24 h-24 md:w-32 md:h-32 lg:w-15 lg:h-15"
        },
        {
            src: '/images/img3_left.png',
            alt: 'img3',
            position: "top-[12%] left-[36%] lg:top-0 lg:left-[30%] z-10",
            size: "w-20 h-20 md:w-24 md:h-24 lg:w-50 lg:h-50"
        },
    ]

    const images2 = [
        {
            src: '/images/img3.png',
            alt: 'img3',
            position: "bottom-1/3 right-25 -translate-y-1/2",
            size: "w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20"
        },
        {
            src: '/images/img8.png',
            alt: 'img8',
            position: "top-1/3 right-[10%] lg:top-[25%] -translate-y-1/2",
            size: "w-24 h-24 md:w-32 md:h-32 lg:w-15 lg:h-15"
        },
        {
            src: '/images/img6.png',
            alt: 'img6',
            position: "top-[12%] right-[36%] lg:top-0 lg:right-[30%] z-10",
            size: "w-20 h-20 md:w-24 md:h-24 lg:w-50 lg:h-50"
        },
    ]

    return (
        <div className='flex flex-col md:flex-row justify-center items-center w-full mx-auto mt-40 mb-40 md:mt-22 md:mb-80'>

            {/* left image section */}
            <div className='hidden md:block w-[25%] mx-auto mt-35 lg:mt-25 relative'>
                {
                    images1.map((image, index) => (
                        <img key={index}
                            src={image.src}
                            alt={image.alt}
                            className={`absolute ${image.size} rounded-full object-cover border-4 border-white ${image.position}`}
                        />
                    ))
                }
            </div>


            {/* head */}
            <div className="w-full md:w-[50%]">
                {/* heading */}
                <h1 className="w-full mb-3 md:mb-10 lg:text-[56px] lg:leading-[66px] md:text-[36px] md:leading-[46px] font-['Gerbil'] font-[400] text-center">

                    <span className="relative inline-block mx-2 lg:mx-10">
                    <span className="relative z-10 px-3">What</span>
                    <svg
                        className="absolute left-[15px] md:left-[26px] lg:left-[28px] top-1/2 lg:top-[35px] -translate-y-1/2 -translate-x-[15%] w-full  lg:w-[4.2em] h-[1.2em] rounded-full z-0"
                        viewBox="0 0 456 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <rect width="456" height="109" rx="54.5" fill="#D7EEDD" />
                    </svg>
                </span>
                    
                    
                    our customer
                    says

                    
                    <span className="relative inline-block pb-2 md:pb-7 ml-1 md:mr-4 md:ml-8">
                        About Us

                        <svg
                            className="absolute left-0 bottom-0.1 w-full"
                            viewBox="0 0 595 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53" stroke="#FFC250" strokeWidth="6" />
                        </svg>
                    </span>
                </h1>

                {/* message */}
                <div className='relative rounded-3xl w-[90%] mx-auto p-8 md:p-16 text-center bg-[#D7EEDD4D]'>

                    {/* starting quote icon */}
                    <ImQuotesLeft className="absolute top-4 md:top-14 left-4 md:left-5 lg:left-7 text-gray-300 text-xl md:text-2xl" size={35} md:size={45} />

                    {/* message */}
                    <p className=" text-gray-800 text-20px leading-relaxed font-[400] lg:leading-[42px] lg:text-[30px] font-['Satoshi-Regular'] tracking-normal text-center">
                        Elementum delivered the site within the timeline
                        as they requested. In the end, the client found a 50%
                        increase in traffic within days since its launch. They
                        also had an impressive ability to use technologies that
                        the company hasn't used, which have also proved to
                        be easy to use and reliable
                    </p>

                    {/* ending quote icon */}
                    <ImQuotesRight className="absolute bottom-4 md:bottom-16 right-24 md:right-40 lg:right-72 lg:bottom-16 text-gray-300 text-xl md:text-2xl" size={35} md:size={45} />

                </div>
            </div>

            {/* right image section */}
            <div className='hidden md:block w-[25%] mx-auto mt-35 lg:mt-25 relative'>
                {
                    images2.map((image, index) => (
                        <img key={index}
                            src={image.src}
                            alt={image.alt}
                            className={`absolute ${image.size} rounded-full object-cover border-4 border-white ${image.position}`}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials