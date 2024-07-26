import { Zoom } from 'react-awesome-reveal';
import './EnquiryCard.css';
import { Link } from 'react-router-dom';
const EnquiryCard = ({ contactlogo, contactmedium, contactMode, connect, mode, needHelp }) => {
    return (
        <>
            <div className="col-lg-4 mb-4">
                <Zoom>
                    <div className='contactWay'>
                        <div className='reachUs'>
                            <div className='contactlogo'>
                                <i className={contactlogo}></i>
                            </div>
                            <div className='contactInfoDetail'>
                                <h4 className='contactmedium'>{contactmedium}</h4>
                                <p className='needHelp'>{needHelp}</p>
                            </div>
                            <div>
                                <Link to={connect} inputMode={mode} className='contactMode'>{contactMode}</Link>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </>
    )
}

export default EnquiryCard;