import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="flex justify-center mx-auto">
        <div className=" w-11/12 mx-auto">
          <h1 className="text-center text-5xl font-medium my-20">
            News & Media Coverage
          </h1>
          <Slider className="mx-auto" {...settings}>
            <div className="mx-auto">
              <h3 className="w-20 h-20 bg-purple-400 mx-10">1</h3>
            </div>
            <div className="mx-auto">
              <h3 className="w-20 h-20 bg-purple-400 mx-10">2</h3>
            </div>
            <div className="mx-auto">
              <h3 className="w-20 h-20 bg-purple-400 mx-10">3</h3>
            </div>
            <div className="mx-auto">
              <h3 className="w-20 h-20 bg-purple-400 mx-10">4</h3>
            </div>
            <div className="mx-auto">
              <h3 className="w-20 h-20 bg-purple-400 mx-10">5</h3>
            </div>
            <div className="mx-auto">
              <h3 className="w-20 h-20 bg-purple-400 mx-10">6</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
