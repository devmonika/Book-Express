import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({cat}) => {
    
    const{_id, name, img} = cat;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Movie" className='w-60 h-60'/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-start">
                <button className="btn btn-primary"><Link to={`/category/${cat.cat_id}`}>See More</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Category;