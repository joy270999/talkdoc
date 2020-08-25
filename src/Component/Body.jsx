import React from 'react';
import './Body.css';
import image from '../img/banner.png';
import image2 from '../img/banner2.png';
function Body() {
    return (
        <div className="Body">
            
            <div className="row">
                <div className="col1">
                    <img src={image} />
                <div>
                    
                </div>
                    <div className="col2">
                        <img src={image2} />
                    </div>
                </div>
               


            </div>
            
            
            <h3> REGISTER HERE </h3>
            <h1> REGISTER HERE </h1>
        </div>);
}


export default Body;