import React, { Component } from 'react'
import './Searchbar.css'

class Searchbar extends Component {
    render() {
        const { className, placeholder, searchChangeHandler } = this.props;

        return (
            <div>
                <input
                    className={`searchbar ${className}`}
                    type="search"
                    placeholder={placeholder}
                    onChange={searchChangeHandler}
                />
            </div>
        )
    }
}

export default Searchbar;