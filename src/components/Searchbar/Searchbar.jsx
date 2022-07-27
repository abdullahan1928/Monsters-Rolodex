import './Searchbar.css'

const Searchbar = ({ className, placeholder, searchChangeHandler }) => (
    <div>
        <input
            className={`searchbar ${className}`}
            type="search"
            placeholder={placeholder}
            onChange={searchChangeHandler}
        />
    </div>
)

export default Searchbar;