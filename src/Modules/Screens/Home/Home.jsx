import "./Home.css";
import { useRef, useState, useEffect } from "react";
import heroBannerVideo from "../../../assets/Videos/HeroBanner3.mp4";
import about from "../../../assets/Images/about.gif";
import ServicesCard from "./services-card/ServicesCard";
import CompanyWork from "./company-work/CompanyWork";
import client from "../../../assets/Images/clients1.png";
import project from "../../../assets/Images/projects.png";
import support from "../../../assets/Images/support.png";
import hardWork from "../../../assets/Images/team-member.png";
import FAQ from "../Home/FAQ/FAQ";
import { questions } from "../Home/FAQ/api.js";
import { Fade } from "react-awesome-reveal";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs.jsx";
import ProcessList from "./Process/Process.jsx";
import Growth from "./Growth/Growth.jsx";
import Strategy from "./Strategy/Strategy.jsx";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedID, setSelectedID] = useState();
  const videoRef = useRef();

  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.75;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="HomeWrapper">
        <div className="ElementorVideo">
          <video
            ref={videoRef}
            onCanPlay={() => setPlayBack()}
            autoPlay
            muted
            className="elementorSetVideo"
            style={{ width: "100%", height: "550px" }}
          >
            <source src={heroBannerVideo} type="video/mp4" />
          </video>
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="mainHero">
                  <div className="bannerLeftSide">
                    <h1 className="bannerHead animate__animated animate__zoomInDown animate__delay-1s">
                      Global Market Intelligence Consultancy
                    </h1>
                    <p className="bannerPara animate__animated animate__zoomInDown animate__delay-2s">
                      We can research any market, any company, any topic,
                      anywhere.
                    </p>
                  </div>
                  <div className="bannerRightSide">
                    <img
                      src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721990138/undraw_progressive_app_m-9-ms_1_maw8u4.svg"
                      alt="banner"
                      width={450}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="AboutUS">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-6">
                <div className="aboutHeadWrapper">
                  <Fade cascade duration={3000} direction="left">
                    <h2 className="IntroCompany">About Us</h2>
                  </Fade>
                  <span className="Textdecorate"></span>
                  <h2>India Best Web Designing Company</h2>
                  <p className="CompanyDescript">
                  We are a crafting web designing and digital marketing agency. We make sure that we can serve our customers with the satisfactory services that they need. We also make sure that we can establish a more powerful space in the market of the brand and website that you have. Whether you want us to create its design or we ourselves create the design that looks perfect.
                  </p>
                  <p>
                  We believe that the power of innovation is there to bring great results to our customers. We seek the market and then we take a big step in dealing with that to make sure that our customers can thrive successfully in a digital world. We make an approach to provide our clients with the satisfaction of bringing.
                  </p>
                  <p>
                  From making an appealing website to providing our customers with satisfactory digital marketing services we assure you that we are able to provide our customers with all the necessary web designing services and digital marketing services that make them go on the digital world.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ABoutLogo">
                  <img
                    src={
                      "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721990424/undraw_personal_information_re_vw8a_leyxqe.svg"
                    }
                    alt="about"
                    width={450}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="SolutionDelivered">
        <div className="container">
          <div className="SolDelievreHead">
            <h2>Services We Deliver</h2>
            <span className="Textdecorate"></span>
            <div className="row mt-5">
              <ServicesCard
                title="Website Design & Hosting"
                content="Devise and implement business strategies that drive success—for an entire business or division, technology, or asset."
              />
              <ServicesCard
                title="Google Adwords"
                content="By balancing and optimizing the many competing assets and initiatives achieve deep & lasting improvements."
              />
              <ServicesCard
                title="Search Engine Optimization"
                content="Organizations are designed to be effective and an efficient. The processes require cross-functional teaming."
              />
              <ServicesCard
                title="Social Media Optimization"
                content="Our decision risk analytics empower clients to develop rational decision-making models and development."
              />
              <ServicesCard
                title="Mobile Web Designing"
                content="The venues where savings and investments are channeled between the suppliers who have capital and those."
              />
              <ServicesCard
                title="Content Optimization"
                content="Redefine your workplace value equation that encourage staff to work more attentively and gracefully."
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ margin: "30px 0" }}>
        <div className="container">
          <div className="row mt-5">
            <CompanyWork
              count="2000"
              increment="+"
              img={client}
              worksucess="Clients"
            />
            <CompanyWork
              count="1400"
              increment="+"
              img={project}
              worksucess="Projects"
            />
            <CompanyWork
              count="24"
              img={support}
              worksucess="Hours Of Support"
            />
            <CompanyWork
              count="70"
              increment="+"
              img={hardWork}
              worksucess="Hard Workers"
            />
          </div>
        </div>
      </section>

      {/* <section className="Testinomials mt-5 pb-5">
        <div className="container">
          <div>
            <div>
              <h2 className="testinomialleftHead">
                Read What Our Clients Say About Us!
              </h2>
              <span className="Textdecorate d-block m-auto mb-3"></span>
              <p className="testinomialleftCont">
                Client feedback motivates us to do more, be more, and accomplish
                more. We are able to perform even better thanks to our clients,
                their complimentary comments, and our desire for shared success.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <Testinomial />
          </div>
        </div>
      </section> */}
      <Growth />
      <WhyChooseUs />
      <ProcessList />
      <Strategy />

      <section className="FAQ">
        <div className="container">
          <div className="FAQBox">
            <h2 className="FaqHead">FAQ</h2>
            <span className="Textdecorate m-auto"></span>
          </div>
          <div className="mb-5">
            {questions?.map((elm, id) => {
              return (
                <FAQ
                  key={id}
                  {...elm}
                  setSelectedID={setSelectedID}
                  selectedID={selectedID}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
