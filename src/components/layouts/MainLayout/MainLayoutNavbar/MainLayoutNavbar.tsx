import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "../mainLayout.constants";
import cn from "@/utils/cn";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import { FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const MainLayoutNavbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsDropdownOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={cn(
        "z-50 relative bg-[#1e2a5a] px-5 py-2 h-18 text-white",
        scrolled &&
          "sticky top-4 mx-2 rounded-full transition-all duration-300 px-8 h-16",
        isDropdownOpen && "rounded-b-none"
      )}
    >
      <div className="flex justify-between items-center px-2 w-full h-full">
        <Link href={"/"} className="flex items-center gap-5 max-w-[300px]">
          <Image
            src={"/images/general/logo.svg"}
            alt="logo"
            width={50}
            height={50}
          />
          <h2 className="font-bold text-2xl md:text-3xl">Yatta!</h2>
        </Link>

        <HamburgerMenu
          className="md:hidden"
          isOpen={isDropdownOpen}
          setIsOpen={setIsDropdownOpen}
        />

        <div className="hidden md:flex items-center gap-5">
          {NAV_ITEMS.map((nav) => (
            <Link
              href={nav.href}
              key={`nav-${nav.name}`}
              className={cn(
                "p-2 text-gray-300",
                router.pathname === nav.href && "font-semibold text-white"
              )}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className={cn(
                "md:hidden top-[95%] left-0 z-40 absolute flex flex-col bg-[#1e2a5a] px-3 pt-3 pb-5 w-full",
                scrolled && "rounded-b-xl"
              )}
            >
              {NAV_ITEMS.map((nav) => (
                <Link
                  href={nav.href}
                  key={`nav-${nav.name}`}
                  className={cn(
                    "flex justify-between items-center px-7 py-3 text-gray-300 text-lg",
                    router.pathname === nav.href && "font-semibold text-white"
                  )}
                >
                  {nav.name}
                  <FaChevronRight className="text-2xl" />
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MainLayoutNavbar;
