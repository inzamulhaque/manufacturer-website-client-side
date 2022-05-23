import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Tool from '../Shared/Tool';
import Loading from '../RequireAuth/Loading';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/homeitem?limit=6")
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);

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
                            tools?.map(tool => <SwiperSlide key={tool._id}>
                                <Tool tool={tool} />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Tools;