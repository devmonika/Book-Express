
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const {data:  users = [],isLoading, refetch} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await fetch('https://book-express-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <p>Loading...</p>;
    }
    const handleMakeAdmin = id =>{
        fetch(`https://book-express-server.vercel.app/users/admin/${id}`,{
            method:"PUT",
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                alert('sucessfully added as admin!');
                refetch();
            }
        })
    }
    return (
        <div>
            <h2 className='text-4xl font-semibold text-primary'>All Users</h2>
            <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
            
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Seller</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                
               {
                users?.length && users?.map((user, i) => <tr key={user._id}>
                    <th>{i+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{ user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-primary">Seller</button>}</td>
                    <td>Blue</td>
                  </tr>)
               }
            
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllUsers;