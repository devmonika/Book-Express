import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Modal = ({book}) => {
    const {user} = useContext(AuthContext);
    const{author, imageLink, pages, title,location,original_price,resale_price,you} = book;
    // console.log(book)
    const handleSubmit =(event) =>{
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        // const price = form.price.value;
        const phn = form.phn.value;
        const email = form.email.value;
        const meeting = form.meeting.value;


        const booking={
            name:title,
            price:resale_price,
            phn,
            email,
            meeting
        }


        console.log(booking);
        fetch('https://book-express-server.vercel.app/booking',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('Added Successfully!');
                form.reset();
            }
        })
        .catch(err=>console.error(err));
    }
    return (
        <div className="modal">
             <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div class="bg-white shadow rounded w-full p-10 mt-16">
                <form onSubmit={handleSubmit}>
                <div>
                    <label id="email" class="text-sm font-medium leading-none text-gray-800">
                        Email
                    </label>
                    <input name="email" type="email" defaultValue={user?.email}  disabled class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                </div>
                <div class="mt-6  w-full">
                    <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                        Book Name
                    </label>
                    <div class="relative flex items-center justify-center">
                    <input name="name" type="text" defaultValue={title} disabled class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                    
                    </div>
                </div>
                <div class="mt-6  w-full">
                    <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                        Price
                    </label>
                    <div class="relative flex items-center justify-center">
                    <input name='resale_price' type="text" defaultValue={resale_price} disabled class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                    
                    </div>
                </div>
                <div class="mt-6  w-full">
                    <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                        Phone Number
                    </label>
                    <div class="relative flex items-center justify-center">
                    <input name='phn' type="text"  class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                    
                    </div>
                </div>
                <div class="mt-6  w-full">
                    <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                        Meeting Location
                    </label>
                    <div class="relative flex items-center justify-center">
                    <input name='meeting'  type="text"  class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                    
                    </div>
                </div>
                <div class="mt-8">
                    <button role="button" class="text-sm font-semibold bg-primary  text-white  border rounded  py-4 w-full"><Link to="/dashboard">Submit</Link></button>
                </div>
                </form>
            </div>
        </div>
   </div>
  
  
    );
};

export default Modal;