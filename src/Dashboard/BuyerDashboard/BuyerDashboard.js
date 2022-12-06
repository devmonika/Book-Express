import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const BuyerDashboard = () => {
    const{user} = useContext(AuthContext);
    const url =`https://book-express-server.vercel.app/booking?email=${user?.email}`;

    const {data : bookings = [], isLoading} = useQuery({
        
        queryKey: ['booking', user?.email],
        queryFn: async ()=>{
            const res = await fetch(url,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data);

            return data;
        }
        
    })
    if(isLoading){
        return <p>Loading...</p>;
    }
    // console.log(bookings)
    return (
        <div>
            <h2 className='text-5xl font-semibold text-primary my-10'>My Orders</h2>
            <div className="overflow-x-auto">
            <table className="table w-full">
            
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Mobile</th>
                    <th>Meeting Place</th>
                </tr>
                </thead>
                <tbody>
                {
                    bookings?.length && bookings?.map((booking, i) => <tr key={booking._id}>
                        <th>{i+1}</th>
                        <td>{booking.name}</td>
                        <td>{booking.price}</td>
                        <td>{booking.phn}</td>
                        <td>{booking.meeting}</td>
                    </tr>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default BuyerDashboard;