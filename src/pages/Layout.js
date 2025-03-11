import { useRouter } from "next/router";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Layout = ({ children }) => {
  const router = useRouter();

  // /account/... dizininde ise, header ve footer'ı gösterme
  const isDashboardPage = router.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboardPage && <Header />}

      <main className="flex-grow px-4 lg:px-0">{children}</main>

      {!isDashboardPage && <Footer />}
    </div>
  );
};

export default Layout;
