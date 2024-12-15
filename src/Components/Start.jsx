// import axios from "axios";
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// useEffect

// const Start = () => {
//     const navigate = useNavigate()
//   axios.defaults.withCredentials = true;
//   useEffect(() => {
//     axios.get('https://backend-emp-mangement.onrender.com/verify')
//     .then(result => {
//       if(result.data.Status) {
//         if(result.data.role === "admin") {
//           navigate('/dashboard')
//         } else {
//           navigate('/employee_detail/'+result.data.id)
//         }
//       }
//     }).catch(err =>console.log(err))
//   }, [])

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
//       <div className="p-3 rounded w-25 border loginForm">
//         <h2 className="text-center">Login As</h2>
//         <div className="d-flex justify-content-between mt-5 mb-2">
//           <button type="button" className="btn btn-primary" onClick={() => {navigate('/employee_login')}}>
//             Employee
//           </button>
//           <button type="button" className="btn btn-success" onClick={() => {navigate('/adminlogin')}}>
//             Admin
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Start;



// import axios from "axios";
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Start = () => {
//   const navigate = useNavigate();
//   axios.defaults.withCredentials = true;

//   useEffect(() => {
//     axios.get('https://backend-emp-mangement.onrender.com/verify')
//       .then(result => {
//         if (result.data.Status) {
//           if (result.data.role === "admin") {
//             navigate('/dashboard');
//           } else {
//             navigate('/employee_detail/' + result.data.id);
//           }
//         }
//       }).catch(err => console.log(err));
//   }, [navigate]);

//   return (
//     <div style={styles.loginPage}>
//       <div style={styles.loginForm}>
//         <h2 style={styles.header}>Login As</h2>
//         <div style={styles.buttonContainer}>
//           <button type="button" style={{ ...styles.button, backgroundColor: '#007bff', color: 'white' }} onClick={() => { navigate('/employee_login') }}>
//             Employee
//           </button>
//           <button type="button" style={{ ...styles.button, backgroundColor: '#28a745', color: 'white' }} onClick={() => { navigate('/adminlogin') }}>
//             Admin
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Inline styles
// const styles = {
//   loginPage: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     padding: '20px',
//     backgroundColor: '#f8f9fa', // Light background for the login page
//     boxSizing: 'border-box', // Ensure padding is included in width/height
//   },
//   loginForm: {
//     background: 'white',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//     width: '100%',
//     maxWidth: '400px', // Limit max width for larger screens
//     boxSizing: 'border-box', // Ensure padding is included in width
//   },
//   header: {
//     textAlign: 'center',
//   },
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'space-between', // Space between buttons
//     marginTop: '20px',
//     flexWrap: 'wrap', // Allow wrapping on smaller screens
//   },
//   button: {
//     flex: 1, // Make buttons take equal space
//     margin: '0 5px', // Add some space between buttons
//     padding: '10px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     minWidth: '120px', // Minimum width for buttons
//   },
// };

// export default Start;





import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('https://backend-emp-mangement.onrender.com/verify')
            .then(result => {
                if (result.data.Status) {
                    if (result.data.role === "admin") {
                        navigate('/dashboard');
                    } else {
                        navigate('/employee_detail/' + result.data.id);
                    }
                }
            })
            .catch(err => console.log(err));
    }, [navigate]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
            <div className="p-3 rounded w-100 w-md-50 w-lg-25 border loginForm">
                <h2 className="text-center">Login As</h2>
                <div className="d-flex justify-content-between mt-5 mb-2 flex-column flex-md-row">
                    <button type="button" className="btn btn-primary mb-2 mb-md-0" onClick={() => { navigate('/employee_login') }}>
                        Employee
                    </button>
                    <button type="button" className="btn btn-success" onClick={() => { navigate('/adminlogin') }}>
                        Admin
                    </button>
                </div>
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

export default Start;
