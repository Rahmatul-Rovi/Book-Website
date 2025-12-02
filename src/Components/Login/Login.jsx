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
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="p-8 bg-white shadow-xl rounded-xl w-full max-w-md">
                <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
                    Login to Book-Website
                </h2>
                <form onSubmit={handleLoginSubmit} className="space-y-6">
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
                        Login
                    </button>
                </form>
                
                {/* Footer Link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    New here? 
                    <a href="/register" className="text-blue-600 hover:text-blue-800 font-medium hover:underline ml-1">
                        Create an account
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;