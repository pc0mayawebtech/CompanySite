import './Subscribe.css'

const Subscribe = () => {
    return (
        <section className='Subsribe mb-5'>
            <div className="container">
                <div className='subsribeInnerWrapper'>
                    <h1 className='innerHead mb-4'>Subscribe to Our Newsletter</h1>
                    <p className='innerCont'>Receive the latest technology & business news in your inbox. Select the newsletters you’d like to receive.</p>
                    <div className='inputBox'>
                        <input type="text" placeholder='Your email address' className='emailInput' />
                        <button type='submit' className='signup'>Sign up</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe