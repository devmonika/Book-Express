import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './BookingModal/Modal';

const Catbook = ({book}) => {
    // console.log(book)
    const{author, imageLink, pages, title,location,original_price,resale_price,you} = book;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={imageLink} alt="book-pic"/></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary text-xl font-semibold">
                        {title}
                    </h2>
                    <p>Author:{author}</p>
                    <p>Pages:{pages}</p>
                    <p>Location:{location}</p>
                    <p>Original Price:{original_price}</p>
                    <p>Resale Price:{resale_price}</p>
                    <p>Years Of Use:{you}</p>
                    <div className="card-actions justify-end">
                    <label htmlFor="my-modal-3" className="btn btn-primary">Book Now!</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <Modal book={book}></Modal>
                    </div>
                </div>
            </div>
    );
};

export default Catbook;