import React from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        
       
        console.log("Login Successful! Redirecting to Home."); 
        
        navigate('/'); 
    };
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Login to Book-Website</h2>
                <form onSubmit={handleLoginSubmit}>
                    <input type="email" placeholder="Email" className="input input-bordered w-full mb-4 p-3 border rounded" required />
                    <input type="password" placeholder="Password" className="input input-bordered w-full mb-6 p-3 border rounded" required />
                    <button type="submit" className="btn btn-primary w-full p-3 font-bold">Login</button>
                </form>
                <p className="text-center mt-4">
                    New here? <a href="/register" className="text-blue-500 hover:underline">Create an account</a>
                </p>
            </div>
        </div>
    );
};

export default Login;