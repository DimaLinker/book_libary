import {useDispatch, useSelector} from "react-redux";
import './Filter.css'
import {
    setTitleFilter,
    selectTitleFilter,
    resetFilters,
    setAuthorFilter,
    selectAuthorFilter,
    selectOnlyFavoriteFilter,
    setOnlyFavorite
} from "../../redux/slices/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch()
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter =  useSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value))
    }

    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value))
    }
    const handleOnlyFavoriteFilterChange = (e) => {
        dispatch(setOnlyFavorite())
    }
    const handleResetFilters = () => {
        dispatch(resetFilters())
    }
    return (
        <div className="app-block filter">
            <div className="filter-row">
                <div className="filter-group">
                    <input type="text"
                           value={titleFilter}
                           placeholder="Filter by title...."
                           onChange={handleTitleFilterChange}/>
                </div>
                <div className="filter-group">
                    <input type="text"
                           value={authorFilter}
                           placeholder="Filter by author...."
                           onChange={handleAuthorFilterChange}/>
                </div>
                <div className="filter-group">
                    <label>
                        <input type="checkbox" checked={onlyFavoriteFilter} onChange={handleOnlyFavoriteFilterChange}/>
                        Only Favorite
                    </label>
                </div>
                <button type="button" onClick={handleResetFilters}>Reset Filters</button>
            </div>
        </div>
    )
}
