import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect } from "react";
import { Inter } from "next/font/google";
import cn from "@/utils/cn";
import Lenis from "lenis";

interface Proptypes {
  children: ReactNode;
}

const client = new QueryClient();

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const AppShell = (props: Proptypes) => {
  const { children } = props;
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <QueryClientProvider client={client}>
        <main className={cn(inter.className, "bg-primary text-white")}>
          {children}
        </main>
      </QueryClientProvider>
    </>
  );
};

export default AppShell;
