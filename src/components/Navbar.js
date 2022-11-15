import React from 'react';
import { Link } from 'react-router-dom';

import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        <FilterVintageIcon />{' '}
      </Link>
      <Link to="/tastey">
        <SentimentDissatisfiedIcon />{' '}
      </Link>
    </div>
  );
}
