import React from 'react'
import './BookList.css'
import {useSelector} from "react-redux";

export const BookList = () => {
    const books = useSelector(state => state.books)
    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books found</p>
            ) : (
                <ul>
                    {books.map((book, i) => (
                        <li key={book.index}>
                           <div className="book-info">
                               {i + 1}. {book.title} by <strong>{book.author}</strong>
                           </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
