import Image from "next/image";

function Hero() {
  return (
    <section className="overflow-hidden bg-gray-100 sm:grid sm:grid-cols-2 sm:items-center mt-12">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Hi, I'm Fajri
          </h1>

          <h2 className="text-sm font-bold text-gray-900 md:text-md">
            Web Developer
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            I build modern web application using laravel and next.js.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-2 focus:ring-yellow-400 focus:outline-hidden"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <img
        alt=""
        src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
        className="h-full w-full object-cover sm:h-[calc(100%-2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%-4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
}

export default Hero;
