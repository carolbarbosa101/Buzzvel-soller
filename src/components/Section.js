import React from 'react';
import './Section.css';
import circleOrange from '../assets/images/circle.svg';
import circlePurple from '../assets/images/circle2.svg';
import screen from '../assets/images/Desktop.svg';


const Section = () => {
    return (
        <section>
            <div className="text-section">
                <div className="title-top">
                    <p className="no-waste">No more waste</p>
                    <h2 className="pick-sun">Pick the Sun</h2>
                </div>
                <p className="paragraph-section">
                    Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar<br />purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
                </p>

                <div className="objects">

                    <div className="image-screen">
                        <div className="screen">
                            <img src={screen} alt="image of a screenshot" />
                        </div>
                    </div>
                    
                    <div className="images-circles">
                        <div className="circle-orange">
                            <img src={circleOrange} alt="orange circle" className="circle-orange-image" />
                        </div>


                        <div className="circle-purple">
                            <img src={circlePurple} alt="orange purple" className="circle-purple-image" />
                        </div>
                    </div>

                </div>

            </div>
        </section>

    );
};



export default Section; 