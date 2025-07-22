import Image from "next/image";
import Link from "next/link";

const MainLayoutFooter = () => {
  return (
    <footer className="bg-[#1e2a5a] mt-8 p-10 text-white">
      <div className="flex lg:flex-row flex-col justify-between items-center lg:items-start gap-8">
        <div className="flex items-center gap-5 max-w-[300px]">
          <Image
            src={"/images/general/logo.svg"}
            alt="logo"
            width={100}
            height={100}
          />
          <div>
            <h2 className="font-bold text-4xl">Yatta!</h2>
            <p className="text-gray-300 text-sm">
              Discover the latest anime, curated just for you.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="mb-2 font-semibold text-lg">Menu</h3>
          <ul className="flex lg:flex-col justify-between gap-5 lg:gap-0 space-y-1 w-full text-gray-300 text-sm">
            <li>Home</li>
            <li>Anime</li>
            <li>Characters</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="mb-2 font-semibold text-lg">Made With</h3>
          <ul className="flex lg:flex-col gap-5 lg:gap-0 space-y-1 text-gray-300 text-sm">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="mb-2 font-semibold text-lg">API</h3>
          <Link href="https://jikan.moe">
            <Image
              src={"/images/general/jikan-logo.svg"}
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className="flex flex-col items-center mt-5 lg:mt-0">
          <h2 className="font-bold text-4xl">Yatta!</h2>
          <p className="mt-2 text-gray-300 text-sm">
            © {new Date().getFullYear()} Yatta! All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainLayoutFooter;
