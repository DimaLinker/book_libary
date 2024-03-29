import {removeBook, toggleFavorite} from "../../redux/books/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {BsBookmarkStar, BsBookmarkStarFill} from "react-icons/bs"
import {selectTitleFilter,selectAuthorFilter, selectOnlyFavoriteFilter} from "../../redux/slices/filterSlice";
import './BookList.css'

export const BookList = () => {
    const books = useSelector(state => state.books)
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
    const dispatch = useDispatch()

    const handleRemoveBook = (id) => {
        dispatch(removeBook(id))
    }

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id))
    }

    const filteredBooks = books.filter((book) => {
        const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase());
        const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase());
        const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;
        return matchesTitle && matchesAuthor && matchesFavorite;
    })
    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books found</p>
            ) : (
                <ul>
                    {filteredBooks.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {i + 1}. {book.title} by <strong>{book.author}</strong>
                            </div>
                            <div className="book-actions">
                                <span onClick={() => handleToggleFavorite(book.id)}>
                                          {book.isFavorite ? (
                                              <BsBookmarkStarFill className="star-icon"/>
                                          ) : (
                                              <BsBookmarkStar className="star-icon"/>
                                          )}
                                </span>
                                <button onClick={() => handleRemoveBook(book.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
