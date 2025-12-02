import React from 'react';
import bookimage from '../../assets/books.jpg'
import Books from '../../Pages/Books/Books';
import Book from '../../Pages/Book/Book';

const Banner = () => {
  const handleViewListClick = () => {
      
        const targetSection = document.getElementById('books-section'); 
        
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    };
    return (
        <div className="hero bg-blue-100 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <img
  src={bookimage}
  // ✅ 3D Look Classes Added: rotate, translate, and a strong shadow
  className="max-w-sm rounded-lg shadow-2xl transition-all duration-500 hover:rotate-1 hover:translate-y-[-4px] hover:shadow-cyan-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
/>
    <div>
      <h1 className="text-5xl font-bold">Explore the World of Books</h1>
      <p className="py-6">
      Step beyond the conventional reading experience and immerse yourself in the vibrant, unfolding tapestry of the literary world. We invite you to dive deep into our curated collection, featuring meticulous analyses of the latest and most anticipated book releases across every compelling genre.
      </p>
      <button  className="btn btn-primary" onClick={handleViewListClick}>View Book list</button>
    </div>
  </div>
</div>
    );
};

export default Banner;