import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* INDEX içeriğini burda kullanırız. */}
      <main className="flex-grow px-4 lg:px-0">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
