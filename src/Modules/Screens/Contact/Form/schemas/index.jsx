import { string, object,} from 'yup';

export const signUpSchema = object({
    Fullname: string().min(3, 'Name is Too Short').max(20, 'Name is Too Long').required('Please Enter Your Name').matches(/^[a-zA-Z]+ [a-zA-Z]+$/),
    Email: string().email('Invalid Email').required('Please Enter Your Email'),
    Number: string().min(10,'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits').required('Please Enter Your Mobile Number').matches(/^[6-9]{1}[0-9]{9}/, 'Invalid Number'),
})