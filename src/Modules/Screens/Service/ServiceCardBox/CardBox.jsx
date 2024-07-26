import './CardBox.css';

const CardBox = () => {
    return (
        <>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                <section className="we-offer-area text-center bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="site-heading text-center">
                                    <h2>What we <span>Offer</span></h2>
                                    <h4>Get the benefit of website and mobile app</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row our-offer-items less-carousel">
                            <div className="col-md-4 col-sm-6 equal-height">
                                <div className="item">
                                    <i className="fas fa-pen-fancy"></i>
                                    <h4>Quality</h4>
                                    <p>
                                        We do make sure to offer quality in every project.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 equal-height">
                                <div className="item">
                                    <i className="fas fa-dharmachakra"></i>
                                    <h4>Assuarnce</h4>
                                    <p>
                                        We do make sure to assist our customers in every project.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 equal-height">
                                <div className="item">
                                    <i className="fas fa-tasks"></i>
                                    <h4>Project Management</h4>
                                    <p>
                                        Our team manages each project with dedicction and hard work.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 equal-height">
                                <div className="item">
                                    <i className="fas fa-tachometer-alt"></i>
                                    <h4>Planning</h4>
                                    <p>
                                        The planning for a project is done with our team of experts.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 equal-height">
                                <div className="item">
                                    <i className="fas fa-recycle"></i>
                                    <h4>Updates</h4>
                                    <p>
                                        We also make customers upadted on each steps of the project.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 equal-height">
                                <div className="item">
                                    <i className="fas fa-headset"></i>
                                    <h4>24/7 Support</h4>
                                    <p>
                                        Our team provides 24/7 support to the customers to resolve any issue.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CardBox;