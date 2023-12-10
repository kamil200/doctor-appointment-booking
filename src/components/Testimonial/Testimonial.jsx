import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'

const Testimonial = () => {
    return (
        <div className=' mt-[30px] lg:mt-[55px]'>
            <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }}
            >
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px] ">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[3opx] font-semibold text-headingColor'>Muhibur Rahman</h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"I have taken medical services from them. They treat so well and they are providing the best medical services."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px] ">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[3opx] font-semibold text-headingColor'>Mohammed Anis</h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"My online appointment on "Check Doctor's Presence" was efficient and reliable. Booking was simple, and the doctor was on time. Knowing
                            the doctor's presence was monitored made me feel secure throughout the session."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px] ">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[3opx] font-semibold text-headingColor'>Parmar Khushi</h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"Check Doctor's Presence made my online appointment convenient and trustworthy. The platform's doctor profiles helped me choose the 
	right specialist, and the doctor's punctuality and presence assurance were reassuring. Highly satisfied!"</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px] ">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[3opx] font-semibold text-headingColor'>Muhibur Rahman</h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"I have taken medical services from them. They treat so well and they are providing the best medical services."</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial
