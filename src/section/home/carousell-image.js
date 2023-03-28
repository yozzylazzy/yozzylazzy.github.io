import imageCarousel from '../../test-asset-image/silverwing.jpeg';
import imageCarousel2 from '../../test-asset-image/silverwing2.jpeg';
import imageCarousel3 from '../../test-asset-image/silverwing3.jpeg';
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarousellImage = () => {
    return (
        <div>
            <Carousel autoPlay interval="3000" autoFocus axis="horizontal" infiniteLoop>
                <div>
                    <img src={imageCarousel} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={imageCarousel2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={imageCarousel3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
}

export default CarousellImage;
