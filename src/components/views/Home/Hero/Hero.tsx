import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import Image from "next/image";
import { NAV_ITEMS } from "@/components/layouts/MainLayout/mainLayout.constants";
import Link from "next/link";
import useHero from "./useHero";

const Hero = () => {
  const { handleSearch, inputRef } = useHero();

  return (
    <div className="relative mb-10 w-full h-[45vh]">
      <div className="relative flex justify-center items-center w-full h-full overflow-hidden">
        <Image
          src="/images/general/hero.jpg"
          alt="Anime Background"
          fill
          priority
          className="z-0 object-center object-cover"
        />

        <div className="z-20 p-5 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-bold text-3xl md:text-5xl"
          >
            Find Your Next Anime Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-2.5 text-md md:text-lg tracking-wide"
          >
            Dive into the world of anime. Explore thousands of titles from
            various genres and categories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-2 md:gap-5 mt-5 md:mt-10"
          >
            {NAV_ITEMS.map((nav) => (
              <Link
                href={nav.href}
                key={nav.href}
                className="group block relative px-4 py-2 rounded-full text-xs md:text-base"
              >
                <p className="text-white group-hover:text-black">{nav.name}</p>
                <div className="z-[-1] absolute inset-0 bg-black/40 group-hover:bg-[var(--color-neon)] backdrop-blur-xs rounded-full transition-all duration-300" />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[var(--color-primary)] backdrop-blur-[2px] w-full h-full ]"
        aria-label="background-overlay"
      />

      <div className="-bottom-6 absolute flex justify-center items-center w-full">
        <div className="flex items-center gap-2 bg-secondary shadow-xl px-2 border rounded-lg w-[90%] md:w-3/4 xl:w-1/2 h-12 overflow-hidden text-white">
          <div className="flex-grow px-4">
            <input
              aria-label="search anime"
              type="text"
              placeholder="Search anime..."
              className="px-4 py-3 focus:outline-none w-full text-white"
              ref={inputRef}
            />
          </div>

          <button
            aria-label="button-search"
            className="flex justify-center items-center bg-primary hover:bg-neon p-1 rounded-full w-10 h-10 text-white hover:text-black transition-all duration-300 cursor-pointer"
            onClick={handleSearch}
          >
            <CiSearch className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
