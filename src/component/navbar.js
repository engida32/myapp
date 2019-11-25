import React, { Component } from "react";

 class Navbar extends Component {

  static defualtProps = {
    title:'Github Finder',
    icon: 'fab fa-github'
  };
  render() {
    return (
        <nav className="navbar badge-dark">
        <h1> 
          <i className = {this.props.icon} /> {this.props.title} 
          </h1>
        </nav>
    );
  }
}
export default Navbar
