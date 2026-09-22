import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";
import IBook from "@/type";
import Image from "next/image";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  //   const book = booksData.find((book: IBook) => book.bookId === Number(id));
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook;
  return (
    <div className="container mx-auto px-4">
      <div className="card lg:card-side overflow-hidden bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <figure className="bg-slate-100 p-6 lg:w-1/3">
          <Image
            src={book?.image}
            alt={book?.bookName}
            width={300}
            height={400}
            className="h-80 w-auto rounded-lg object-contain shadow-md transition-transform duration-300 hover:scale-105"
          />
        </figure>
        <div className="card-body lg:w-2/3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
              {book?.category}
            </span>
            <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1">
              <span className="text-lg">★</span>
              <span className="font-bold text-amber-600">{book?.rating}</span>
            </div>
          </div>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
            {book?.bookName}
          </h2>
          <p className="text-sm font-medium text-slate-500">
            by <span className="text-slate-700">{book?.author}</span>
          </p>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
            {book?.review}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-4 md:grid-cols-4">
            <div>
              <p className="text-xs text-slate-400">Pages</p>
              <p className="font-semibold text-slate-700">{book?.totalPages}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Published</p>
              <p className="font-semibold text-slate-700">
                {book?.yearOfPublishing}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Publisher</p>
              <p className="font-semibold text-slate-700">{book?.publisher}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Book ID</p>
              <p className="font-semibold text-slate-700">#{book?.bookId}</p>
            </div>
          </div>
            <div className="flex gap-3">
              <ReadButton book={book}/>
              <WishlistButton book={book} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
