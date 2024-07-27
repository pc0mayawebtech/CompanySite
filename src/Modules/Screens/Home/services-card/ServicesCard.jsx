import { FastForward } from 'lucide-react';
import "./ServicesCard.css";
import { Fade } from "react-awesome-reveal";

const ServicesCard = ({ title, content }) => {
    return (
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
            <section className='CardBox'>
                <div className="container">
                    <div>
                        <Fade cascade="true" duration={500} direction='left' triggerOnce>
                            <div className='boxCard'>
                                <h4 className='boxCardHead'><FastForward className='fastIcon' /> {title}</h4>
                                <p className='boxCardCont'>{content}</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesCard;