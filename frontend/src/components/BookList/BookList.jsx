import {removeBook} from "../../redux/books/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import React from 'react'
import './BookList.css'

export const BookList = () => {
    const books = useSelector(state => state.books)
    const dispatch = useDispatch()

    const handleRemoveBook = (id) => {
        dispatch(removeBook(id))
    }
    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books found</p>
            ) : (
                <ul>
                    {books.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {i + 1}. {book.title} by <strong>{book.author}</strong>
                            </div>
                            <div className="book-actions">
                                <button onClick={() => handleRemoveBook(book.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
