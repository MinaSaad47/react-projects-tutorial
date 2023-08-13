import axios from "axios";
import {   createContext, useCallback, useState } from "react";

const BooksContext = createContext();

function Provider({children}) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }, []);

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', { title });
        setBooks([...books, response.data]);
    };

    const editBook = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, { title });
        setBooks([...books.filter((book) => book.id !== id), response.data]);
    };

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        setBooks(books.filter((book) => book.id !== id));
    };
    
    const object = {
       books, fetchBooks,createBook,editBook,deleteBook,
    }

    return (
        <BooksContext.Provider value={object} >
            {children}
        </BooksContext.Provider>
    );
}

export {Provider}
export default BooksContext;