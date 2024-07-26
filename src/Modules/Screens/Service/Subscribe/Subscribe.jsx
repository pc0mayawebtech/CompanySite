import { useState } from 'react'
import './Subscribe.css'
import { db } from '../../../../firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const dbref = collection(db, 'MayaSite');
    const notifySuccess = () => {
        toast.success("Will get back to you", {
            position: "top-right"
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        let flag = true;
        if (email.trim() === "") {
            newErrors[email] = "email is not blank";
            flag = false;
        }
        else if (!email.includes('@')) {
            newErrors[email] = "email includes @";
            flag = false;
        }

        setErrors(newErrors);

        if (flag) {
            addDoc(dbref, { Email: email });
            notifySuccess();
            setEmail("");
            return flag;
        }
    }
    return (
        <section className='Subsribe mb-5'>
            <div className="container">
                <div className='subsribeInnerWrapper'>
                    <h1 className='innerHead mb-4'>Subscribe to Our Newsletter</h1>
                    <p className='innerCont'>Receive the latest technology & business news in your inbox. Select the newsletters you’d like to receive.</p>
                    <div className='inputBox'>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email address' className='emailInput' />
                        <button type='submit' className='signup' onClick={handleSubmit}>Sign up</button>
                    </div>
                    <span style={{ textAlign: "center", display: "block" }}>{errors[email]}</span>
                </div>
                <ToastContainer />
            </div>
        </section>
    )
}

export default Subscribe