import React from 'react';
import Cart from './Cart';
import We_home from './We_home';
import { BsCart4} from 'react-icons/fa';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-1    ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <NavLink to="/home" className="navbar-brand fw-bolder fs-2  " > <i> We5 Fashions</i></NavLink>

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bolder ">
                            <li class="nav-item ">
                                {/* <NavLink to="/home" className="nav-link active fs-5" aria-current="page" >Home</NavLink> */}
                            </li>
                            <li class="nav-item">
                                <NavLink to="/categories" className="nav-link fs-5" >Categories</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/we_home" className="nav-link fs-5" >About Us</NavLink>
                            </li>
                        </ul>
                        <nav class="navbar navbar-light bg-light">
                            <div class="container-fluid">
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-dark rounded-pill" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                        <NavLink to="/login" className="btn btn-outline-dark rounded-pill ms-auto px-4 " ><i className="fa fa-sign-in  me-2"></i>Sign_In</NavLink>

                        <NavLink to="/register" className="btn btn-outline-dark rounded-pill ms-3 px-4 "><i className="fa fa-user-plus me-2"></i>Sign_Up</NavLink>

                        <NavLink to="/cart" className="btn btn-outline-dark rounded-pill ms-3 px-4 "><i className="fa fa-shopping-cart me-2 " aria-hidden="true"></i> Cart </NavLink>
                        {/* <div>
                        <p class="lead fw-normal mb-0 me-3"></p>
                        <NavLink to="/login" img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYIsD5BHXNxTUCruRvDOF5-retuZQjh1klg&usqp=CAU " height="35px" width="35px" class="rounded-circle  btn-floating mx-1 "> </NavLink>
                        </div> */}







                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;
