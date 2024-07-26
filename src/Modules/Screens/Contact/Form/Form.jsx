import { useState } from 'react';
import './Form.css';
import { countries } from './country.js';
import { useFormik } from 'formik';
import { signUpSchema } from './schemas/index.jsx';

const Form = () => {
    const [country, setCountry] = useState('');
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const initialValues = {
        Fullname: "",
        Email: "",
        Number: "",
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: () => {
            alert("Form is Submitted");
            resetForm();
        },
    });
    console.log(errors);
    return (
        <>
            <div>
                <form action="./action.php" method='post' className='mt-5 w-75 m-auto' onSubmit={handleSubmit}>
                    <div className='FormInput'>
                        <input type="text" name="Fullname" value={values.Fullname} id="FullName" placeholder='Full Name*' onChange={handleChange} onBlur={handleBlur} />
                        {errors.Fullname && touched.Fullname ? (<p className='formError'>{errors.Fullname}</p>) : null}
                    </div>
                    <div className='FormInput'>
                        <input type="email" name="Email" value={values.Email} id="Email" placeholder='Email' onChange={handleChange} onBlur={handleBlur} />
                        {errors.Email && touched.Email ? (<p className='formError'>{errors.Email}</p>) : null}
                    </div>
                    <div className='FormInput'>
                        <select name="CountryName" id="CountryName" value={country} onChange={handleCountryChange} onBlur={handleBlur}>
                            <option value="Country Name">Select Country</option>
                            {
                                countries.map((country, id) => {
                                    return (
                                        <option key={id} value={country.country}>{country.country}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='FormInput'>
                        <input type="tel" name="Number" value={values.Number} id="Number" maxLength={10} placeholder='Phone Number' onChange={handleChange} onBlur={handleBlur} />
                        {errors.Number && touched.Number ? (<p className='formError'>{errors.Number}</p>) : null}
                    </div>
                    <div className='FormInput'>
                        <textarea name="Message" id="Message" cols="30" rows="3" placeholder='Tell us about your developemnt needs. (Optional)'></textarea>
                    </div>
                    <div className='FormInput'>
                        <button className='Submitbtn' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;