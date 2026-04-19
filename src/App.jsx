import About from "./components/About";
import Card from "./components/Card";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <>
      <Nav />
      <main className="relative overflow-hidden">
        <WhatsAppButton />
        <Hero />
        <About />
        <WhyChoose />
        <Card />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;
