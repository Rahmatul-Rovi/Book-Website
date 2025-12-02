import React from 'react';
import { useNavigate } from 'react-router';

const Register = () => {
    const navigate = useNavigate();
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        
        console.log("Registration Successful! Redirecting to Home."); 
        
        navigate('/'); 
    };
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Register for Book-Website</h2>
                <form onSubmit={handleRegisterSubmit}>
                    <input type="text" placeholder="Name" className="input input-bordered w-full mb-4 p-3 border rounded" required />
                    <input type="email" placeholder="Email" className="input input-bordered w-full mb-4 p-3 border rounded" required />
                    <input type="password" placeholder="Password" className="input input-bordered w-full mb-6 p-3 border rounded" required />
                    <button type="submit" className="btn btn-secondary w-full p-3 font-bold">Register</button>
                </form>
                <p className="text-center mt-4">
                    Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;