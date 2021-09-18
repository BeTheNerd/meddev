import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Navbar extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Menu>
        <Link to="/">
          <Menu.Item active={location.pathname == "/"}>Home</Menu.Item>
        </Link>
        <Link to="/things">
          <Menu.Item active={location.pathname == "/things"}>Things</Menu.Item>
        </Link>
        <Link to="/doctors">
          <Menu.Item active={location.pathname == "/doctors"}>Doctors</Menu.Item>
        </Link>
        <Link to="/pasient">
          <Menu.Item active={location.pathname == "/pasient"}>Pasient</Menu.Item>
        </Link>
      </Menu>
    );
  }
}

export default withRouter(Navbar);
