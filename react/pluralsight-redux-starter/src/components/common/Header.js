import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassname="active">About</Link>
      {" | "}
      <Link to="/courses" activeClassname="active">Courses</Link>
    </nav>
  );
};

export default Header;