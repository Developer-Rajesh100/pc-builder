import About from "./Components/About/About";
import Faq from "./Components/Accordion/Faq";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";
import Statistic from "./Components/Statistic/Statistic";
import Team from "./Components/Team/Team";
import Testimonials from "./Components/Testimonials/Testimonials";
import News from "../../Pages/Home/Components/News/News";

const Home = () => {
  return (
    <div>
      <Banner />
      <Statistic />
      <About />
      <Products />
      <Services />
      <Faq />
      <Team />
      <News />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
