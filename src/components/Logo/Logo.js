import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Alien from './alien.png';
 
const Logo=()=>{
	return(
    	<Tilt className="Tilt shadow-5 ma2 pa2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner"><img alt="alien" src={Alien} /></div>
        </Tilt>

	);
}


export default Logo;