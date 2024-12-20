// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'


// const EmployeeDetail = () => {
//     const [employee, setEmployee] = useState([])
//     const {id} = useParams()
//     const navigate = useNavigate()
//     useEffect(() => {
//         axios.get('https://backend-emp-mangement.onrender.com/employee/detail/'+id)
//         .then(result => {
//             setEmployee(result.data[0])
//         })
//         .catch(err => console.log(err))
//     }, [])
//     const handleLogout = () => {
//         axios.get('https://backend-emp-mangement.onrender.com/employee/logout')
//         .then(result => {
//           if(result.data.Status) {
//             localStorage.removeItem("valid")
//             navigate('/')
//           }
//         }).catch(err => console.log(err))
//       }
//   return (
//     <div>
//         <div className="p-2 d-flex justify-content-center shadow">
//             <h4>Emoployee Management System</h4>
//         </div>
//         <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
//             <img src={`https://backend-emp-mangement.onrender.com/Images/`+employee.image} className='emp_det_image'/>
//             <div className='d-flex align-items-center flex-column mt-5'>
//                 <h3>Name: {employee.name}</h3>
//                 <h3>Email: {employee.email}</h3>
//                 <h3>Salary: ${employee.salary}</h3>
//             </div>
//             <div>
//                 <button className='btn btn-primary me-2'>Edit</button>
//                 <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default EmployeeDetail




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeDetail = () => {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://backend-emp-mangement.onrender.com/employee/detail/${id}`)
            .then(result => {
                setEmployee(result.data[0]);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleLogout = () => {
        axios.get('https://backend-emp-mangement.onrender.com/employee/logout')
            .then(result => {
                if (result.data.Status) {
                    localStorage.removeItem("valid");
                    navigate('/');
                }
            }).catch(err => console.log(err));
    };

    return (
        <div className="container">
            <div className="p-2 d-flex justify-content-center shadow">
                <h4>Employee Management System</h4>
            </div>
            <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
                <img 
                    src={`https://backend-emp-mangement.onrender.com/Images/${employee.image}`} 
                    alt="Employee" 
                    className='emp_det_image img-fluid' 
                />
                <div className='d-flex align-items-center flex-column mt-5 text-center'>
                    <h3>Name: {employee.name}</h3>
                    <h3>Email: {employee.email}</h3>
                    <h3>Salary: ${employee.salary}</h3>
                </div>
                <div className="mt-3">
                    
                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </div>
            </div>

            <style jsx>{`
                .emp_det_image {
                    max-width: 100%;
                    height: auto;
                    border-radius: 10px; /* Optional: for rounded corners */
                }

                @media (max-width: 576px) {
                    h3 {
                        font-size: 1.5rem; /* Adjust font size for smaller screens */
                    }
                }

                @media (min-width: 576px) {
                    h3 {
                        font-size: 1.75rem; /* Adjust font size for larger screens */
                    }
                }

                @media (min-width: 768px) {
                    h3 {
                        font-size: 2rem; /* Further adjust font size for larger screens */
                    }
                }
            `}</style>
        </div>
    );
};

export default EmployeeDetail;