import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const {creatUser, userProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const[createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail);
    if(token){
        navigate('/');
    }
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const userType = form.userType.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password, userType);

        creatUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            const userInfo ={
                displayName:name
            }
            userProfile(userInfo)
            .then(() => {
                saveUser(name, email, userType);

            })
            .catch(error => console.error(error))
            // form.reset();
        })
        .catch(error => console.error(error))
    }
    const saveUser = (name, email, userType) =>{
        const user = {name, email, userType};
        console.log(user)

        fetch('https://book-express-server.vercel.app/users',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=>{
            setCreateUserEmail(email);
           
        })
        // .catch(err=>console.error(err));
    }



    return (
        <div>
            <div class="h-full bg-white shadow-lg w-full pb-10 px-4">
            <div class="flex flex-col items-center justify-center">
                <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p class="focus:outline-none text-2xl font-extrabold leading-6 text-secondary">Sign Up to Create an Account</p>
                    <p class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Already have account? <Link to='/login' class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-secondary cursor-pointer"> <button>Log In</button></Link></p>
                    <form onSubmit={handleRegister}>
                     <div>
                            <label id="name" class="text-sm font-medium leading-none text-gray-800">
                                Name
                            </label>
                            <input name="name" type="text" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                     
                        </div>
                        <label id="name" class="text-sm font-medium leading-none text-gray-800">
                                Select Type
                        </label>
                        <select name="userType" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2">
                                <option selected>Seller</option>
                                <option value="US">User</option>
                        </select>
                     <div>
                            <label id="email" class="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input name="email" type="email" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                     
                        </div>
                        <div class="mt-6  w-full">
                            <label htmlFor="pass" class="text-sm font-medium leading-none text-gray-800">
                                Password
                            </label>
                           <div class="relative flex items-center justify-center">
                            <input name="password" type="password" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                            
                           </div>
                        </div>
                        <div class="mt-8">
                            <button  class="text-sm font-semibold leading-none text-white  py-4 w-full btn-primary">Create my account</button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;

