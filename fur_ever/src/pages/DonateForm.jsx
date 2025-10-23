// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './DonateForm.css';

// const DonateForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     amount: ''
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Create donation record
//     const donationData = {
//       donorName: formData.name,
//       donorEmail: formData.email,
//       amount: parseFloat(formData.amount),
//       donationDate: new Date().toISOString(),
//       status: 'completed'
//     };

//     // POST to JSON Server
//     fetch('http://localhost:3001/donations', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(donationData),
//     })
//     .then(response => response.json())
//     .then(data => {
//       // Navigate to success page
//       navigate('/success', { 
//         state: { 
//           message: `Thank you for your $${formData.amount} donation!`,
//           isDonation: true
//         }
//       });
//     })
//     .catch(error => {
//       console.error('Error recording donation:', error);
//     });
//   };

//   return (
//     <div className="donate-page">
//       <div className="donate-container">
//         <h1>Support Fur_Ever 🐾</h1>
//         <p className="donate-subtitle">Your donation helps save animal lives</p>
        
//         <form onSubmit={handleSubmit} className="donation-form">
//           <h2>Your Information</h2>
          
//           <div className="form-group">
//             <label>Full Name *</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Enter your full name"
//             />
//           </div>

//           <div className="form-group">
//             <label>Email *</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email"
//             />
//           </div>

//           <div className="form-group">
//             <label>Donation Amount ($) *</label>
//             <input
//               type="number"
//               name="amount"
//               value={formData.amount}
//               onChange={handleChange}
//               required
//               placeholder="Enter amount"
//               min="1"
//             />
//           </div>

//           <button type="submit" className="submit-btn">
//             Make Donation
//           </button>
//         </form>

//         <Link to="/" className="back-link">
//           ← Back to Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default DonateForm;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './DonateForm.css';

const DonateForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create donation record
    const donationData = {
      donorName: formData.name,
      donorEmail: formData.email,
      amount: parseFloat(formData.amount),
      donationDate: new Date().toISOString(),
      status: 'completed',
      currency: 'Ksh'
    };

    // POST to JSON Server
    fetch('http://localhost:3001/donations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donationData),
    })
    .then(response => response.json())
    .then(data => {
      // Navigate to success page
      navigate('/success', { 
        state: { 
          message: `Thank you for your Ksh ${formData.amount} donation!`,
          isDonation: true
        }
      });
    })
    .catch(error => {
      console.error('Error recording donation:', error);
    });
  };

  return (
    <div className="donate-page">
      <div className="donate-container">
        <h1>Support Fur_Ever 🐾</h1>
        <p className="donate-subtitle">Your donation helps save animal lives</p>
        
        <form onSubmit={handleSubmit} className="donation-form">
          <h2>Your Information</h2>
          
          <div className="form-group">
            <label>Full Name </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Email </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Donation Amount (Ksh) </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              placeholder="Enter amount in Ksh"
              min="1"
            />
          </div>

          <button type="submit" className="submit-btn">
            Make Donation
          </button>
        </form>

        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default DonateForm;