import './RefundPolicy.css';
import { useEffect } from 'react';
const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <section className='refundPolicy'>
                <div className='refundBanner'>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className='refundHead'>Refund Policy</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className='heroWrpper'>
                <div className="container">
                    <div className='firstBox mb-5'>
                        <h2 className='headWrapperBox'>REFUND POLICY</h2>
                        <p className='contWrapperBox'>if service not provided within 7 Working days, timing mentions in email, Payment will be refund on your Account,</p>
                        <p className='contWrapperBox'>which contract specifically with the issuer (Maya Web Tech is the issuer in this case) to accept the payment instrument. These instruments do not permit cash withdrawal or redemption by the customer.</p>
                    </div>
                    <div className='secondbox mb-5'>
                        <p className='innerWrapperbox'>Change of us: In case the bus operator changes the type of bus due to some reason, MayaWebTech will refund the differential amount to the customer upon being intimated by the customers in 24 hours of the journey.</p>
                        <p className='innerWrapperbox'>Cancellation Policy: Read the ticket(service charge will Extra Applicable) cancellation policy carefully. Tickets will be cancelled as per the cancellation policy mentioned with the ticket . The transaction charges will not be refunded in the event of ticket cancellation</p>
                        <p className='innerWrapperbox'>Refund policy mentioned on the ticket is indicative. The actual cancellation charges are determined by bus operators and bus providers at the actual time of cancellation. MayaWebTech has no role in governing the cancellation charges.</p>
                        <p className='innerWrapperbox'>recharge Solution Any time Any Where.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RefundPolicy;