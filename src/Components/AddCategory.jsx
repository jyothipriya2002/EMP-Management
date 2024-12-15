// import axios from 'axios'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const AddCategory = () => {
//     const [category, setCategory] = useState()
//     const navigate = useNavigate()

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         axios.post('https://backend-emp-mangement.onrender.com/auth/add_category', {category})
//         .then(result => {
//             if(result.data.Status) {
//                 navigate('/dashboard/category')
//             } else {
//                 alert(result.data.Error)
//             }
//         })
//         .catch(err => console.log(err))
//     }
//   return (
//     <div className='d-flex justify-content-center align-items-center h-75'>
//         <div className='p-3 rounded w-25 border'>
//             <h2>Add Category</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='mb-3'>
//                     <label htmlFor="category"><strong>Category:</strong></label>
//                     <input type="text" name='category' placeholder='Enter Category'
//                      onChange={(e) => setCategory(e.target.value)} className='form-control rounded-0'/>
//                 </div>
//                 <button className='btn btn-success w-100 rounded-0 mb-2'>Add Category</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default AddCategory




// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AddCategory = () => {
//     const [category, setCategory] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('https://backend-emp-mangement.onrender.com/auth/add_category', { category })
//             .then(result => {
//                 if (result.data.Status) {
//                     navigate('/dashboard/category');
//                 } else {
//                     alert(result.data.Error);
//                 }
//             })
//             .catch(err => console.log(err));
//     };

//     // Inline styles for the component
//     const styles = {
//         container: {
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100vh',
//             padding: '1rem',
//             backgroundColor: '#f8f9fa', // Light background for contrast
//         },
//         formContainer: {
//             backgroundColor: '#fff',
//             padding: '2rem',
//             borderRadius: '8px',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//             width: '100%',
//             maxWidth: '400px',
//             flex: '1', // Allow it to grow on larger screens
//             margin: '0 1rem', // Margin for spacing
//         },
//         input: {
//             width: '100%',
//             padding: '0.5rem',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//             marginBottom: '1rem',
//         },
//         button: {
//             padding: '0.5rem',
//             borderRadius: '4px',
//             backgroundColor: '#28a745',
//             color: '#fff',
//             border: 'none',
//             cursor: 'pointer',
//             width: '100%',
//         },
//         buttonHover: {
//             backgroundColor: '#218838',
//         },
//         // Media queries for responsiveness
//         '@media (max-width: 576px)': {
//             formContainer: {
//                 padding: '1rem', // Less padding on smaller screens
//             },
//             input: {
//                 padding: '0.4rem', // Smaller padding for inputs
//             },
//             button: {
//                 padding: '0.4rem', // Smaller padding for buttons
//             },
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.formContainer}>
//                 <h2>Add Category</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className='mb-3'>
//                         <label htmlFor="category"><strong>Category:</strong></label>
//                         <input
//                             type="text"
//                             name='category'
//                             placeholder='Enter Category'
//                             onChange={(e) => setCategory(e.target.value)}
//                             style={styles.input}
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         style={styles.button}
//                         onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
//                         onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
//                     >
//                         Add Category
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddCategory;





import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://backend-emp-mangement.onrender.com/auth/add_category', { category })
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/category');
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    // Inline styles for the component
    const styles = {
        body: {
            margin: 0,
            height: '100vh',
            overflow: 'hidden', // Prevent scrolling
        },
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%', // Full height of the viewport
            backgroundColor: '#f8f9fa', // Light background for contrast
        },
        formContainer: {
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '400px',
            margin: '1rem', // Margin for spacing
        },
        input: {
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '1rem',
        },
        button: {
            padding: '0.5rem',
            borderRadius: '4px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
        },
        buttonHover: {
            backgroundColor: '#218838',
        },
        // Media queries for responsiveness
        '@media (max-width: 576px)': {
            formContainer: {
                padding: '1rem', // Less padding on smaller screens
            },
            input: {
                padding: '0.4rem', // Smaller padding for inputs
            },
            button: {
                padding: '0.4rem', // Smaller padding for buttons
            },
        },
    };

    // Apply styles to the body
    React.useEffect(() => {
        document.body.style.overflow = styles.body.overflow;
        document.body.style.margin = styles.body.margin;
        document.body.style.height = styles.body.height;
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2>Add Category</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="category"><strong>Category:</strong></label>
                        <input
                            type="text"
                            name='category'
                            placeholder='Enter Category'
                            onChange={(e) => setCategory(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <button
                        type="submit"
                        style={styles.button}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                    >
                        Add Category
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;


