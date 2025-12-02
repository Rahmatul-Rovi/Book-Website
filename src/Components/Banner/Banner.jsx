import React from 'react';
import bookimage from '../../assets/books.jpg'
import Books from '../../Pages/Books/Books';
import Book from '../../Pages/Book/Book';

const Banner = () => {
  const handleViewListClick = () => {
        // ধাপ ১-এ সেট করা ID ('books-section') দিয়ে এলিমেন্টটিকে খুঁজছি
        const targetSection = document.getElementById('books-section'); 
        
        if (targetSection) {
            // targetSection খুঁজে পেলে, সেখানে স্ক্রল করার নির্দেশ দিচ্ছি
            targetSection.scrollIntoView({ 
                behavior: 'smooth' // 'smooth' ব্যবহার করলে পাতাটি ধীরে ধীরে যাবে, যা দেখতে ভালো লাগবে।
            });
        }
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookimage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Explore the World of Books</h1>
      <p className="py-6">
      Step beyond the conventional reading experience and immerse yourself in the vibrant, unfolding tapestry of the literary world. We invite you to dive deep into our curated collection, featuring meticulous analyses of the latest and most anticipated book releases across every compelling genre.
      </p>
      <button  className="btn btn-primary" onClick={handleViewListClick}>View the list</button>
    </div>
  </div>
</div>
    );
};

export default Banner;