import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image,author, rating, category, tags, yearOfPublishing, publisher} = singleBook || {};
    
    const handleMarkAsRead = id => {

    MySwal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});

       addToStoredDB(id);
    }
    return (
        <div className='w-2/3 mx-auto flex gap-6 p-4 border rounded-lg shadow-md'>
    <div className='flex-shrink-0'>
        <img className='w-48 h-auto rounded-lg' src={image} alt={bookName} />
    </div>

    <div className='flex-grow'>
        <h2 className='text-3xl font-bold mb-2'>{bookName}</h2>
        <p className='text-gray-600'> Book by : {publisher}</p>
        <p className='text-gray-600'>Author : {author}</p>
        
        <div className='my-4'>
            <p>Rating : <span className='font-semibold'>{rating}</span></p>
            <p>Category : <span className='font-semibold'>{category}</span></p>
            <p>Tags : <span className='font-semibold text-blue-600'>{tags}</span></p>
            <p>Year Of Publishing : <span className='font-semibold'>{yearOfPublishing}</span></p>
        </div>

        <div className='mt-4'>
         <div className='mt-4'>
    <button onClick={() =>  handleMarkAsRead(id)} className="btn btn-primary m-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-blue-700 transition duration-300 shadow-xl">
       Mark as Read
    </button>
    
    <button className="btn btn-secondary m-2 bg-gray-200 text-gray-800 border border-gray-400 px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 shadow-sm">
        Add to WishList
    </button>
</div>
        </div>
    </div>
</div>
    );
};

export default BookDetails;