import React, { use } from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    // const data = use(bookPromise);
    // console.log(data);
    const {bookName, bookId ,author, image, rating, category, tags, yearOfPublishing, publisher} = singleBook;
    return (
    <Link to={`/bookDetails/${bookId}`}>
           <div className="card bg-base-100 w-full shadow-sm border p-3 shadow p-2 rounded-lg shadow-md transition duration-200 ease-in-out hover:shadow-xl hover:scale-105 ">
  <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
    <img
    className='h-auto max-h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div className='flex justify-center gap-10'>
    {
    tags.map(tag => <button>{tag}</button>)
  }
  </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p> Book by : {publisher}</p>

    <div className='border-t-1 border-dashed'>

    </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <FaRegStarHalfStroke /></div>
    </div>
  </div>
</div>
    </Link>
    );
};

export default Book;