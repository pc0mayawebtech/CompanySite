import { useEffect } from 'react';
import './Contact.css';
import ContactLogo from '../../../assets/Images/mayaContactUs.jpg';
import Form from './Form/Form';
import EnquiryCard from './EnquiryCard/EnquiryCard';
import connectUs from '../../../assets/Images/ConnctUslogo.png';
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className='contactWrapper mb-5'>
        <div className='ContactBanner'>
          <div className="row">
            <div className="col-lg-12">
              <h1 className='contactHead animate__animated animate__zoomInDown animate__delay-1s'>Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='ContactUS'>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className='ConnectUs'>
                <p className='Connect'>Contact Us</p>
                <h2 className='ConnectSpeech'>Give us a shout. We are all ears.</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div>
                <img src={connectUs} alt="connectUs" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='EnquiryMenu'>
        <div className="container">
          <div className='row'>            
            <div className="col-lg-12">
              <div>
                <h2 className='EnquiryHead'>For any inquiries or assistance,<br /> feel free to reach out to us.</h2>
                <p className='EnquiryCont'>We are dedicated to your needs. Reach out to us for prompt support and solutions.</p>
              </div>
            </div>            
          </div>

          <div>
            <div className="row mt-4">
              <EnquiryCard contactlogo='fa-solid fa-phone fa-xl' contactmedium='Phone' needHelp='Need a quote ? Our team is just a phone call away.' contactMode='+919315969524' connect='tel:+919315969524' mode='numeric' />
              <EnquiryCard contactlogo='fa-solid fa-envelope fa-xl' contactmedium='Email' needHelp='Want a detailed quote? Email us to get it delivered straight to inbox.' contactMode='webwisestudio1@gmail.com' connect='mailto:webwisestudio1@gmail.com' />
              <EnquiryCard contactlogo='fa-solid fa-location-dot fa-xl' contactmedium='Location' needHelp='A-44, T04 Third Floor, Sector 2, Noida Uttar Pradesh - 201301' contactMode='View on Google map' connect='https://www.google.com/maps/search/A-44,+Third+Floor,+Sector+15,+Noida/@28.5812439,77.3066694,16z/data=!3m1!4b1?entry=ttu' />
            </div>
          </div>
        </div>
      </section>

      <section className='ContactForm mb-5'>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6">
              <div className='ContactTouch'>
                <h2 className='TalkUs'>Let Us talk</h2>
                <p className='ReachUs'>Please fill out the form or email at mayaweb@gmail.com</p>
                <img src={ContactLogo} alt="Contact" className='w-100' />
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Contact;