import { useContext } from "react";
import BooksContext from "../context/books";

const useBooksContext = () => useContext(BooksContext);

export default useBooksContext;