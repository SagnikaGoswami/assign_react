const HeroSection = () => {

    const images = [
        {
            src: '/images/img1.png',
            alt: 'img1',
            position: "top-1/2 left-0 -translate-y-1/2"
        },
        {
            src: '/images/img1.png',
            alt: 'img1',
            position: "top-1/3 left-[10%] lg:top-[25%] -translate-y-1/2"
        },
        {
            src: '/images/img3.png',
            alt: 'img3',
            position: "top-[12%] left-[36%] lg:top-0 lg:left-[40%] z-10"
        },
        {
            src: '/images/img3.png',
            alt: 'img3',
            position: "top-[33%] left-[44%] lg:left-[48%]"
        },
        {
            src: '/images/img6.png',
            alt: 'img6',
            position: "bottom-1/2 left-[66%] lg:left-[72%] bottom-1/2 z-10"
        },
        {
            src: '/images/img8.png',
            alt: 'img8',
            position: "top-1/2 right-0 -translate-y-1/2"
        }
    ]

    return (
        <div>

            <div className="w-full px-4 mx-auto mt-20">
                {/* head section*/}
                <div className='w-[98%] mx-auto '>
                    <p className="font-[400] text-[30px] md:text-[60px] lg:text-[100px] leading-[38px] md:leading-[75px] lg:leading-[126px] font-['Gerbil'] tracking-normal text-center">
                        The thinkers and
                        doers were changing
                        the status Quo with
                    </p>
                    <p className="font-[400] text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-['Satoshi-Regular'] tracking-normal text-center mt-5 w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
                        We are a team of strategists, designers communicators, researchers. Together,
                        we belive that progress only happens when you refuse to play things safe.
                    </p>
                </div>

                {/* image section */}
                <div className='w-[90%] mx-auto mt-35 lg:mt-25 relative h-[300px] md:h-[400px] '>
                    {
                        images.map((image, index)=>(
                            <img key={index}
                            src={image.src}
                            alt={image.alt}
                            className={`absolute w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white ${image.position}`} 
                             />
                        ))
                    }
                </div>


            </div>

        </div>
    )
}

export default HeroSection