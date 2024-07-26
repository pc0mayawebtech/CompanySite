import './UsefullLink.css';
import { Link } from 'react-router-dom';

const UsefulLink = ({title,listlink,listlink2,listlink3,listlink4,icon,link1,link2,link3,link4}) => {
    return (
        <>
            <div className='col-lg-3 footer-widget'>
                <div className='usefullLink'>
                    <h5 className='LinkHead'>{title}</h5>
                    <span className='Textdecorate'></span>
                    <div className='linkList'>
                        <ul>
                            <li><Link to={link1} className='innerfwrapper'>{icon} {listlink}</Link></li>
                            <li><Link to={link2} className='innerfwrapper'>{icon} {listlink2}</Link></li>
                            <li><Link to={link3} className='innerfwrapper'>{icon} {listlink3}</Link></li>
                            <li><Link to={link4} className='innerfwrapper'>{icon} {listlink4}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsefulLink;