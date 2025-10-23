import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './AdoptForm.css';

const AdoptForm = () => {
  const { animalId } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Fetch animal details
  useEffect(() => {
    fetch(`http://localhost:3001/animals/${animalId}`)
      .then(response => response.json())
      .then(data => {
        setAnimal(data);
      });
  }, [animalId]);

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
    
    // Create simple adoption application
    const adoptionData = {
      animalId: parseInt(animalId),
      animalName: animal.name,
      adopterName: formData.name,
      adopterEmail: formData.email,
      adopterPhone: formData.phone,
      applicationDate: new Date().toISOString(),
      status: 'pending'
    };

    // POST to JSON Server
    fetch('http://localhost:3001/adoptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adoptionData),
    })
    .then(response => response.json())
    .then(data => {
      // Navigate to success page
      navigate('/success', { 
        state: { 
          message: `Your adoption application for ${animal.name} has been submitted!`,
          animalName: animal.name
        }
      });
    })
    .catch(error => {
      console.error('Error submitting adoption:', error);
    });
  };

  if (!animal) {
    return <div className="loading">Loading animal information...</div>;
  }

  return (
    <div className="adopt-form-page">
      <div className="form-container">
        <h1>Adopt {animal.name} 🐾</h1>
        
        {/* Animal Info */}
        <div className="animal-info-card">
          <h2>You're applying to adopt:</h2>
          <p><strong>Name:</strong> {animal.name}</p>
          <p><strong>Type:</strong> {animal.type}</p>
          <p><strong>Breed:</strong> {animal.breed}</p>
        </div>

        {/* Simple Adoption Form */}
        <form onSubmit={handleSubmit} className="adoption-form">
          <h2>Your Information</h2>
          
          <div className="form-group">
            <label>Full Name *</label>
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
            <label>Email *</label>
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
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Adoption Application
          </button>
        </form>

        <Link to="/animals" className="back-link">
          ← Back to Animals
        </Link>
      </div>
    </div>
  );
};

export default AdoptForm;