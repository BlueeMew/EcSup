import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { Slide } from 'react-reveal';

export const Card = () => {
  const [startUps, setstartUps] = useState();
  const [isWelcomeLoaded, setIsWelcomeLoaded] = useState(false);

  const fetchList = async () => {
    const { data } = await axios.get('https://api.ecelliitr.org/edc/community?format=json');
    setstartUps(data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  function randomColor() {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return { color: color };
  }
//   https://png.pngtree.com/thumb_back/fh260/background/20220216/pngtree-starry-sky-cool-text-background-image_936548.jpg
  return (
    <div className='cards'>
        <welcome>
            <img src='https://media0.giphy.com/media/IfrtVRiikHiWMVIpfx/giphy.gif?cid=ecf05e47z8vu4aet2ldhygucgmzo402pw4qjzilrj6wa01ew&rid=giphy.gif&ct=s' onLoad={() => setIsWelcomeLoaded(true)} />
            <h1>Welcome!</h1>
        </welcome>
      {isWelcomeLoaded && startUps? (
        startUps.map((startUp, index) => (
          <div className={`singleCard ${index % 2 === 0 ? 'imageRight' : 'imageLeft'}`} key={startUp.id}>
           <Slide left>
              <img src={startUp.image} height='300px' alt={startUp.name} />
            </Slide>
            <Slide right>
              <div className='textpart'>
                <h1 style={randomColor()}>{startUp.name}</h1>
                <p>{startUp.description}</p>
                <icons>
                  <a href={startUp.email} ><img className='icon' src='https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png' width='50px' /></a>
                  <a href={startUp.linkedin}><img className='icon' src='https://icons.veryicon.com/png/o/miscellaneous/very-thin-linear-icon/linkedin-103.png' width='50px' /></a>
                </icons>
              </div>
            </Slide>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
