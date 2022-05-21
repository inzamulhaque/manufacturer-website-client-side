import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';

SwiperCore.use([Autoplay]);

const Banner = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-3 lg:h-[500px]">
                <div className="order-2 lg:order-1 flex items-center justify-center">
                    <div>
                        <h3 className="text-[25px] font-bold text-orange-500 text-center">IH Electronics</h3>
                        <p className="text-[18px] font-medium text-center dark:text-white">
                            Best Electronics Tool Manufacturer
                        </p>
                    </div>
                </div>
                <div className="order-1 lg:order-2 hidden lg:block">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        navigation={true}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="h-full w-full">
                                <img src={slider1} alt="slider image" className="h-full w-full rounded-lg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-full w-full">
                                <img src={slider2} alt="slider image" className="h-full w-full rounded-lg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-full w-full">
                                <img src={slider3} alt="slider image" className="h-full w-full rounded-lg" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="order-1 lg:order-2 lg:hidden">
                    <div className="h-full w-full">
                        <img src={slider1} alt="slider image" className="h-full w-full rounded-lg" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;