import CopyRight from './CopyRight/CopyRight';
import './Footer.css';
import UsefulLink from './NavigateRoute/UsefulLink';
import { Link } from 'react-router-dom';
const Footer = () => {

  return (
    <>
      <footer>
        <div className='FooterBanner'>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 footer-widget">
                <div className='CompnayData'>
                  <h5 className='companyInfo'>About Maya Web Tech</h5>
                  <span className='Textdecorate'></span>
                  <p className='CompanyWork'>Maya Web Tech is a professional web services company In Noida (Delhi/ NCR), India. We design and build websites, provide internet marketing solutions and help businesses create their brand.</p>
                </div>
                <div className='socialIcon'>
                  <Link to="https://www.facebook.com/profile.php?id=100094274320325"><i className="fa-brands fa-facebook fa-xl"></i></Link>
                  <Link to=""><i className="fa-brands fa-square-x-twitter fa-xl"></i></Link>
                  <Link to=""><i className="fa-brands fa-pinterest fa-xl"></i></Link>
                  <Link to="https://www.linkedin.com/company/96414344/admin/feed/posts/"><i className="fa-brands fa-linkedin fa-xl"></i></Link>
                </div>
              </div>
              <UsefulLink link1="/" link2="service" link3="about" link4="contact" title="Quick Links" listlink="Home" listlink2="Services" listlink3="About" listlink4="Contact" icon=<i className='fa-solid fa-angles-right'></i> />
              <UsefulLink link1="privacypolicy" link2="refundpolicy" link3="term-condition" link4="disclaimer" title="Useful Links" listlink="Privacy Policy" listlink2="Refund Policy" listlink3="Terms & Conditions" listlink4="Disclaimer" icon=<i className='fa-solid fa-angles-right'></i> />
              <div className="col-lg-3 footer-widget">
                <div className='CompnayData'>
                  <h5 className='companyInfo'>Contact Us</h5>
                  <span className='Textdecorate'></span>
                  <div className='CompnayInnerDataList'>
                    <ul>
                      <li><Link to="https://www.google.com/maps/search/A-44,+Sector+-2,+Noida-201301+Uttar+Pradesh/@28.5867058,77.2694719,12z/data=!3m1!4b1?entry=ttu" className='mainfwrapper'><i className="fa-solid fa-location-dot"></i> A-44, Sector -2, Noida-201301 Uttar Pradesh</Link></li>
                      <li><Link to="tel:+91-9315969524" className='mainfwrapper'><i className="fa-solid fa-phone"></i> +91-9315969524</Link></li>
                      <li><Link to="tel:0120-4158051" className='mainfwrapper'><i className="fa-solid fa-phone"></i> 0120-4158051</Link></li>
                      <li><Link to="mailto:info@mayawebtech.com" className='mainfwrapper'><i className="fa-solid fa-envelope"></i> info@mayawebtech.com</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CopyRight />
    </>
  )
}

export default Footer;