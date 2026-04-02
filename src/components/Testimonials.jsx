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
            position: "top-[12%] left-[36%] lg:top-0 lg:left-[40%] z-10",
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
            position: "top-[12%] right-[36%] lg:top-0 lg:right-[40%] z-10",
            size: "w-20 h-20 md:w-24 md:h-24 lg:w-50 lg:h-50"
        },
    ]

    return (
        <div className='flex flex-col md:flex-row justify-center items-center w-full mx-auto md:mt-22 lg:mt-42'>

            {/* left image section */}
                <div className='hidden md:block w-[25%] mx-auto mt-35 lg:mt-25 relative'>
                    {
                        images1.map((image, index)=>(
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
                <h1 className="w-full mb-10 lg:text-[56px] lg:leading-[66px] md:text-[36px] md:leading-[46px] font-['Gerbil'] font-[400] text-center">
                    What our customer
                    says About Us
                </h1>

                {/* message */}
                <div className='relative rounded-3xl p-8 md:p-16 text-center bg-[#D7EEDD4D]'>

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
                        images2.map((image, index)=>(
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