import imageCarousel from '../../test-asset-image/1.png';
import imageCarousel2 from '../../test-asset-image/2.png';
import imageCarousel3 from '../../test-asset-image/3.jpg';
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarousellImage = () => {
    return (
        <div>
            <Carousel autoPlay interval="3000" autoFocus axis="horizontal" infiniteLoop
                showThumbs={false} showIndicators={false}>
                <div>
                    <img src={imageCarousel} alt='1' width={80} />
                    <p className="legend">Working on PLates with a Plane</p>
                </div>
                <div>
                    <img src={imageCarousel2} alt='2' width={80} />
                    <p className="legend">Working on a Plane with a Plates</p>
                </div>
                <div>
                    <img src={imageCarousel3} alt='3' width={80} />
                    <p className="legend">Maybe a C++ Programming?</p>
                </div>
            </Carousel>
        </div>
    );
}

export default CarousellImage;
