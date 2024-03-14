import React, {useState} from 'react'
import './BookForm.css'

export const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')

    const handelSubmit = (e) => {
        e.preventDefault()
        if (title && author) {
            //Dispatch action
            setTitle('')
            setAuthor('')
        }

    }
    return (
        <div className={"app-block book-form"}>
            <h2>Add new Book</h2>
            <form onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" value={title} onChange={(e => setTitle(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="title">Author: </label>
                    <input type="text" id="author" value={author} onChange={(e => setAuthor(e.target.value))}/>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}
