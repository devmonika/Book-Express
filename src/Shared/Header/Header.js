import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import { AuthContext } from '../../Contexts/AuthProvider';
const Header = () => {
    const {user, logOut} = useContext(AuthContext);
  
  
  
    const signOut = () =>{
      logOut()
      .then( ()=>{
  
      })
      .catch(error => console.error(error))
    }
    return (
        <div>
            {/* 1st nav  */}
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <img src={logo} className="h-20"alt=''/>
            </div>
            <div className="navbar-center">
                
            </div>
            <div className="navbar-end">
                
                
                {
                    user?.uid ?
                    
                    <>
                    <div class="dropdown dropdown-hover">
                    <div tabindex="0" class="btn bg-primary hover:bg-primary text-white border border-none mx-4"><Link to='/dashboard'>Dashboard</Link></div> 
                    {/* <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <Link>Seller</Link>
                        </li> 
                        <li>
                        <Link>Buyer</Link>
                        </li> 
                    </ul> */}
                    </div>
                    
                    
                    <button className="btn bg-secondary hover:bg-primary text-white border border-none">
                        <div className="indicator">
                            <Link onClick={signOut}>Logout</Link>
                        </div>
                    </button>
                    
                    </>
                    
                    :
                    <>
                    <button className="btn bg-secondary hover:bg-primary text-white border border-none">
                    <div className="indicator">
                        <Link to='/login'>Login</Link>
                    </div>
                    </button>
                    </>
                }
              
            </div>
        </div>
        {/* 2nd nav  */}
        <div className="navbar bg-primary">
            <div className="navbar-start w-3/4 text-white">
                <div className="dropdown visible lg:hidden">
                <label tabIndex={0} className="btn btn-primary bg-secondary border border-none hover:bg-blue-400 border border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="blue" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allcategory">
                    All Category
                    </Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
                </div>
                <div className='hidden lg:block'>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
                    <Link to="/allcategory" className="btn btn-ghost normal-case text-xl">
                    All Category
                    </Link>
                    <Link to="/contact" className="btn btn-ghost normal-case text-xl">Contact Us</Link>
                    <Link to="/blog" className="btn btn-ghost normal-case text-xl">Blog</Link>
                </div>
                
            </div>
            <div className='navbar-end w-1/4'>
                <label htmlFor='dashboard-drawer' tabIndex={2} className="btn btn-primary bg-secondary border border-none hover:bg-blue-400 border border-none lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="blue" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                </div>
            
            {/* <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
                </button>
            </div> */}
        </div>
        </div>
    );
};

export default Header;