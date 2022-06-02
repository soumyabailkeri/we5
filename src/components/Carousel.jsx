import React from 'react'
import { Carousel, CarouselItem} from 'react-bootstrap'

// import 'bootstrap/dist/css/bootstrap.min.css';

const Imageslider = () => {
    return (

        // <div className="">
        <div className="container-fluid carousel slide carousel-fade">
            <Carousel>
                <Carousel.Item active>
                    <img src='https://source.unsplash.com/1400x500/?clothes' alt='' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://source.unsplash.com/1400x500/?footwear' alt='' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://source.unsplash.com/1400x500/?gadgets' alt='' />
                </Carousel.Item>
            </Carousel>
            {/* <br /> */}
            
            


        </div>
        // </div>

    );
}

export default Imageslider;
