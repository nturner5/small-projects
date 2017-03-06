import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Pomodoro </IndexLink>
      {" | "}
      <Link to="/settings" activeClassname="active">Settings</Link>
    </nav>
  );
};

export default Header;