import { useEffect } from 'react';
import '../Home/Home.css';
import CardBox from './ServiceCardBox/CardBox';
import techService from '../../../assets/Images/techservice.png';
import './Service.css';
import TechStack from './TechStack/TechStack';
import reactlogo from '../../../assets/Images/reactlogo.png';
import phplogo from '../../../assets/Images/phplogo.png';
import angularlogo from '../../../assets/Images/angularlogo.png';
import htmllogo from '../../../assets/Images/htmllogo.png';
import csslogo from '../../../assets/Images/csslogo.png';
import javascriptlogo from '../../../assets/Images/javascriptlogo.png';
import nodelogo from '../../../assets/Images/nodelogo.png';
import ioslogo from '../../../assets/Images/ioslogo.png';
import androidlogo from '../../../assets/Images/androidlogo.png';
import swiflogo from '../../../assets/Images/swiftlogo.png';
import flutterlogo from '../../../assets/Images/flutterlogo.png';
import objectClogo from '../../../assets/Images/objectClogo.png';
import invisionlogo from '../../../assets/Images/invisiologo.png';
import sketchlogo from '../../../assets/Images/sketchlogo.png';
import figmalogo from '../../../assets/Images/Figmalogo.png';
import Adobelogo from '../../../assets/Images/Adobelogo.png';
import CompanyWork from '../Home/company-work/CompanyWork';
import client from '../../../assets/Images/clients1.png';
import project from '../../../assets/Images/projects.png';
import support from '../../../assets/Images/support.png';
import hardWork from '../../../assets/Images/team-member.png';
import Subscribe from './Subscribe/Subscribe';
import CardTechnology from './CardTechnology/CardTechnology';

const Service = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section className='ServicetWrapper mb-5'>
        <div className='ServiceBanner'>
          <div className="row">
            <div className="col-lg-12">
              <h1 className='serviceHead animate__animated animate__zoomInDown animate__delay-1s'>Services</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ServiceProvided mb-5">
        <div className="row">
          <CardBox />
        </div>
      </section>

      <section className='CompanySuccess mb-5'>
        <div className="container">
          <div className="row mt-5">
            <CompanyWork count="2000" increment="+" img={client} worksucess="Clients" />
            <CompanyWork count="1400" increment="+" img={project} worksucess="Projects" />
            <CompanyWork count="24" img={support} worksucess="Hours Of Support" />
            <CompanyWork count="70" increment="+" img={hardWork} worksucess="Hard Workers" />
          </div>
        </div>
      </section>

      <section className='mb-5'>
        <CardTechnology />
      </section>

      <section className='Technology mb-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="techWrapper">
                <h2 className='Techhead'>TOOLS & TECHNOLOGIES OUR SOFTWARE DEVELOPERS USE</h2>
                <p className='TechCont'>Intellectsoft has grown into an international contestant in software engineering with wide-ranging expertise in all the areas needed for reliable software development.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="techWrapper">
                <img src={techService} alt="techService" />
              </div>
            </div>
          </div>
        </div>
        <TechStack head1="Web" head2="Development" img1={reactlogo} img2={phplogo} img3={angularlogo} img4={htmllogo} img5={csslogo} img6={javascriptlogo} img7={nodelogo} lang1="React" lang2="PhP" lang3="Angular" lang4="HTML" lang5="CSS" lang6="JavaScript" lang7="Node" background="back1" />
        <TechStack head1="Mobile" head2="Application" img1={ioslogo} img2={androidlogo} img3={swiflogo} img4={flutterlogo} img5={objectClogo} img6={reactlogo} lang1="iOS" lang2="Android" lang3="Swift" lang4="Flutter" lang5="Objective C" lang6="React Native" background="back2" />
        <TechStack head1="Design" img1={invisionlogo} img2={sketchlogo} img3={figmalogo} img4={Adobelogo} lang1="invison" lang2="Sketch" lang3="Figma" lang4="Adobe XD" background="back3" />
      </section>

      <section className='mb-5'>
        <Subscribe />
      </section>
    </>
  )
}

export default Service;