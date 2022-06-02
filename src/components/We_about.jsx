import React from 'react';
import We_home from './We_home';
import { NavLink } from 'react-router-dom';


const We_about = () => {
    return (
        <div>
            {/* <div>
            <NavLink to="./we_home" type="button" className="btn btn-outline-secondary">Home
            </NavLink>
            </div> */}
            <section id="about">
                <div className="cointer my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/asset/img.jpeg" alt="About" className='w-75 mt-5 ' />
                        </div>
                        <div className="col-md-5">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b>We 5</b> Are </h1>
                            <hr className='w-50'/>
                            <p className="lead mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab atque at autem laboriosam, adipisci, dolore illum mollitia illo asperiores, tenetur accusamus. Pariatur repudiandae ipsam nemo illum voluptates optio labore voluptatum. Magni ad sint magnam atque rerum obcaecati non expedita ipsum earum, nostrum rem necessitatibus possimus blanditiis laborum voluptatum minus quidem!</p>
                            <button className="btn btn-primary rounded-pill px-4 py-2">Get Stared</button>
                            <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default We_about;
