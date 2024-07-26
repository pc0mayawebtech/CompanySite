import './CompanyWork.css';
import { Bounce } from "react-awesome-reveal";
import CountUp from "react-countup";
const CompanyWork = ({ count, increment, img, worksucess }) => {
    return (
        <div className="col-lg-3 col-md-12 col-sm-12 col-12 mb-4">
            <Bounce>
                <section className='BoxBlock'>
                    <div className="container">

                        <div className='OuterCont'>
                            <div className='InnerboxCard'>
                                <CountUp duration={8} end={count} className='boxCardHead'></CountUp>
                                <span className='boxCardHead'>{increment}</span>
                            </div>
                            <img src={img} alt="client" />
                        </div>
                        <h2 className='clientInfo'>{worksucess}</h2>
                    </div>
                </section>
            </Bounce>
        </div>
    )
}

export default CompanyWork