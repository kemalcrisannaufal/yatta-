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
      setScrolled(window.scrollY > 75);
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

  const isActive = (href: string) => {
    return (
      (router.pathname.startsWith(href) && href !== "/") ||
      router.pathname === href
    );
  };

  return (
    <nav
      className={cn(
        "z-50 relative bg-primary px-5 py-2 h-18 overflow-visible text-white",
        scrolled &&
          "sticky top-4 mx-2  bg-black/50 rounded-full backdrop-blur-2xl transition-all duration-300 px-8 h-16 ",
        isDropdownOpen && "rounded-b-none bg-primary"
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
                isActive(nav.href) && "font-semibold text-neon"
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
                "md:hidden top-full left-0 z-40 absolute bg-black/50 backdrop-blur-2xl w-full",
                scrolled && "rounded-b-xl bg-primary"
              )}
            >
              <div className="px-3 pt-3 pb-5">
                {NAV_ITEMS.map((nav) => (
                  <Link
                    href={nav.href}
                    key={`nav-${nav.name}`}
                    className={cn(
                      "flex justify-between items-center px-7 py-3 text-gray-300 text-lg",
                      isActive(nav.href) && "font-semibold text-neon"
                    )}
                  >
                    {nav.name}
                    <FaChevronRight className="text-2xl" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default MainLayoutNavbar;
