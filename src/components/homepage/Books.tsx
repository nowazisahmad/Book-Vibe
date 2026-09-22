import IBook from "@/type";
import BookCard from "../shared/BookCard";

const getBooks = async():Promise<IBook[]> => {
    const res = await fetch("http://localhost:3000/booksData.json")
    const data = await res.json();
    return data;
}

const Books = async () => {
    const booksData = await getBooks();
    console.log(booksData);
    return (
        <section className="container mx-auto my-[70px] px-4">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
          Our Collection
        </p>

        <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
          Explore Popular Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Discover amazing stories, timeless classics, and inspiring books from
          talented authors.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0, 9).map((book: IBook, ind: number) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;