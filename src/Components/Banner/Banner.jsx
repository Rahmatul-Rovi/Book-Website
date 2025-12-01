import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookimage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Literary News</h1>
      <p className="py-6">
       Dive into the latest releases, author interviews, and exclusive features from the world of literature. Explore the stories everyone is talking about.
      </p>
      <button className="btn btn-primary">View the list</button>
    </div>
  </div>
</div>
    );
};

export default Banner;