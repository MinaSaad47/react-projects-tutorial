import { useState } from "react";

import "./SearchBar.css";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <label>Enter search term</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;