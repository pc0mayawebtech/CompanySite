import './Disclaimer.css';
import { useEffect } from 'react';

const Disclaimer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <section className='Disclaimer'>
                <div className='disclaimerBanner'>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className='disclaimerHead'>Disclaimer</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className='heroWrpper'>
                <div className="container">
                    <div className='firstBox mb-3'>
                        <h2 className='headWrapperBox'>Disclaimer</h2>
                        <p className='contWrapperBox'>Maya Web Tech herein after referred as the Company, is a delivery oriented company and believes in good governance, commitment and best delivery of its contracts, however, towards a transparent mechanism of cancellation and allowing refunds the present Cancellation and refund policy is formulated as follows:</p>
                    </div>
                    <div className='secondbox mb-5'>
                        <p className='innerWrapperbox'>(1) Any Client may on the following grounds call in for cancellation for its contract and seek refund:</p>
                        <h2 className='disWrapperBox'>1.1 Non Execution:</h2>
                        <p className='innerWrapperbox'>If the client has provided all relevant details of the campaign and key words as required for running the campaign and also paid the complete consideration or as called in by the company, and the company is not able to initiate the ad campaign within a period of 90 days.</p>
                        <h2 className='disWrapperBox'>1.2 Proved Wrong and misleading commitments</h2>
                        <p className='innerWrapperbox'>If the Client proves to the satisfaction of the Company that the sales representative of the Company had assured him some special position over any search engine or any specific results or had represented deceptively, and the said promise is not fulfilled within the given time period. And the client is mislead/deceived by such assurances and representations.</p>
                        <p className='innerWrapperbox'>In both such eventualities the client shall provide a 7 days clear written notice of its intent to cancel the contract and if the company still fails to perform its obligations then the contract shall be deemed cancelled and the company shall be liable to refund the consideration or advance money so received by the client within 7 clear working days.</p>
                        <p className='innerWrapperbox'>(2) Also the company shall be very much entitled to cancel the contract if the Client, upon an agreement with the company, fails to provide the requisite content, key words and other materials required for promotion within a reasonable time period subject to a maximum of 2 months once the same are called in by the company.
                            In such an event the company shall give a 7 days clear notice to the Client stating its intent to cancel the contract and if the Client still does not respond or adhere to the requirement as called by the company then the Contract shall be deemed to be cancelled and the amount received shall be forfeited. Also the company shall have the right to recover the extra expenses incurred or services provided in doing any jobs as per the contract in its readiness over and above the advance amount.
                        </p>
                        <p className='innerWrapperbox'>(3) The company, however, reserves its right to cancel the contract at any time by giving a 7 days clear notice of its intent to terminate the contract and the company in that case shall be obliged to refund the amount of consideration received by reducing the same in proportion to the work performed or the expenses incurred regarding the contract during the subsistence of the contract.</p>
                        <p className='innerWrapperbox'>(4) However the company shall neither be required to give any special reasons for such termination nor shall be required to pay any interest or damages, whether penal or otherwise.</p>
                        <p className='innerWrapperbox'>(5) The Company shall in no case be obliged to refund the amounts so received to any Client entity in case the performance of the obligations under the contract have become impossible for some supervening event not expected to happen in general course of nature. Such an impossibility includes change in law, failure of search engine/s, dismissal of internet connections for no fault of the company, the company or the client becoming insolvent, some order or judgment of any Court of law restraining the Company to perform the contract, complete strike/lockouts, war, external aggression, natural calamity, acts of god, or any causes of like nature out of control of the company.</p>
                        <p className='innerWrapperbox'>(6) It is expressly stated and agreed between the parties that the refund shall in no case be deemed to be admission of deficiency and shall in no case be an incident for any liability because of non performance or for damages and losses suffered by the client and the client shall receive the refund amount in full satisfaction of all its claims against the Company and shall be estopped from initiating any civil or criminal action against the company in any Court of law or before any authority any where in the World lest the Courts of Law or other Authorities in India.</p>
                        <p className='innerWrapperbox'>(7) That Notice so stated above shall be deemed to be served upon the Company if it is delivered at the Corporate office of the Company i.e. A-44, Sector -2, Noida-201301 Uttar Pradesh, or if the same is sent through email to - info@mayawebtech.com And notice shall be deemed to have been sent to the Client if the same is delivered to the address of the client as disclosed to the Company or is sent to the email id so disclosed to the Company.</p>
                        <p className='innerWrapperbox'>(8) The present policy shall, except as specially provided herein shall be read in accordance and consonance with the General Terms of Use of the Company.</p>
                        <p className='innerWrapperbox'>(9) Any disputes regarding the cancellation and refund of contracts shall be resolved as per the present policy and the company shall not be liable to refund the amounts received otherwise then in accordance of the present policy.</p>
                        <p className='innerWrapperbox'>(10) All disputes regarding the cancellation and refunds shall be subject to the Arbitration as per the Arbitration and Conciliation Act, 1996 and the place of arbitration of disputes shall be Faridabad.</p>
                        <p className='innerWrapperbox'>(11) That the present policy are a public document accessible to any person/entity dealing with the company as Client and therefore, every Client dealing with the Company shall be deemed to have known and understood the present Cancellation and Refund policy.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Disclaimer;