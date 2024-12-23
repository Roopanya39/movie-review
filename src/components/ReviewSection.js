import React, { useState } from "react";

const ReviewSection = ({ book, addReview }) => {
    const [reviewText, setReviewText] = useState("");

    const handleAddReview = () => {
        if (reviewText.trim()) {
            addReview(book.id, reviewText);
            setReviewText(""); // Clear the input field
        }
    };

    return (
        <div className="review-section">
            <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
            ></textarea>
            <button onClick={handleAddReview}>Add Review</button>
            <div>
                <strong>Reviews:</strong>
                <ul>
                    {book.reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ReviewSection;