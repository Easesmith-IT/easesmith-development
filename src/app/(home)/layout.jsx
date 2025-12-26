import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
