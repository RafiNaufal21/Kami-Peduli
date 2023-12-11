import About from "../fragments/About";
import Carousel from "../fragments/Carousel";
import Causes from "../fragments/Causes";
import Navbar from "../fragments/Navbar";
import Spinner from "../fragments/Spinner";
import Service from "../fragments/Service";
import Donasi from "../fragments/Donasi";
import TestimonialCarousel from "../fragments/Testimonials";
import Footer from "../fragments/Footer";


const Home = () => {
  return (
    <>
      <Spinner />
      <Navbar />
      <Carousel />
      <About />
      <Causes />
      <Service />
      <Donasi />
      <TestimonialCarousel />
      <Footer />
      
    </>
  );
};
export default Home;
