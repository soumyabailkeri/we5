import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

const Register = () => {
    return (
        <div>
        <div>
            <Navbar/>
            <div class="vh-80 bg-dark">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100"> 
                        
                            <div class="container-fluid text-light bg-dark">  <br /><hr size='10' /> 
                                <div class="container-fluid p-md-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                            <form class="mx-1 mx-md-4">
                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fa fa-user fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" class="form-control" placeholder='Enter Your First Name'/>
                                                        <label class="form-label" for="form3Example1c">First Name</label>
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fa fa-user fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" class="form-control" placeholder='Enter Your Last Name'/>
                                                        <label class="form-label" for="form3Example1c">Last Name</label>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fa fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" class="form-control" placeholder='Enter a Valid Email Address' />
                                                        <label class="form-label" for="form3Example3c">Email Address</label>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fa fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" class="form-control" placeholder='Enter Password' />
                                                        <label class="form-label" for="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fa fa-key fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4cd" class="form-control" placeholder='Re-Enter Password'/>
                                                        <label class="form-label" for="form3Example4cd">Confirm password</label>
                                                    </div>
                                                </div>

                                                <div class="form-check d-flex justify-content-center mb-5">
                                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label class="form-check-label" for="form2Example3">
                                                        I agree all statements in Terms of service
                                                    </label>
                                                </div>

                                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" class="btn btn-primary btn-lg">Sign Up</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                                class="img-fluid" alt="Sample image"/>
                                        </div>
                                    </div>
                                </div><hr size="10"/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Register;


