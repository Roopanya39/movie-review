import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import BookList from "./components/BookList";
import ReviewSection from './components/ReviewSection';
import "./styles.css";

const App = () => {
    // Initialize books with default values
    const [books, setBooks] = useState([
        {
            id: 1,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            reviews: [],
        },
        {
            id: 2,
            title: "1984",
            author: "George Orwell",
            reviews: [],
        },
        {
            id: 3,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            reviews: [],
        },
    ]);

    // Function to add a review to a specific book
    const addReview = (bookId, reviewText) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === bookId
                    ? { ...book, reviews: [...book.reviews, reviewText] }
                    : book
            )
        );
    };

    return (
        <div className="container">
            <h1>Book Review App</h1>
            <BookList books={books} addReview={addReview} />
        </div>
    );
};

export default App;