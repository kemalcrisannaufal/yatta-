import PageHead from "@/components/common/PageHead";
import { ReactNode } from "react";
import MainLayoutFooter from "./MainLayoutFooter";
import MainLayoutNavbar from "./MainLayoutNavbar";

interface Proptypes {
  children: ReactNode;
  title: string;
  withoutNavbar?: boolean;
}

const MainLayout = (props: Proptypes) => {
  const { children, title, withoutNavbar } = props;
  return (
    <>
      <PageHead title={title} />
      <main className="flex flex-col min-h-screen">
        {!withoutNavbar && <MainLayoutNavbar />}
        <div className="flex-grow">{children}</div>
        <MainLayoutFooter />
      </main>
    </>
  );
};

export default MainLayout;
