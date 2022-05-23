import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Review from '../Home/Review';
import Loading from '../RequireAuth/Loading';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const [reviews, setReviews] = useState([]);
    const [reviewError, setReviewError] = useState("");
    const [countAddReview, setCountAddReview] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/review/${user?.email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user, countAddReview])


    if (loading) {
        <Loading />
    }

    const onSubmit = async event => {
        event.preventDefault();
        if (parseFloat(event.target.rating.value) < 0 || parseFloat(event.target.rating.value) > 5) {
            setReviewError("Please enter 0 to 5 valid number");
            return;
        }
        setReviewError("");
        const rating = {
            name: user.displayName,
            email: user.email,
            rating: parseFloat(event.target.rating.value),
            ratingMsg: event.target.ratingMsg.value
        };
        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            },
            body: JSON.stringify(rating)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                setCountAddReview(countAddReview + 1);
            })
    }
    return (
        <>
            <h4 className="dark:text-white text-[22px] font-medium">Add Your Valuable Review</h4>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                <div>
                    <h4 className="dark:text-white my-3 text-[22px] text-center font-bold">Add Your Review</h4>

                    <form className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" onSubmit={onSubmit}>

                        <input type="text" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" name="rating" placeholder="Enter Your Rating" required />

                        <textarea type="text" className="w-full border-b-2 border-black text-[22px] font-medium focus:outline-none rounded-lg px-2 my-2" placeholder='Enter Your Rating Message' name="ratingMsg" maxLength={150} required>

                        </textarea>

                        <button type="submit" className="my-2 py-2 px-3 text-[20px] font-medium bg-blue-500 border-2 border-blue-500 text-white duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-md">Add Rating</button>

                        {reviewError && <p className="text-[18px] text-red-500 font-medium">
                            {reviewError}
                        </p>}
                    </form>
                </div>
                <div className="col-span-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        {
                            reviews.map(review => <Review key={review._id} review={review} />)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddReview;