import BannerImg from "../../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <img
        style={{ height: "90vh" }}
        className="w-screen"
        src={BannerImg}
        alt=""
      />
    </div>
  );
};

export default Banner;
