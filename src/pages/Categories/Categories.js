import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [cats, setCat] = useState([]);

    useEffect(()=>{
        fetch('https://book-express-server.vercel.app/category')
        .then(res => res.json())
        .then(data => setCat(data))
    },[])
    return (
        <div>
            <h2 className='text-5xl font-bold uppercase text-secondary mt-24 mb-10 text-left ml-5 lg:ml-24'>Shop By Category</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-5 lg:gap-10 lg:mx-10  lg:mx-24'>
            {
                cats.slice(0,3).map(cat => <Category key={cat.cate_id} cat={cat}></Category>)
            }
        </div>
        </div>
    );
};

export default Categories;