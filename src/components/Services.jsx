import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

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
                    <div key={index} className="flex flex-col md:flex-row justify-around md:justify-around items-center w-full mt-3 cursor-pointer">
                        <p className="w-full  md:w-[23%] font-[400] text-[18px] md:text-[25px] lg:text-[30px] leading-[24px] md:leading-[62px] lg:leading-[42px] font-['Satoshi-Regular'] tracking-normal text-center md:text-left mb-4 md:mb-0">
                            <Link to={`/services/${service.serviceName}`}>{service.content}</Link>
                        </p>
                        <p className="w-full  md:w-[70%] font-[400] text-[30px] md:text-[50px] lg:text-[56px] leading-[36px] md:leading-[106px] lg:leading-[116px] font-['Gerbil'] tracking-normal text-center md:text-left mb-4 md:mb-0">
                            <Link to={`/services/${service.serviceName}`}>{service.heading}</Link>
                        </p>

                        <div>
                            <Link to={`/services/${service.serviceName}`}>
                                <CgArrowLongRight className="w-10 h-10 md:w-16 md:h-16 text-black cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                    <hr className='w-full border-t-2 border-gray-300 mb-5 mt-5' />
                </>
            ))}
        </div>
    )
}

export default Services