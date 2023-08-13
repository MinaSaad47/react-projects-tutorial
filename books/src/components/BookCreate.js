import React, {  useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
    const [title, setTitle] = useState('');
    const {createBook} = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
    };

    return (
        <div className='book-create'>
            <form onSubmit={handleSubmit}>
                <h3>Create a Book</h3>
                <input className="input" value={title} onChange={handleChange} />
                <button className='button' onSubmit={handleSubmit}>Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;