import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catbook from './Catbook';

const SingleCatBook = () => {
    const categoryBooks = useLoaderData();
    // console.log(categoryBooks);
    
    return (
        <div>
            <h2 className='text-5xl font-bold uppercase text-secondary mt-24 mb-10 text-left ml-5 lg:ml-24'>All category Book</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:mx-24 my-10'>
                {
                    categoryBooks.map(book => <Catbook key={book._id} book={book}></Catbook>)
                }
            </div>
        </div>
        
    );
};

export default SingleCatBook;