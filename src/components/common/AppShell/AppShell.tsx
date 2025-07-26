import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import cn from "@/utils/cn";

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
