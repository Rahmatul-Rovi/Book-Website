// App.jsx বা Router.jsx

import { Routes } from "react-router"

 // নতুন কম্পোনেন্ট ইমপোর্ট করা

const Router = () => {
    return (
        <Router>
                <Routes>
                 <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                
                {/* 🔒 সুরক্ষিত রুট (Protected Route) */}
                <Route 
                    path="/book-details/:id" 
                    element={
                        <PrivateRoute>
                            <BookDetails />
                        </PrivateRoute>
                    } 
                />
            </Routes>
        </Router>
           
               
        </Router>
    );
};