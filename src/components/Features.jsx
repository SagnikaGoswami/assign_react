import { BsArrowRight } from "react-icons/bs";

const Features = () => {
    return (
        <div className="bg-purple-500">
            <div className='flex flex-col justify-between w-[88%] mx-auto min-h-screen lg:min-h-[650px]'>
                {/* first */}
                <div className='flex flex-col md:flex-row md:justify-end w-full'>
                    {/* left */}
                    <div className=' w-full md:w-[70%]  flex justify-start items-center'>
                        <div className='w-full flex flex-col justify-center'>
                            <p className="font-[400] text-[30px] md:text-[60px] lg:text-[56px] leading-[38px] md:leading-[75px] lg:leading-[76px] font-['Gerbil'] tracking-normal text-left">
                                Tomorrow should
                                be better than today
                            </p>

                            <p className="  font-[400] text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-['Satoshi-Regular'] tracking-normal text-left w-full">
                                We are a team of strategists, designers communicators, researchers.
                                Together, we belive that progress only happens when you refuse
                                to play things safe.
                            </p>

                            <p className=" font-medium text-[12px] md:text-[16px] lg:text-[20px] leading-[12px] md:leading-[18px] lg:leading-[24px] font-['Satoshi-Regular'] tracking-normal text-left w-full mt-3">
                                {`Read more`} <BsArrowRight className="inline-block ml-2 cursor-pointer" />
                            </p>
                        </div>
                    </div>

                    {/* right */}
                    <div className='flex justify-center md:justify-end items-center w-full md:w-[50%] mt-10 md:mt-0'>
                        <img src="/images/right.png" alt=""
                        className="h-60 w-60 md:h-80 md:w-80 lg:h-95 lg:w-95 rounded-full object-cover border-4 border-white"
                        />
                    </div>
                </div>

                {/* second */}
                <div className='flex flex-col mt-10 md:flex-row md:justify-end w-full'>
                    {/* left */}
                    <div className='flex justify-center md:justify-start items-center w-full md:w-[50%] mb-10 md:mb-0'>
                        <img src="/images/left.png" alt=""
                        className="h-60 w-60 md:h-80 md:w-80 lg:h-95 lg:w-95 rounded-full object-cover border-4 border-white"
                        />
                    </div>

                    {/* right */}
                    <div className=' w-full md:w-[70%]  flex justify-start md:justify-end items-center relative'>
                        <div className=' w-full  flex flex-col justify-center'>
                            <p className="font-[400] text-[30px] md:text-[60px] lg:text-[56px] leading-[38px] md:leading-[75px] lg:leading-[76px] font-['Gerbil'] tracking-normal text-left">
                                See how we can help you progress
                            </p>

                            <p className="  font-[400] text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-['Satoshi-Regular'] tracking-normal text-left">
                                We add a layer of fearless insights and action that allows change
                                makers to accelerate their progress in areas such as brand, design
                                digital, comms and social research.
                            </p>

                            <p className="  font-medium text-[12px] md:text-[16px] lg:text-[20px] leading-[12px] md:leading-[18px] lg:leading-[24px] font-['Satoshi-Regular'] tracking-normal text-left w-full mt-3">
                                {`Read more`} <BsArrowRight className="inline-block ml-2 cursor-pointer" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features