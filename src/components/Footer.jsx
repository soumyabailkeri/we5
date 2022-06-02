import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer text-dark bg-light">
            <div class="container">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-2">
                            <h5>About</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact us</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About us</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Advertise</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Corporate Information</a></li>
                            </ul>
                        </div>

                        <div class="col-2">
                            <h5>Policy</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Return Policy</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Terms of use</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Security</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Privacy</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Sell on we5</a></li>
                            </ul>
                        </div>

                        <div class="col-2">
                            <h5>Social</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Facebook</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Instagram</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Twitter</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">LinkedIn</a></li>
                                {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Youtube</a></li> */}
                            </ul>
                        </div>

                        <div class="col-4 offset-1">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div class="d-flex w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                                        <button class="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="container ">

                    <div class="d-flex justify-content-center py-4 my-4 border-top ">
                        <p> &copy; 2022 Company, Inc. All rights reserved.</p>
                        {/* <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter" /></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram" /></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook" /></svg></a></li>
                        </ul> */}
                    </div>
                    </div>
                   
                </footer>
            </div>
            </footer>
        </div>
    );
}

export default Footer;