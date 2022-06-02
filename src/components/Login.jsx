import React from 'react';
import Register from './Register';
import Navbar from './Navbar'
import Footer from './Footer'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Navbar/>
        <div class="log bg-dark text-light"><br /><hr size="10" /><br />
            <div class="vh-100"> <div class="container-fluid h-auto ">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="img-fluid" alt="Sample image" />
                    </div>
                    <div class="col-md-8 col-s-6 col-xl-4 offset-xl-1">
                        <form>
                            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p class="lead fw-normal mb-0 me-3">Sign in with</p>

                               <NavLink to=""  ><img src="https://img.icons8.com/color/344/facebook-new.png"  width="70px" height="70px" class=" fbpage rounded-circle btn-floating mx-1"/></NavLink>
                                    <i class="fab fa-facebook-f"></i>

                                    <img src="https://img.icons8.com/fluency/344/instagram-new.png"  width="70px" height="70px" class="rounded-circle  btn-floating mx-1"/>
                                    <i class="fab fa-instagram"></i>

                                    <img src="https://img.icons8.com/color/344/linkedin-circled--v1.png"  width="70px" height="70px" class="rounded-circle  btn-floating mx-1"/>
                                    <i class="fab fa-linkedin"></i>

                            
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-linkedin-in"></i>
                                </button>
                            </div>

                            <div class="divider d-flex align-items-center my-4">
                                <p class="text-center fw-bold mx-3 mb-0">Or</p>
                            <i class="fa fa-user fa-lg me-3 fa-fw"></i>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="email" id="form3Example3" class="form-control form-control-lg"
                            placeholder="Enter a valid email address" />
                                <label class="form-label" for="form3Example3">Email address</label>
                            </div>

                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label class="form-label" for="form3Example4">Password</label>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <div class="form-check mb-0">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label class="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" class="text-body">Forgot password?</a>
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-primary btn-lg"
                                >Login</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? </p>
                                <NavLink to="/register" type="button" className="link-primary">
                                Sign Up</NavLink>
                            </div>
                            <br />
     
      
 
                        </form>
                    </div>
                </div>
            </div><br /><br /><br /><br /><hr size="10"/>
            </div>

            
            </div>
            <Footer/>
        </div>

    );
}

export default Login;
