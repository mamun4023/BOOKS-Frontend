
import React, { useState } from "react";
import axios from "axios";
import { Axios } from "../utils/axios";
import { CONSTANT } from "../constants";

const BookSearch = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");

    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY

    const searchBooks = async () => {
        try {
            // const response = await axios.get(
            //     `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
            // );
            // setBooks(response.data.items);
            await Axios.post('/add-history', {title : query} )
        } catch (err) {
            setError("Error fetching data");
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        searchBooks();
    };


    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSearch} className="mb-4">
                <div className=" flex gap-2">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for books..."
                        className="input input-bordered w-full"
                    />
                    <button type="submit" className=" btn w-30">
                        {CONSTANT.SEARCH}
                    </button>
                </div>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((book) => (
                    <div key={book.id} className="border p-4 rounded">
                        <h2 className="text-xl font-semibold">{book.volumeInfo.title}</h2>
                        <p className="text-gray-700">{book.volumeInfo.authors?.join(", ")}</p>
                        {book.volumeInfo.imageLinks?.thumbnail && (
                            <img
                                src={book.volumeInfo.imageLinks.thumbnail}
                                alt={book.volumeInfo.title}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookSearch;
