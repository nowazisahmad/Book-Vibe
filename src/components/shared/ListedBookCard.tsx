import IBook from "@/type";
import Image from "next/image";
import Link from "next/link";

const ListedBookCard = ({ book }: { book: IBook }) => {
    return (
        <div
                  key={book.bookId}
                  className="group flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row"
                >
                  {/* Book Image */}
                  <div className="flex shrink-0 items-center justify-center rounded-xl bg-slate-100 p-6 md:w-52">
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      width={180}
                      height={250}
                      className="h-60 w-auto rounded-lg object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Book Information */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      {/* Category */}
                      <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                        {book.category}
                      </span>

                      {/* Title */}
                      <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                        {book.bookName}
                      </h2>

                      {/* Author */}
                      <p className="mt-1 text-sm text-slate-500">
                        By{" "}
                        <span className="font-semibold text-slate-700">
                          {book.author}
                        </span>
                      </p>

                      {/* Review */}
                      <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                        {book.review}
                      </p>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Information */}
                    <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <span>
                          📄{" "}
                          <strong className="text-slate-700">
                            {book.totalPages}
                          </strong>{" "}
                          pages
                        </span>

                        <span>
                          ⭐{" "}
                          <strong className="text-slate-700">
                            {book.rating}
                          </strong>
                        </span>

                        <span>
                          📅{" "}
                          <strong className="text-slate-700">
                            {book.yearOfPublishing}
                          </strong>
                        </span>
                      </div>

                      <Link href={`/books/${book.bookId}`}>
                      <button className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg">
                        View Details
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
    );
};

export default ListedBookCard;