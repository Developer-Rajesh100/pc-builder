import CountUp from "react-countup";
import StatisticImg from "../../../../assets/statistic_img.jpg";

const Statistic = () => {
  return (
    // <section className="text-gray-600 body-font">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="flex justify-evenly">
    //       <div className="p-14 rounded-full text-center bg-sky-200">
    //         <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
    //           <CountUp end={999} duration={5} />
    //         </h2>
    //         <p className="leading-relaxed">Users</p>
    //       </div>
    //       <div className="p-14 rounded-full text-center bg-sky-200">
    //         <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
    //           <CountUp end={27} duration={5} />
    //         </h2>
    //         <p className="leading-relaxed">Engineer</p>
    //       </div>
    //       <div className="p-14 rounded-full text-center bg-sky-200">
    //         <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
    //           <CountUp end={100} duration={5} />
    //         </h2>
    //         <p className="leading-relaxed">Downloads</p>
    //       </div>
    //       <div className="p-14 rounded-full text-center bg-sky-200">
    //         <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
    //           <CountUp end={55} duration={5} />
    //         </h2>
    //         <p className="leading-relaxed">Products</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap gap-5 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
              Moon hashtag pop-up try-hard offal truffaut
            </h1>
            <div className="leading-relaxed">
              Pour-over craft beer pug drinking vinegar live-edge gastropub,
              keytar neutra sustainable fingerstache kickstarter.
            </div>
          </div>
          <div className="p-14 rounded-full text-center bg-sky-200">
            <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
              <CountUp end={999} duration={10} />
            </h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-14 rounded-full text-center bg-sky-200">
            <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
              <CountUp end={27} duration={10} />
            </h2>
            <p className="leading-relaxed">Engineer</p>
          </div>

          <div className="p-14 rounded-full text-center bg-sky-200">
            <h2 className="font-medium sm:text-4xl text-3xl text-gray-900">
              <CountUp end={55} duration={10} />
            </h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src={StatisticImg}
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistic;
