import './CardTechnology.css';
import { useState } from 'react';
import graphlogo1 from '../../../../assets/Images/graphlogo.jpg';
import graphlogo2 from '../../../../assets/Images/graphlogosecond.jpg';
import graphlogo3 from '../../../../assets/Images/graphlogothird.jpg';

const CardTechnology = () => {
    const [active, setActive] = useState(1);
    return (
        <section className='serviceEfficiency'>
            <div className="container">
                <div className='mb-5'>
                    <p className='innerCont'>HELPING ENTREPRENEURS MAKE MORE MONEY</p>
                    <h2 className='innerHead'>Focus on cutting-edge technologies and cost-quality efficiency</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className={`${active === 1 ? 'activeBoxWrapper' : 'outerBoxWrapper'} mb-3`} onClick={() => setActive(1)}>
                            <label className='outerwrapper'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none"><path d="M23 1.00342L13.5 10.5034L8.5 5.50342L1 13.0034" stroke="#4C6FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </label>
                            <div>
                                <p className='subInnerCont'>Strategy & Business</p>
                                <p className='subInnerContent'>We design business models and growth strategies to be effective and competitive</p>
                            </div>
                        </div>
                        <div className={`${active === 2 ? 'activeBoxWrapper' : 'outerBoxWrapper'} mb-3`} onClick={() => setActive(2)}>
                            <label className='outerwrapper'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M21 16.0033V8.00332C20.9996 7.65259 20.9071 7.30813 20.7315 7.00448C20.556 6.70084 20.3037 6.44868 20 6.27332L13 2.27332C12.696 2.09778 12.3511 2.00537 12 2.00537C11.6489 2.00537 11.304 2.09778 11 2.27332L4 6.27332C3.69626 6.44868 3.44398 6.70084 3.26846 7.00448C3.09294 7.30813 3.00036 7.65259 3 8.00332V16.0033C3.00036 16.354 3.09294 16.6985 3.26846 17.0022C3.44398 17.3058 3.69626 17.558 4 17.7333L11 21.7333C11.304 21.9089 11.6489 22.0013 12 22.0013C12.3511 22.0013 12.696 21.9089 13 21.7333L20 17.7333C20.3037 17.558 20.556 17.3058 20.7315 17.0022C20.9071 16.6985 20.9996 16.354 21 16.0033Z" stroke="#6AC75A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.27002 6.96338L12 12.0134L20.73 6.96338" stroke="#6AC75A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22.0834V12.0034" stroke="#6AC75A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </label>
                            <div>
                                <p className='subInnerCont'>Strategy & Business</p>
                                <p className='subInnerContent'>We design business models and growth strategies to be effective and competitive</p>
                            </div>
                        </div>
                        <div className={`${active === 3 ? 'activeBoxWrapper' : 'outerBoxWrapper'}`} onClick={() => setActive(3)}>
                            <label className='outerwrapper'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><g clipPath="url(#clip0_147_922)"><path d="M12 15.0034C15.866 15.0034 19 11.8694 19 8.00342C19 4.13742 15.866 1.00342 12 1.00342C8.13401 1.00342 5 4.13742 5 8.00342C5 11.8694 8.13401 15.0034 12 15.0034Z" stroke="#FF6D43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.21 13.8933L7 23.0033L12 20.0033L17 23.0033L15.79 13.8833" stroke="#FF6D43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_147_922"><rect width="24" height="24" fill="white" transform="translate(0 0.00341797)"></rect></clipPath></defs></svg>
                            </label>
                            <div>
                                <p className='subInnerCont'>Strategy & Business</p>
                                <p className='subInnerContent'>We design business models and growth strategies to be effective and competitive</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            {
                                active === 1 && <label>
                                    <img src={graphlogo1} alt="graphlogo1" className='w-100' />
                                </label>
                            }
                            {
                                active === 2 && <label>
                                    <img src={graphlogo2} alt="graphlogo2" className='w-100' />
                                </label>
                            }

                            {
                                active === 3 && <label>
                                    <img src={graphlogo3} alt="graphlogo3" className='w-100' />
                                </label>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardTechnology