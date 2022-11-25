import React from 'react';
import { Link } from 'react-router-dom';

import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        <FilterVintageIcon />
      </Link>
      <Link to="/tastey">
        <SentimentDissatisfiedIcon />
      </Link>
      <Link to="/wastey">
        <DeleteIcon />
      </Link>
    </div>
  );
}
