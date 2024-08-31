import React, { useState } from "react";
import './FormInput.css'; // Import the CSS file

const FormInput = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="form-container">
            <h2>Job Application Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your full name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />
                
                <label htmlFor="email">Email Address</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email address" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                
                <label htmlFor="phone">Phone Number</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="Enter your phone number" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                />
                
                <label htmlFor="coverLetter">Cover Letter</label>
                <textarea 
                    id="coverLetter" 
                    name="coverLetter" 
                    placeholder="Write your cover letter here" 
                    value={formData.coverLetter} 
                    onChange={handleChange} 
                    rows="4" 
                    required 
                />
                
                <label htmlFor="resume">Upload Resume</label>
                <input 
                    type="file" 
                    id="resume" 
                    name="resume" 
                    onChange={handleChange} 
                    accept=".pdf,.doc,.docx" 
                    required 
                />
                
                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
}

export default FormInput;
