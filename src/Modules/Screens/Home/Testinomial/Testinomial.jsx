import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testinomial.css';
import cropuser1 from '../../../../assets/Images/cropuser1.jpg';
import cropuser2 from '../../../../assets/Images/cropuser2.jpg';
import cropuser3 from '../../../../assets/Images/cropuser3.jpeg';

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='Testinomial-slides'>
                <Slider {...settings}>
                    <div className='testinomial'>
                        <div className='TestiImg'>
                            <img src={cropuser1} alt="cropuser1" />
                        </div>
                        <div className='Innercard'>
                            <p className='carduser'>John Morgan</p>
                            <p className='cardCont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident dicta, animi molestiae quibusdam possimus?</p>
                        </div>
                    </div>
                    <div className='testinomial'>
                        <div className='TestiImg'>
                            <img src={cropuser2} alt="cropuser2" />
                        </div>
                        <div className='Innercard'>
                            <p className='carduser'>John Morgan</p>
                            <p className='cardCont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident dicta, animi molestiae quibusdam possimus?</p>
                        </div>
                    </div>
                    <div className='testinomial'>
                        <div className='TestiImg'>
                            <img src={cropuser3} alt="cropuser3" />
                        </div>
                        <div className='Innercard'>
                            <p className='carduser'>John Morgan</p>
                            <p className='cardCont'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquam ducimus! Atque expedita aspernatur eligendi!</p>
                        </div>
                    </div>
                </Slider>
        </div>
    );
};

export default Carousel;
