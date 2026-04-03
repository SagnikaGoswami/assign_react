const HeroSection = () => {

    // 6 items
    // const images = [
    //     {
    //         src: '/images/img1.png',
    //         alt: 'img1',
    //         position: "top-1/2 left-0 -translate-y-1/2"
    //     },
    //     {
    //         alt: 'img1',
    //         position: "top-1/3 left-[93px] lg:left-[7em] -translate-y-1/2"
    //     },
    //     {
    //         src: '/images/img3.png',
    //         alt: 'img3',
    //         position: "top-[12%] left-[36%] lg:top-0 lg:left-[40%] z-10"
    //     },
    //     {
    //         src: '/images/img3.png',
    //         alt: 'img3',
    //         position: "top-[33%] left-[44%] lg:left-[48%]"
    //     },
    //     {
    //         src: '/images/img6.png',
    //         alt: 'img6',
    //         position: "bottom-1/2 left-[66%] lg:left-[82%] bottom-1/2 z-10" // this one
    //     },
    //     {
    //         src: '/images/img8.png',
    //         alt: 'img8',
    //         position: "top-1/2 right-0 -translate-y-1/2"
    //     },
    //     {
    //         src: '/images/img8.png',
    //         alt: 'img8',
    //         position: "top-1/2 right-0 -translate-y-1/2"
    //     },
    //     {
    //         alt: 'img8',
    //         position: "top-1/2 right-0 -translate-y-1/2"
    //     },
    //     {
    //         alt: 'img8',
    //         position: "top-1/2 right-0 -translate-y-1/2"
    //     },

    // ]

    // 8 it
    // const images = [
    //     {
    //         type: "img",
    //         src: "/images/img1.png",
    //         alt: "img1",
    //         position: "top-1/2 left-0 -translate-y-1/2"
    //     },
    //     {
    //         type: "svg",
    //         alt: "circle",
    //         position: "top-1/3 left-[7%] -translate-y-1/2"
    //     },
    //     {
    //         type: "img",
    //         src: "/images/img3.png",
    //         alt: "img3",
    //         position: "top-[12%] left-[36%] lg:top-0 lg:left-[26%] z-10"
    //     },
    //     {
    //         type: "svg",
    //         src: "/images/img3.png",
    //         alt: "img3",
    //         position: "top-[12%] left-[36%] lg:top-[40%] lg:left-[33%] z-10"
    //     },
    //     {
    //         type: "svg",
    //         src: "/images/img3.png",
    //         alt: "img3",
    //         position: "top-[12%] left-[36%] lg:top-[10%] lg:left-[48%] z-10"
    //     },
    //     {
    //         type: "svg",
    //         src: "/images/img3.png",
    //         alt: "img3",
    //         position: "bottom-1/2 left-[66%] top-0 lg:left-[75%] z-10"

    //     },
    //     {
    //         type: "img",
    //         src: "/images/img8.png",
    //         alt: "img3",
    //         position: "top-[12%] left-[36%] lg:top-[33%] lg:left-[88%] z-10"
    //         // position: "top-[12%] left-[36%] lg:top-1/2 lg:left-[75%] z-10"
    //     },
    //     {
    //         type: "img",
    //         src: "/images/img6.png",
    //         alt: "img6",
    //         position: "top-[12%] left-[36%] lg:top-[30%] lg:left-[56%] z-10"
    //         // position: "bottom-1/2 left-[66%] lg:left-[82%] z-10"
    //     }
    // ]

    const images = [
        {
            type: "img",
            src: "/images/img1.png",
            alt: "img1",
            position: "top-1/2 right-[80%] md:top-1/2 md:left-0  lg:top-1/2 lg:left-0 -translate-y-1/2"
        },
        {
            type: "svg",
            alt: "circle",
            position: "top-[30%] left-[5%] md:top-[35%] md:left-[10%] lg:top-1/3 lg:left-[10%] -translate-y-1/2"
        },
        {
            type: "img",
            src: "/images/img3.png",
            alt: "img3",
            position: "top-[5%] left-[40%] z-0 md:top-[5%] md:left-[30%] lg:top-[12%] lg:left-[26%] lg:z-10"
        },
        {
            type: "svg",
            alt: "circle",
            position: "top-[25%] left-[38%] z-10 md:top-[40%] md:left-[35%] lg:top-[40%] lg:left-[33%] lg:z-0"
        },
        {
            type: "svg",
            alt: "circle",
            position: "top-[65%] left-[53%] z-10 md:top-[8%] md:left-[55%] md:z-0 lg:top-[10%] lg:left-[48%] lg:z-0"
        },
        {
            type: "svg",
            alt: "circle",
            position: "top-[15%] left-[70%] md:top-[8%] md:left-[80%] md:z-10 lg:top-0 lg:left-[75%] z-10"
        },
        {
            type: "img",
            src: "/images/img8.png",
            alt: "img8",
            position: "top-[35%] left-[80%] md:top-[30%] md:left-[85%] md:z-0 lg:top-[33%] lg:left-[88%] z-0"
        },
        {
            type: "img",
            src: "/images/img6.png",
            alt: "img6",
            position: "top-[60%] left-[30%] z-0 md:top-[35%] md:left-[60%] md:z-10 lg:top-[30%] lg:left-[56%] lg:z-10"
        }
    ];



    return (
        <div className="mb-20 md:mb-42 ">

            <div className="w-full px-4 mt-20 relative">
                {/* head section*/}
                <div className='w-[90%] mx-auto'>
                    <p className="font-[400] text-[30px] md:text-[60px] lg:text-[100px] leading-[48px] md:leading-[75px] lg:leading-[126px] font-['Gerbil'] tracking-normal text-center">
                        The

                        <span className="relative inline-block md:pb-7 md:mr-10 md:ml-10 mr-4 ml-4">
                            thinkers
                            <svg
                                className="absolute left-0 bottom-0.1 w-full"
                                viewBox="0 0 595 56"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53" stroke="#FFC250" strokeWidth="6" />
                            </svg>
                        </span>

                        and doers were

                        <span className="relative inline-block mx-4 lg:mx-10">
                            ch
                            <span className="relative inline-block">
                                <span className="relative z-10">anging</span>
                                <svg
                                    className="absolute left-0 top-1/2 lg:top-[70px] -translate-y-1/2 w-[4.3em] h-[1.2em] rounded-full z-0"
                                    viewBox="0 0 405 137"
                                    preserveAspectRatio="none"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="405" height="137" rx="68.5" fill="#FFC2EA" />
                                </svg>
                            </span>
                        </span>

                        <svg className="absolute right-[20px] bottom-[85%] w-[50px] h-[60px] md:right-[20px]  md:bottom-[72%] lg:right-[12px] lg:bottom-[70%] lg:w-[117px] lg:h-[146px] md:w-[85px] md:h-[106px]"
                            width="117" height="146" viewBox="0 0 117 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M77.8783 -4.93067e-06C86.7352 5.11355 94.4983 11.9216 100.724 20.0353C106.95 28.149 111.517 37.4095 114.164 47.2882C116.811 57.1668 117.486 67.4701 116.151 77.6097C114.816 87.7494 111.497 97.5268 106.384 106.384C101.27 115.241 94.4622 123.004 86.3484 129.23C78.2347 135.455 68.9742 140.022 59.0955 142.669C49.2169 145.316 38.9136 145.992 28.774 144.657C18.6344 143.322 8.85694 140.003 -7.20974e-06 134.889L38.9391 67.4446L77.8783 -4.93067e-06Z" fill="#934CEC" />
                        </svg>


                        the
                        <span className="relative inline-block mx-4 lg:mx-10">
                            <span className="relative z-10 px-3">status</span>
                            <svg
                                className="absolute left-[20px] lg:left-[50px] top-1/2 lg:top-[70px] -translate-y-1/2 -translate-x-[15%] w-full lg:w-[4.2em] lg:h-[1.2em] rounded-full z-0"
                                viewBox="0 0 456 109"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                <rect width="456" height="109" rx="54.5" fill="#D7EEDD" />
                            </svg>
                        </span>
                        Quo with
                    </p>
                    <p className="font-[400] text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-['Satoshi-Regular'] tracking-normal text-center mt-5 w-[90%] md:w-[80%] lg:w-[70%] lg:mt-25 mx-auto">
                        We are a team of strategists, designers communicators, researchers. Together,
                        we belive that progress only happens when you refuse to play things safe.
                    </p>
                </div>

                {/* vectors */}
                <svg className="absolute left-0 top-[45%] lg:left-0 lg:top-[40%] lg:w-[73px] lg:h-[366px] md:h-[250px] h-[150px]"
                viewBox="0 0 73 366" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-0.125563 3.81958C32.8912 14.0867 91.0122 45.1979 59.3623 87.5062C19.8 140.391 -8.5 121.794 -8.5 157.245C-8.5 192.696 44.6348 192.696 44.6348 268.246C44.6348 328.686 2.95478 362.393 -8.5 361.812" stroke="#FF7171" stroke-width="8" />
                </svg>

                <svg className="absolute left-[2%] top-[45%] lg:top-[40%] lg:w-[84px] lg:h-[355px] md:h-[250px] h-[150px]"
                    viewBox="0 0 84 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809" stroke="#0E0E0E" stroke-width="8" />
                </svg>




                {/* image section */}
                <div className='absolute w-[90%] mx-auto md:mt-25 lg:mt-25 relative h-[300px] md:h-[400px] '>
                    {images.map((image, index) => (
                        image.type === "img" ? (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className={`absolute w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white ${image.position}`}
                            />
                        ) : (
                            <svg
                                key={index}
                                className={`absolute w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 ${image.position}`}
                                viewBox="0 0 226 226"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="113" cy="113" r="109" fill="gray" stroke="white" strokeWidth="8" />
                            </svg>
                        )
                    ))}
                </div>


            </div>

        </div>
    )
}

export default HeroSection