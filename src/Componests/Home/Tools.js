import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Tool from '../Shared/Tool';

const Tools = () => {
    const [tools, setTools] = useState([1, 2, 3, 4, 5, 6]);

    return (
        <>
            <div className="my-3">
                <h4 className="text-[22px] text-orange-400 font-bold text-center">Our Tools</h4>

                <div className="mt-2">
                    <Swiper
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                width: 640,
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                    >
                        {
                            tools.map(tool => <SwiperSlide key={tool}>
                                <Tool />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Tools;