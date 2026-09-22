"use client";

import { BooksContext } from "@/context/BookContext";
import IBook from "@/type";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

const ReadButton = ({book}: {book: IBook}) => { 
    const {readBooks, setReadBooks} = useContext(BooksContext) as {
        readBooks: IBook[];
        setReadBooks: Dispatch<SetStateAction<IBook[]>>;
    };
    const handaleReadBook = () => {
        setReadBooks([...readBooks, book]);
        toast.success(`You have read "${book.bookName}"`)
    };
    return (
        <button className="btn btn-secondary" onClick={() => handaleReadBook()}>Read</button>
    );
};

export default ReadButton;