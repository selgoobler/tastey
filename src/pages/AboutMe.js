import React from 'react';

import tastey from '../assets/tastey.jpg';
import { games } from '../helpers/Games.js';

export default function AboutMe() {
  return (
    <div>
      <img alt="egirl" src={tastey} className="egirl"></img>
      <h4>Hey, folks call me Tastey.</h4>
      <p>
        I play and stream mainly Fall Guys with a villain bean squad.
        <br></br> So if you see us, grab us!
      </p>
      <h5>
        Here are the games I play/stream
        {games.map((game) => (
          <p>{game}</p>
        ))}
      </h5>
    </div>
  );
}
