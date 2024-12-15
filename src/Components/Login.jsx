// import React, { useState } from 'react'
// import './style.css'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {

//     const [values, setValues] = useState({
//         email: '',
//         password: ''
//     })
//     const [error, setError] = useState(null)
//     const navigate = useNavigate()
//     axios.defaults.withCredentials = true;
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         axios.post('https://backend-emp-mangement.onrender.com/auth/adminlogin', values)
//         .then(result => {
//             if(result.data.loginStatus) {
//                 localStorage.setItem("valid", true)
//                 navigate('/dashboard')
//             } else {
//                 setError(result.data.Error)
//             }
//         })
//         .catch(err => console.log(err))
//     }

//   return (
//     <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
//         <div className='p-3 rounded w-25 border loginForm'>
//             <div className='text-warning'>
//                 {error && error}
//             </div>
//             <h2>Login Page</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='mb-3'>
//                     <label htmlFor="email"><strong>Email:</strong></label>
//                     <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
//                      onChange={(e) => setValues({...values, email : e.target.value})} className='form-control rounded-0'/>
//                 </div>
//                 <div className='mb-3'> 
//                     <label htmlFor="password"><strong>Password:</strong></label>
//                     <input type="password" name='password' placeholder='Enter Password'
//                      onChange={(e) => setValues({...values, password : e.target.value})} className='form-control rounded-0'/>
//                 </div>
//                 <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
//                 <div className='mb-1'> 
//                     <input type="checkbox" name="tick" id="tick" className='me-2'/>
//                     <label htmlFor="password">You are Agree with terms & conditions</label>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [values, setValues] = useState({
//         email: '',
//         password: ''
//     });
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
//     axios.defaults.withCredentials = true;

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('https://backend-emp-mangement.onrender.com/auth/adminlogin', values)
//             .then(result => {
//                 if (result.data.loginStatus) {
//                     localStorage.setItem("valid", true);
//                     navigate('/dashboard');
//                 } else {
//                     setError(result.data.Error);
//                 }
//             })
//             .catch(err => console.log(err));
//     };

//     const styles = {
//         loginPage: {
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100vh',
//             backgroundImage: 'url(/Images/employeems.jpeg)', // Relative path to the image
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//         },
//         loginForm: {
//             padding: '1rem',
//             borderRadius: '0.5rem',
//             backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
//             width: '90%', // Full width on small screens
//             maxWidth: '400px', // Max width for larger screens
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//         },
//         button: {
//             width: '100%',
//             borderRadius: '0.25rem',
//             marginBottom: '0.5rem',
//         },
//         checkboxLabel: {
//             marginLeft: '0.5rem',
//         },
//     };

//     return (
//         <div style={styles.loginPage}>
//             <div style={styles.loginForm}>
//                 <div className='text-warning'>
//                     {error && error}
//                 </div>
//                 <h2>Login Page</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className='mb-3'>
//                         <label htmlFor="email"><strong>Email:</strong></label>
//                         <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
//                             onChange={(e) => setValues({ ...values, email: e.target.value })} className='form-control rounded-0' />
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="password"><strong>Password:</strong></label>
//                         <input type="password" name='password' placeholder='Enter Password'
//                             onChange={(e) => setValues({ ...values, password: e.target.value })} className='form-control rounded-0' />
//                     </div>
//                     <button type='submit' className='btn btn-success' style={styles.button}>Log in</button>
//                     <div className='mb-1'>
//                         <input type="checkbox" name="tick" id="tick" className='me-2' />
//                         <label htmlFor="tick" style={styles.checkboxLabel}>You agree with terms & conditions</label>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://backend-emp-mangement.onrender.com/auth/adminlogin', values)
            .then(result => {
                if (result.data.loginStatus) {
                    localStorage.setItem("valid", true);
                    navigate('/dashboard');
                } else {
                    setError(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-100 w-md-50 w-lg-25 border loginForm'>
                <div className='text-warning'>
                    {error && error}
                </div>
                <h2>Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
                            onChange={(e) => setValues({ ...values, email: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input type="password" name='password' placeholder='Enter Password'
                            onChange={(e) => setValues({ ...values, password: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
                    <div className='mb-1'>
                        <input type="checkbox" name="tick" id="tick" className='me-2' />
                        <label htmlFor="tick">You are Agree with terms & conditions</label>
                    </div>
                </form>
            </div>

            <style jsx>{`
                .loginPage {
                    background-color: #f8f9fa; /* Example background color */
                }

                .loginForm {
                    max-width: 400px; /* Set a max width for larger screens */
                    width: 100%; /* Full width on smaller screens */
                }

                @media (max-width: 576px) {
                    .loginForm {
                        padding: 20px; /* More padding on small screens */
                    }
                }

                @media (min-width: 576px) {
                    .loginForm {
                        padding: 30px; /* Adjust padding for medium screens */
                    }
                }

                @media (min-width: 768px) {
                    .loginForm {
                        padding: 40px; /* Adjust padding for larger screens */
                    }
                }
            `}</style>
        </div>
    );
};

export default Login;




