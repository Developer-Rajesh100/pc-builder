import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";
import Statistic from "./Components/Statistic/Statistic";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Products />
      <Services />
      <Statistic />
    </div>
  );
};

export default Home;
