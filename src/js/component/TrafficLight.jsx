
import React, { useState } from "react";

export const TrafficLight = () => { 

    const [activeLight, setActiveLight] = useState('');

    const handleLightClick = (selected) => {
        setActiveLight(selected);
    };

    return (
    <div>
        <div id="TrafficHandle"></div>
            <div id="TrafficContainer">
                <div className={`red light ${activeLight === 'red' ? 'selected' : ''}`} onClick={() => handleLightClick('red')}></div>
                <div className={`yellow light ${activeLight === 'yellow' ? 'selected' : ''}`} onClick={() => handleLightClick('yellow')}></div>
                <div className={`green light ${activeLight === 'green' ? 'selected' : ''}`} onClick={() => handleLightClick('green')}></div>
             </div>
    </div>
    );
}


export default TrafficLight;