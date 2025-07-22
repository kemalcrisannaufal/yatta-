import PageHead from "@/components/common/PageHead";
import { ReactNode } from "react";
import MainLayoutFooter from "./MainLayoutFooter";

interface Proptypes {
  children: ReactNode;
  title: string;
}

const MainLayout = (props: Proptypes) => {
  const { children, title } = props;
  return (
    <>
      <PageHead title={title} />
      {children}
      <MainLayoutFooter />
    </>
  );
};

export default MainLayout;
