import { CgArrowLongRight } from "react-icons/cg";

const Services = () => {
    const services = [
        {
            para: "Office of multiple interest content",
            heading: "Collaborative & partnership"
        },
        {
            para: "The hanger US Air force digital experimental",
            heading: "We talk about our weight"
        },
        {
            para: "Delta faucet content, social, digital",
            heading: "Piloting digital confidence"
        },
    ]

    return (
        <div className="w-[90%]  mx-auto mt-20">
            {/* heading */}
            <h1 className="mb-10 w-[65%] text-left font-[400] text-[30px] md:text-[60px] lg:text-[100px] leading-[38px] md:leading-[75px] lg:leading-[126px] font-['Gerbil'] tracking-normal text-center">
                What we can
                offer you!
            </h1>

            <hr className='w-full border-t border-gray-300' />

            {/* services */}
            {services.map((service, index) => (
                <>
                <div key={index} className="flex flex-col md:flex-row justify-around md:justify-around items-center w-full mt-3">
                    <p className="w-full  md:w-[23%] font-[400] text-[18px] md:text-[25px] lg:text-[30px] leading-[24px] md:leading-[62px] lg:leading-[42px] font-['Satoshi-Regular'] tracking-normal text-center md:text-left mb-4 md:mb-0">
                        {service.para}
                    </p>
                    <p className="w-full  md:w-[70%] font-[400] text-[30px] md:text-[50px] lg:text-[56px] leading-[36px] md:leading-[106px] lg:leading-[116px] font-['Gerbil'] tracking-normal text-center md:text-left mb-4 md:mb-0">
                        {service.heading}
                    </p>
                    <CgArrowLongRight size={50} className="w-full md:w-[7%] text-center cursor-pointer" />
                </div>
                <hr className='w-full border-t border-gray-300 mb-5 mt-5' />
                </>
            ))}
        </div>
    )
}

export default Services