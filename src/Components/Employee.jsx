// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Employee = () => {
//   const [employee, setEmployee] = useState([]);
//   const navigate = useNavigate()

//   useEffect(() => {
//     axios
//       .get("https://backend-emp-mangement.onrender.com/auth/employee")
//       .then((result) => {
//         if (result.data.Status) {
//           setEmployee(result.data.Result);
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   const handleDelete = (id) => {
//     axios.delete('https://backend-emp-mangement.onrender.com/auth/delete_employee/'+id)
//     .then(result => {
//         if(result.data.Status) {
//             window.location.reload()
//         } else {
//             alert(result.data.Error)
//         }
//     })
//   } 
//   return (
//     <div className="px-5 mt-3">
//       <div className="d-flex justify-content-center">
//         <h3>Employee List</h3>
//       </div>
//       <Link to="/dashboard/add_employee" className="btn btn-success">
//         Add Employee
//       </Link>
//       <div className="mt-3">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Image</th>
//               <th>Email</th>
//               <th>Address</th>
//               <th>Salary</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employee.map((e) => (
//               <tr>
//                 <td>{e.name}</td>
//                 <td>
//                   <img
//                     src={`https://backend-emp-mangement.onrender.com/Images/` + e.image}
//                     className="employee_image"
//                   />
//                 </td>
//                 <td>{e.email}</td>
//                 <td>{e.address}</td>
//                 <td>{e.salary}</td>
//                 <td>
//                   <Link
//                     to={`/dashboard/edit_employee/` + e.id}
//                     className="btn btn-info btn-sm me-2"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     className="btn btn-warning btn-sm"
//                     onClick={() => handleDelete(e.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Employee;




// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Employee = () => {
//   const [employee, setEmployee] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("https://backend-emp-mangement.onrender.com/auth/employee")
//       .then((result) => {
//         if (result.data.Status) {
//           setEmployee(result.data.Result);
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete('https://backend-emp-mangement.onrender.com/auth/delete_employee/' + id)
//       .then(result => {
//         if (result.data.Status) {
//           window.location.reload();
//         } else {
//           alert(result.data.Error);
//         }
//       });
//   };

//   return (
//     <div className="container mt-3">
//       <style>
//         {`
//           .container {
//             padding: 0 15px;
//           }

//           .table-responsive {
//             overflow-x: auto;
//           }

//           .employee_image {
//             width: 50px; /* Adjust the size as needed */
//             height: auto;
//           }

//           @media (max-width: 768px) {
//             .table thead {
//               display: none; /* Hide the header on small screens */
//             }
            
//             .table, .table tbody, .table tr, .table td {
//               display: block; /* Make each row a block */
//               width: 100%; /* Full width */
//             }

//             .table tr {
//               margin-bottom: 15px; /* Space between rows */
//             }

//             .table td {
//               text-align: right; /* Align text to the right */
//               position: relative; /* Position for pseudo-element */
//               padding-left: 50%; /* Space for label */
//             }

//             .table td::before {
//               content: attr(data-label); /* Use data-label for the header */
//               position: absolute;
//               left: 0;
//               width: 50%;
//               padding-left: 10px; /* Space for label */
//               text-align: left; /* Align text to the left */
//               font-weight: bold; /* Bold label */
//             }
//           }
//         `}
//       </style>
//       <div className="text-center">
//         <h3>Employee List</h3>
//       </div>
//       <Link to="/dashboard/add_employee" className="btn btn-success mb-3">
//         Add Employee
//       </Link>
//       <div className="table-responsive">
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Image</th>
//               <th>Email</th>
//               <th>Address</th>
//               <th>Salary</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employee.map((e) => (
//               <tr key={e.id}>
//                 <td data-label="Name">{e.name}</td>
//                 <td data-label="Image">
//                   <img
//                     src={`https://backend-emp-mangement.onrender.com/Images/` + e.image}
//                     className="employee_image"
//                     alt={e.name}
//                   />
//                 </td>
//                 <td data-label="Email">{e.email}</td>
//                 <td data-label="Address">{e.address}</td>
//                 <td data-label="Salary">{e.salary}</td>
//                 <td data-label="Action">
//                   <Link
//                     to={`/dashboard/edit_employee/` + e.id}
//                     className="btn btn-info btn-sm me-2"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     className="btn btn-warning btn-sm"
//                     onClick={() => handleDelete(e.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Employee;




import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://backend-emp-mangement.onrender.com/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('https://backend-emp-mangement.onrender.com/auth/delete_employee/' + id)
      .then(result => {
        if (result.data.Status) {
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      });
  };

  return (
    <div className="container mt-3">
      <style>
        {`
          .container {
            padding: 0 15px;
          }

          .table-responsive {
            overflow-x: auto;
          }

          .employee_image {
            width: 50px; /* Adjust the size as needed */
            height: auto;
          }

          @media (max-width: 768px) {
            .table thead {
              display: none; /* Hide the header on small screens */
            }
            
            .table, .table tbody, .table tr, .table td {
              display: block; /* Make each row a block */
              width: 100%; /* Full width */
            }

            .table tr {
              margin-bottom: 15px; /* Space between rows */
            }

            .table td {
              text-align: right; /* Align text to the right */
              position: relative; /* Position for pseudo-element */
              padding-left: 50%; /* Space for label */
            }

            .table td::before {
              content: attr(data-label); /* Use data-label for the header */
              position: absolute;
              left: 0;
              width: 50%;
              padding-left: 10px; /* Space for label */
              text-align: left; /* Align text to the left */
              font-weight: bold; /* Bold label */
            }
          }
        `}
      </style>
      <div className="text-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success mb-3">
        Add Employee
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e) => (
              <tr key={e.id}>
                <td data-label="Name">{e.name}</td>
                <td data-label="Image">
                  <img
                    src={`https://backend-emp-mangement.onrender.com/Images/` + e.image}
                    className="employee_image"
                    alt={e.name}
                  />
                </td>
                <td data-label="Email">{e.email}</td>
                <td data-label="Address">{e.address}</td>
                <td data-label="Salary">{e.salary}</td>
                <td data-label="Action">
                  <Link
                    to={`/dashboard/edit_employee/` + e.id}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;









