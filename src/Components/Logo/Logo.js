import React from 'react';
import Tilt from 'react-tilt';
import brain from './hacker.jpg';


const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 ,paddingTop:'-5px'}} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '-15px',height:130,width:180}} alt='logo' src={brain}/>
          
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;