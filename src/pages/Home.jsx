import About from "../layouts/About";
import Connectivity from "../layouts/Connectivity";
import Features from "../layouts/Features";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Connectivity />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default Home;
