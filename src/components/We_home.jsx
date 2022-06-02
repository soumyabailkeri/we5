import React from 'react';
import We_about from './We_about';
import We_contact from './We_contact';
import We_services from './We_services';
import We_navbar from './We_navbar';
import We_footer from './We_footer';

import { NavLink } from 'react-router-dom';

 const We_home = () => {
  return (
    <div>
      <We_navbar/>
     
        <section id="we_home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                      <h1 className="display-4 fw-bolder md-4 text-center text-white">Feels the Fresh bussiness 
                      Prepesctive</h1> 
                      <p className="lead text-center fs-4 mb-5 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta iste voluptatibus itaque magnam tempora in quisquam harum reiciendis? Voluptas maxime praesentium quae placeat libero quo dolore, rerum atque nesciunt est corrupti ipsa reiciendis consequatur, aperiam adipisci porro nam quis tempore dolor explicabo. Eos voluptates minus magni possimus fugit consequuntur officiis.</p> 

                      <div className="buttons d-flex justify-content-center">
                      <NavLink to="/we_contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quotes</NavLink>
                      <NavLink to="/we_services" className="btn btn-outline-light rounded-pill px-4 py-2">Our Service</NavLink>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        <We_about/>
        <We_services/>
        <We_contact/>
        <We_footer/>
   

    </div>
  );
}
export default We_home;