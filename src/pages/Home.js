import React from 'react';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';


export default function Home() {
  return (
    <div className="App-header">
      <h1>Tastey Treats</h1>
      <h5 className = 'home-link'

        onClick={(event) =>
          (window.location.href = 'https://www.twitch.tv/tasteymywastey')
        }
      >
        Twitch
      </h5>
     <VideogameAssetIcon />
      <h5 className = 'home-link'
        onClick={(event) =>
          (window.location.href = 'https://www.instagram.com/tasteywastey')
        }
      >
        Instagram
      </h5>
    </div>
  );
}
