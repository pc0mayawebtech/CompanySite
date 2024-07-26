import { useEffect } from 'react';
import './About.css';
import '../Home/Home.css';
import CompanyWork from '../Home/company-work/CompanyWork';
import innerlogo from '../../../assets/Images/chooseinnerlogo.png';
import client from '../../../assets/Images/clients1.png';
import project from '../../../assets/Images/projects.png';
import support from '../../../assets/Images/support.png';
import hardWork from '../../../assets/Images/team-member.png';
import WorkProcess from './WorkProcess/WorkProcess';
import { Link } from 'react-router-dom';
import { Bounce, Slide } from 'react-awesome-reveal';
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className='BannerBox'>
        <div className='InnerBanner'>
          <div className="row">
            <div className="col-lg-12">
              <h1 className='aboutHead animate__animated animate__zoomInDown animate__delay-1s'>About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='heroWrapper mb-5'>
        <div className="container">

          <div>
            <Slide cascade damping={1}>
              <h2 className='digitalWrapper'>Welcome to Maya Web Tech</h2>
            </Slide>
            <Slide cascade damping={4}>
              <p className='WrapperContent'>Your Trusted Partner in Digital World !</p>
            </Slide>
          </div>
          <div>
            <Slide cascade damping={6}>
              <p className='abtCompany'>
                Welcome to Digital Molecule, your trusted partner in Delhi, India since 2012 (Earlier Known as VaMedia Box Pvt Ltd). With 13 years of dedication, we empower businesses through services like Digital Marketing, Website Development, Mobile App Development, Website Maintenance, and Graphic Design. Join us on a journey to transform your brands digital presence. Digital Molecule is more than a service; its an experience, a shared journey towards your goals. Join us as we blend creativity, technology, and strategy to create a unique digital narrative. Welcome to a partnership that exceeds expectations, guiding your brand toward digital success.
              </p>
            </Slide>
          </div>
        </div>
      </section >

      <section className='ChooseUs mb-5'>
        <div className="container">
          <div className='row'>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className='InnerLogo'>
                <img src={innerlogo} alt="innerlogo" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className='whyChooseSum'>
                <Bounce cascade damping={10}>
                  <h2 className='chooseHead'>Why Choose Us?</h2>
                </Bounce>
              </div>
              <div className='ListMenu'>
                <div>
                  <h4 className='listWorkingHead'>Innovation at the Core:</h4>
                  <p className='listWorkingAbt'>Discover a commitment to innovation at Digital Molecule, where we continuously explore cutting-edge technologies and creative solutions to keep pace with industry trends.</p>
                </div>
                <div>
                  <h4 className='listWorkingHead'>Client-Centric Approach:</h4>
                  <p className='listWorkingAbt'>Your success is our top priority. We engage in active listening, deep understanding, and close collaboration to customize our services according to your unique requirements, ensuring a client-centric approach every step of the way.</p>
                </div>
                <div>
                  <h4 className='listWorkingHead'>Experienced Team:</h4>
                  <p className='listWorkingAbt'>Our team is a collective of seasoned professionals, each bringing a wealth of expertise in their respective fields. With diverse skills and a commitment to excellence, we ensure holistic solutions for every project.</p>
                </div>
                <div>
                  <h4 className='listWorkingHead'>Result-Oriented Strategies:</h4>
                  <p className='listWorkingAbt'>Beyond task execution, we specialize in crafting strategies that yield measurable results. Your goals seamlessly transform into our objectives, and we tirelessly work towards achieving them through thoughtful, result-driven approaches.</p>
                </div>
                <div>
                  <h4 className='listWorkingHead'>Quality Assurance:</h4>
                  <p className='listWorkingAbt'>Discover a commitment to innovation at Digital Molecule, where we continuously explore cutting-edge technologies and creative solutions to keep pace with industry trends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='CompanySuccess'>
        <div className="container">
          <div className="row mt-5">
            <CompanyWork count="2000" increment="+" img={client} worksucess="Clients" />
            <CompanyWork count="1400" increment="+" img={project} worksucess="Projects" />
            <CompanyWork count="24" img={support} worksucess="Hours Of Support" />
            <CompanyWork count="70" increment="+" img={hardWork} worksucess="Hard Workers" />
          </div>
        </div>
      </section>

      <section className='WorkProcess Workp-bg'>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-3 col-md-3 col-sm-2"></div>
            <div className='col-lg-6 col-md-6 col-sm-8'>
              <div className='ProcessWork'>
                <h5 className='behindtheseen'>HOW IT WORK</h5>
                <h2 className='stepFollow'>Three Simple Step To Start Working Process</h2>
              </div>
            </div>
          </div>

          {/* 2nd Row Start */}
          <WorkProcess />
        </div>
      </section>

      <section className='ReachOutUs ConnectBusiness'>
        <div className='rBuisness-layer'></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className='InnerContactData'>
                <p className='InnerCont'>WE MAKE A DIFFERENCE</p>
                <h2 className='InnerHead'>Are You Ready For Successfull Business With Us?</h2>
                <p className='abtbusineeslayer'>Domain Names Services with competitive prices.Hosting is like the intermediate between the website.Today’s world is the world innovation and creativity. Graphic Design is the combination of creativity, technical knowledge, and research skills.</p>
              </div>
              <div>
                <button className='Connectbtn'>
                  <Link to="tel:+919824620234" inputMode='numeric' className='innerContact'>Contact Me</Link>
                </button>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About;