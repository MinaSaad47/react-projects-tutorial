import React, {  useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context';

function BookShow({ book}) {
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBook} = useBooksContext();

    const handleDelete = () => {
        deleteBook(book.id);
    };

    const handleEdit = () => {
        setShowEdit(!showEdit);
    };

    const onEdit = () => {
        setShowEdit(!showEdit);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onEdit={onEdit} />;
    }

    return (
        <div className='book-show'>
            <img src={`https://picsum.photos/seed/${book.id}/300/300`} alt='books' />
            <div>{content}</div>
            <div className='actions'>
                <button className='edit' onClick={handleEdit}>Edit</button>
                <button className='delete' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default BookShow;