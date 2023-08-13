import React, {  useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ book, onEdit }) {
    const [title, setTitle] = useState(book.title);
    const {editBook} = useBooksContext()

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        editBook(book.id, title);
    };

    return (
        <div className='book-edit'>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} className="input" onChange={handleChange} />
                <button className="button is-primary" onSubmit={handleSubmit}>Save</button>
            </form>
        </div>
    );
}

export default BookEdit;