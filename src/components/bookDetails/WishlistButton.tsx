"use client"
import { BooksContext } from "@/context/BookContext";
import IBook from "@/type";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({book}: {book: IBook}) => { 
    const {wishlist, setWishlist} = useContext(BooksContext) as {
        wishlist: IBook[];
        setWishlist: Dispatch<SetStateAction<IBook[]>>;
    };
    const handaleReadBook = () => {
        setWishlist([...wishlist, book]);
        toast.success(`You have read "${book.bookName}" to your Wishlist`)
    };
    return (
        <button className="btn btn-accent " onClick={() => handaleReadBook()}>Wishlist</button>
    );
};

export default WishlistButton;
