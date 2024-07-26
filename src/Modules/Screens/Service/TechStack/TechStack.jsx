import './TechStack.css';

const TechStack = ({ head1, head2, img1, img2, img3, img4, img5, img6, img7, lang1, lang2, lang3, lang4, lang5, lang6, lang7, background }) => {
    return (
        <>
            <section className={background}>
                <div className="techStack">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-5">
                                <h2 className='techDomain'>{head1} <br /> {head2}</h2>
                                <p className='domainInfo'>As a final step of design discovery, we will create a series of user personas to gain an understanding of the different types of potential users of the application, what motivates them, and what goals they would like to achieve when using the app</p>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6 text-center">
                                <div className='row mb-5'>
                                    <div className="col-lg-3">
                                        <figure>
                                            <img src={img1} alt="reactlogo" />
                                            <p className='iconlang'>{lang1}</p>
                                        </figure>
                                    </div>
                                    <div className="col-lg-3">
                                        <figure>
                                            <img src={img2} alt="reactlogo" />
                                            <p className='iconlang'>{lang2}</p>
                                        </figure>
                                    </div>
                                    <div className="col-lg-3">
                                        <figure>
                                            <img src={img3} alt="reactlogo" />
                                            <p className='iconlang'>{lang3}</p>
                                        </figure>
                                    </div>
                                    <div className="col-lg-3">
                                        <figure>
                                            <img src={img4} alt="reactlogo" />
                                            <p className='iconlang'>{lang4}</p>
                                        </figure>
                                    </div>
                                </div>
                                <div className='row mb-5'>
                                    {
                                        img5 &&
                                        <div className="col-lg-3">
                                            <figure>
                                                <img src={img5} alt="reactlogo" />
                                                <p className='iconlang'>{lang5}</p>
                                            </figure>
                                        </div>
                                    }

                                    {
                                        img6 && <div className="col-lg-3">
                                            <figure>
                                                <img src={img6} alt="reactlogo" />
                                                <p className='iconlang'>{lang6}</p>
                                            </figure>
                                        </div>
                                    }

                                    {
                                        img7 && <div className="col-lg-3">
                                            <figure>
                                                <img src={img7} alt="reactlogo" />
                                                <p className='iconlang'>{lang7}</p>
                                            </figure>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default TechStack;