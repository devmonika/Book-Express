import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const{providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const[error, setError] = useState('');

    const{logIn} = useContext(AuthContext);
    const[loginUserEmail, setLoginUserEmail] = useState('');
    const[googleUserEmail, setGoogleUserEmail] = useState('');
    // const [token] = useToken(googleUserEmail);
    const [token] = useToken(loginUserEmail, googleUserEmail);
    const navigate = useNavigate();
    const  location = useLocation();

    const from = location.state?.from?.pathname || '/';

        if(token){
            navigate(from, {replace:true});
        }

    const googleLogIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
          const user =result.user;
          console.log(user);
          setGoogleUserEmail(user?.email);
        })
        .catch(error => console.error(error))
      }

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setLoginUserEmail(email);
            
            setError('');
            
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }
    return (
        <div>
            
        <div class="h-full bg-white shadow-lg w-full pb-10 px-4">
            <div class="flex flex-col items-center justify-center">
                <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p class="focus:outline-none text-2xl font-extrabold leading-6 text-secondary">Login to your account</p>
                    <p class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Dont have account? <Link to='/register' class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-secondary cursor-pointer"> <button> Sign up here</button></Link></p>
                    <button aria-label="Continue with google" class="py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                       <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google"/>
                        <p class="text-base font-medium ml-4 text-gray-700"><button onClick={googleLogIn}>Continue with Google</button></p>
                    </button>
                    <div class="w-full flex items-center justify-between py-5">
                         <hr class="w-full bg-gray-400"/>
                         <p class="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                         <hr class="w-full bg-gray-400  "/>
                        </div>
                        <form onSubmit={handleLogin}>
                        <div>
                            <label id="email" class="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input name="email" type="email" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                            <span>{error}</span>
                        </div>
                        <div class="mt-6  w-full">
                            <label htmlFor="pass" class="text-sm font-medium leading-none text-gray-800">
                                Password
                            </label>
                           <div class="relative flex items-center justify-center">
                            <input name="password" type="password" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                            <span>{error}</span>
                           </div>
                        </div>
                        <div class="mt-8">
                            <button  class="text-sm font-semibold leading-none text-white  py-4 w-full btn-primary">Login</button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    
        </div>
    );
};

export default Login;