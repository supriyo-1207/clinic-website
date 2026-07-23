import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Doctor from "./components/Doctor";
import CTA from "./components/CTA";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Products />
      <Doctor />
      <WhyChooseUs />
      <Testimonials />
      {/* <CTA /> */}
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;