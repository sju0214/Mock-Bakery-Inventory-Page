import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="../bakedgoods">Baked Goods</NavLink>
        <NavLink to="../topics">Topics</NavLink>
    </nav>
  );
}

export default Navigation;
