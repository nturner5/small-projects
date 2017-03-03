import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Analog </IndexLink>
      {" | "}
      <Link to="/about" activeClassname="active">Digital</Link>
      {" | "}
      <Link to="/courses" activeClassname="active">Other</Link>
    </nav>
  );
};

export default Header;