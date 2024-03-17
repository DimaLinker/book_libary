import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from 'uuid';
import './BookForm.css';
import {addBook} from "../../redux/books/actionCreators";
import booksData from '../../data/books.json'


export const BookForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleAddRandomBook = () => {
        const randomBook = booksData[Math.floor(Math.random() * booksData.length)];
        const randomBookWithId = {...randomBook, id: uuidv4(), isFavorite: false};
        dispatch(addBook(randomBookWithId));
        setTitle('');
        setAuthor('');
    };

    const handelSubmit = (e) => {
        e.preventDefault()
        if (title && author) {
            const book = {
                title,
                author,
                id: uuidv4(),
                isFavorite: false,
            };
            dispatch(addBook(book));
            setTitle('');
            setAuthor('');
        }
    };
    return (
        <div className={"app-block book-form"}>
            <h2>Add new Book</h2>
            <form onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" value={title} onChange={(e => setTitle(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                    <input type="text" id="author" value={author} onChange={(e => setAuthor(e.target.value))}/>
                </div>
                <button type="submit">Add Book</button>
                <button type="button" onClick={handleAddRandomBook}>Add Random</button>
            </form>
        </div>
    )
}
