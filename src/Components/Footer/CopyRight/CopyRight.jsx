import { useState, useEffect } from 'react';
import './CopyRight.css';

const CopyRight = () => {

    let date = new Date();
    let orgdate = date.getFullYear();

    const [currentYear, setCurrentYear] = useState(orgdate);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentYear(orgdate);
        }, 60000);

        return () => clearInterval(interval);
    }, [orgdate]);
    return (
        <>
            <div className='OuterBox'>
                <h2 className='CopyRightCont'>Copyright © {currentYear} Webwise Studio. All rights reserved.</h2>
            </div>
        </>
    )
}

export default CopyRight