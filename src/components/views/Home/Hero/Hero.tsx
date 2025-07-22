import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative mb-10 w-full h-[45vh]">
      <div className="flex flex-col justify-center items-center bg-[url('/images/general/hero.jpg')] bg-black bg-cover bg-no-repeat bg-center w-full h-full text-white">
        <div className="z-20 p-5">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-bold text-4xl md:text-5xl"
          >
            Find Your Next Anime Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-2.5 text-lg tracking-wide"
          >
            Dive into the world of anime. Explore thousands of titles from
            various genres and categories.
          </motion.p>
        </div>
      </div>

      <div
        className="absolute inset-0 bg-black/10 backdrop-blur-[2px] w-full h-full"
        aria-label="background-overlay"
      />

      <div className="-bottom-6 absolute flex justify-center items-center w-full">
        <div className="flex items-center gap-2 bg-white shadow-xl px-4 rounded-lg w-3/4 xl:w-1/2">
          <input
            type="text"
            placeholder="Search anime..."
            className="px-4 py-3 focus:outline-none w-full"
          />
          <CiSearch className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
