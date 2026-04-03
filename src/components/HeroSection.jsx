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
            position: "top-1/2 right-[80%] md:top-[25%] md:left-[10%] lg:top-1/2 lg:left-0 -translate-y-1/2"
        },
        {
            type: "svg",
            alt: "circle",
            position: "top-[30%] left-[5%] md:top-[35%] md:left-[25%] lg:top-1/3 lg:left-[10%] -translate-y-1/2"
        },
        {
            type: "img",
            src: "/images/img3.png",
            alt: "img3",
            position: "top-[5%] left-[40%] z-0 md:top-[20%] md:left-[35%] lg:top-[12%] lg:left-[26%] lg:z-10"
        },
        {
            type: "svg",
            alt: "circle",
            position: "top-[25%] left-[38%] z-10 md:top-[45%] md:left-[40%] lg:top-[40%] lg:left-[33%] lg:z-0"
        },
        {
            type: "svg",
            alt: "circle",
            position: "top-[65%] left-[53%] z-10 md:top-[55%] md:left-[45%] lg:top-[10%] lg:left-[48%] lg:z-0"
        },
        {
            type: "svg",
            alt: "circle",
            position: "top-[15%] left-[70%] md:top-[65%] md:left-[55%] lg:top-0 lg:left-[75%] z-10"
        },
        {
            type: "img",
            src: "/images/img8.png",
            alt: "img8",
            position: "top-[35%] left-[80%] md:top-[30%] md:left-[70%] lg:top-[33%] lg:left-[88%] z-0"
        },
        {
            type: "img",
            src: "/images/img6.png",
            alt: "img6",
            position: "top-[60%] left-[30%] z-0 md:top-[75%] md:left-[50%] lg:top-[30%] lg:left-[56%] lg:z-10"
        }
    ];



    return (
        <div className="mb-20 md:mb-42">

            <div className="w-full px-4 mx-auto mt-20">
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
                    <p className="font-[400] text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-['Satoshi-Regular'] tracking-normal text-center mt-5 w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
                        We are a team of strategists, designers communicators, researchers. Together,
                        we belive that progress only happens when you refuse to play things safe.
                    </p>
                </div>


                {/* image section */}
                <div className='w-[90%] mx-auto md:mt-25 relative h-[300px] md:h-[400px]'>
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