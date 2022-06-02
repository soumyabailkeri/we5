import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer text-white bg-primary">
            <div class="container">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-2">
                            <h4>FINE ART </h4>
                        </div>

                        <div class="col-2">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-white">
                                        Home
                                        </a>
                                        </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-white">
                                        Features
                                        </a>
                                        </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-white">
                                        Pricing
                                        </a>
                                        </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-white">
                                        FAQs
                                        </a>
                                        </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-white">
                                        About
                                        </a>
                                        </li>
                            </ul>
                        </div>


                        <div class="col-2">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-white">
                                        Home
                                        </a>
                                        </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-white">
                                        Features
                                        </a>
                                        </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-white">
                                        Pricing
                                        </a>
                                        </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-white">
                                        FAQs
                                        </a>
                                        </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-white">
                                        About
                                        </a>
                                        </li>
                            </ul>
                        </div>

                        <div class="col-4 offset-1">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div class="d-flex w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                                        <button class="btn btn-primary rounded-pill px-4" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2021 Company, Inc. All rights reserved.</p>
                         <ul class="list-unstyled d-flex"> 
                         <li className="ms-3">
                             <a className="link-light" to='#'>
                                 <i className="fa fa-facebook fa-2x">

                                 </i>
                             </a>
                         </li>
                         <li className="ms-3">
                             <a className="link-light" to='#'>
                                 <i className="fa fa-instagram fa-2x">
                                     
                                 </i>
                             </a>
                         </li>
                         <li className="ms-3">
                             <a className="link-light" to='#'>
                                 <i className="fa fa-twitter fa-2x">
                                     
                                 </i>
                             </a>
                         </li>
                             </ul> 
                    </div>
                </footer>
            </div>
            </footer>
        </div>
    );
}

export default Footer;
