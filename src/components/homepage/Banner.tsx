
import Image from "next/image";
import banner from "@/assets/banner_img.png";

const Banner = () => {
  return (
    <section className="container mx-auto py-8 md:py-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-white to-emerald-50 px-6 py-15 shadow-sm md:px-12 lg:px-16">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="relative flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-8">
          <div className="w-full text-center md:w-1/2 md:text-left">
            <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              Discover Your Next Read
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Books to freshen up{" "}
              <span className="text-emerald-600">
                your bookshelf
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              Explore amazing books, discover new stories, and find your next
              favorite read.
            </p>
            <button className="mt-7 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl">
              View The List
              <span className="ml-2">→</span>
            </button>
          </div>
          <div className="relative flex w-full justify-center md:w-1/2">
            <div className="absolute h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl md:h-80 md:w-80" />
            <Image
              src={banner}
              alt="Books on a bookshelf"
              priority
              className="relative h-auto w-64 drop-shadow-2xl transition-transform duration-150 hover:scale-101 md:w-80 lg:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
