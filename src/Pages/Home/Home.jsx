import About from "./Components/About/About";
import Faq from "./Components/Accordion/Faq";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";
import Statistic from "./Components/Statistic/Statistic";
import Testimonials from "./Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Statistic />
      <About />
      <Products />
      <Services />
      <Faq />
      <Testimonials />
    </div>
  );
};

export default Home;
