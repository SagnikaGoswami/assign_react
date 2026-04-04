import { Link } from "react-router-dom";
import { motion } from "motion/react"

const Services = () => {
    const services = [
        {
            content: "Office of multiple interest content",
            heading: "Collaborative & partnership",
            serviceName: "service1"
        },
        {
            content: "The hanger US Air force digital experimental",
            heading: "We talk about our weight",
            serviceName: "service2"
        },
        {
            content: "Delta faucet content, social, digital",
            heading: "Piloting digital confidence",
            serviceName: "service3"
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full mx-auto mt-20 lg:mb-60 relative overflow-hidden ">
            {/* heading */}
            <div className="w-[90%] mx-auto">

                <h1 className=" mb-10 w-[65%]  text-left font-[400] text-[30px] md:text-[60px] lg:text-[100px] leading-[38px] md:leading-[75px] lg:leading-[126px] font-['Gerbil'] tracking-normal text-center">
                    What we

                    <span className="relative inline-block mx-1 lg:mx-10">
                        <span className="relative z-10 px-3">can</span>
                        <svg
                            className="absolute left-[15px] md:left-[30px] lg:left-[20px] top-1/2 lg:top-[70px] -translate-y-1/2 -translate-x-[15%] w-full  lg:w-[3.2em] h-[1.2em] rounded-full z-0"
                            viewBox="0 0 456 109"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                            <rect width="456" height="109" rx="54.5" fill="#D7EEDD" />
                        </svg>
                    </span>

                    {/* vector */}
                    <svg
                    className="absolute inset-x-0 h-[650px] w-[400px]  bottom-[38%] rotate-[30deg] md:rotate-[10deg] left-[70%]  md:bottom-[58%] md:left-[55%]  lg:w-[1483px] lg:h-[554px] lg:bottom-[60%] md:w-[654px] lg:left-[33%] lg:rotate-0"
                        viewBox="0 0 864 654" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1_158)">
                            <path d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727" stroke="#FF6D6D" stroke-width="5" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1_158" x="0" y="0" width="1502.99" height="653.604" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="16" />
                                <feGaussianBlur stdDeviation="6" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_158" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_158" result="shape" />
                            </filter>
                        </defs>
                    </svg>



                    <span className="relative inline-block pb-2 md:pb-7 ml-1 md:mr-4 md:ml-8">
                        offer

                        <svg
                            className="absolute left-0 bottom-0.1 w-full"
                            viewBox="0 0 595 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53" stroke="#FFC250" strokeWidth="6" />
                        </svg>
                    </span>


                    you!
                </h1>

                <hr className='w-full border-t border-gray-300' />

                {/* services */}
                {services.map((service, index) => (
                    <>
                        <motion.div key={index}
                            initial={{ opacity: 0, y: 100, scale: 1 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.09 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col md:flex-row justify-around md:justify-around items-center w-full mt-3 cursor-pointer ">
                            <p className="w-full  md:w-[23%] font-[400] text-[18px] md:text-[25px] lg:text-[30px] leading-[24px] md:leading-[62px] lg:leading-[42px] font-['Satoshi-Regular'] tracking-normal text-center md:text-left mb-4 md:mb-0 ">
                                <Link to={`/services/${service.serviceName}`}>{service.content}</Link>
                            </p>
                            <p className="w-full  md:w-[70%] font-[400] text-[30px] md:pl-12 md:text-[40px] lg:text-[56px] leading-[36px] md:leading-[106px] lg:leading-[116px] font-['Gerbil'] tracking-normal text-center md:text-left mb-4 md:mb-0">
                                <Link to={`/services/${service.serviceName}`}>{service.heading}</Link>
                            </p>

                            <div>
                                <Link to={`/services/${service.serviceName}`}>
                                    <svg
                                        className="cursor-pointer"
                                        width="82" height="15" viewBox="0 0 82 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M81.7071 8.07089C82.0976 7.68036 82.0976 7.0472 81.7071 6.65667L75.3431 0.29271C74.9526 -0.0978144 74.3195 -0.0978145 73.9289 0.29271C73.5384 0.683234 73.5384 1.3164 73.9289 1.70692L79.5858 7.36378L73.9289 13.0206C73.5384 13.4112 73.5384 14.0443 73.9289 14.4348C74.3195 14.8254 74.9526 14.8254 75.3431 14.4348L81.7071 8.07089ZM0 7.36377L-6.9424e-08 8.36377L81 8.36378L81 7.36378L81 6.36378L6.9424e-08 6.36377L0 7.36377Z" fill="black" />
                                    </svg>

                                </Link>
                            </div>
                        </motion.div>
                        <hr className='w-full border-t-2 border-gray-300 mb-5 mt-5' />
                    </>
                ))}

            </div>

        </motion.div>
    )
}

export default Services