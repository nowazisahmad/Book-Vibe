"use client";
import ListedBookCard from "@/components/shared/ListedBookCard";
import { BooksContext } from "@/context/BookContext";
import IBook from "@/type";
import { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext) as {
    readBooks: IBook[];
    wishlist: IBook[];
  };
  console.log(readBooks, wishlist, "readBooks", "wishlist");
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];
    if(sortBy === "rating"){
      sortedBooks.sort((a,b) => b.rating - a.rating);
    } else if(sortBy === "pages"){
      sortedBooks.sort((a,b) => b.totalPages - a.totalPages);
    } else if(sortBy === "year"){
      sortedBooks.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist)
  return (
    <div className="container mx-auto py-15">
      <h2 className="my-4 bg-slate-200 rounded-3xl py-8 font-bold text-4xl text-center">
        Listed Books
      </h2>
      <div className="text-end">
        <select 
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
        defaultValue="Pick a Runtime" 
        className="select select-success">
        <option disabled={true}>Sort By</option>
        <option value={"rating"}>Rating</option>
        <option value={"pages"}>Number of Pages</option>
        <option value={"year"}>Published Year</option>
      </select>
      </div>
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {readBooks.length > 0 ? (
            sortedReadBooks.map((book: IBook) => {
              return <ListedBookCard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="font-bold text-4xl text-center">No read books found.</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist books (${wishlist.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {wishlist.length > 0 ? (
            sortedWishlist.map((book: IBook) => {
              return <ListedBookCard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="font-bold text-4xl text-center">No wishlist books found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
