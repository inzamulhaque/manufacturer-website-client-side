import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Review from './Review';

const Reviews = () => {
    const [rating, setRating] = useState([
        { _id: 1, name: "name", rating: 4, text: "best tool" },
        { _id: 2, name: "name", rating: 4.9, text: "best tool" },
        { _id: 3, name: "name", rating: 4.5, text: "best tool" },
        { _id: 4, name: "name", rating: 4.3, text: "best tool" },
        { _id: 5, name: "name", rating: 5, text: "best tool" },
        { _id: 6, name: "name", rating: 4.1, text: "best tool" }
    ]);
    return (
        <>
            <div className="my-5 rounded-lg shadow-md">
                <h3 className="my-2 text-[25px] text-center text-orange-500 font-bold">Ratings</h3>
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
                        rating.map(review => <SwiperSlide key={review._id}>
                            <Review review={review} />
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </>
    );
};

export default Reviews;