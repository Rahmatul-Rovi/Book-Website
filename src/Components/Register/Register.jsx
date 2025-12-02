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
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="p-8 bg-white shadow-xl rounded-xl w-full max-w-md">
                <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
                    Register for Book-Website
                </h2>
                <form onSubmit={handleRegisterSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" 
                            required 
                        />
                    </div>
                    
                    {/* Email Input */}
                    <div>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" 
                            required 
                        />
                    </div>
                    
                    {/* Password Input */}
                    <div>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150" 
                            required 
                        />
                    </div>
                    
                    {/* Submit Button (Primary Color - Blue) */}
                    <button 
                        type="submit" 
                        className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200 shadow-lg"
                    >
                        Register
                    </button>
                </form>
                
                {/* Footer Link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account? 
                    <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium hover:underline ml-1">
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;