import IBook from "@/type";
import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-2 hover:shadow-xl">
      {/* Book Image */}
      <div className="flex h-60 items-center justify-center bg-slate-100 p-6">
        <Image
          src={book.image}
          alt={book.bookName}
          width={200}
          height={280}
          className="h-full w-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Tags */}
      <div className="p-5 flex justify-between container mx-auto">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="p-5 py-3">
        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold text-slate-900">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="py-3 text-sm text-slate-500 ">
          by <span className="font-medium text-slate-700">{book.author}</span>
        </p>

        {/* Category + Rating */}
        <div className="flex items-center justify-between py-3">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            {book.category}
          </span>

          <div className="flex items-center gap-1 text-sm font-semibold text-amber-500">
            <span>★</span>
            <span>{book.rating}</span>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
        <button className="mt-5 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg">
          View Details →
        </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
