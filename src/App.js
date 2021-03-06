import { Navbar, Nav, NavItem } from "react-bootstrap";
import React, { Component } from "react";
import Home from "./Home";
import PathFinder from "./PathFinder";
import FundsTransfer from "./FundsTransfer";
import AddressChecker from "./AddressChecker";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nav: "home"
    };
  }

  handleNav = e => {
    this.setState({ nav: e });
  };
  render() {
    var content = {};
    switch (this.state.nav) {
      case "home":
        content = <Home />;
        break;
      case "pathFinder":
        content = <PathFinder />;
        break;
      case "fundsTransfer":
        content = <FundsTransfer />;
        break;
      case "addressChecker":
        content = <AddressChecker />;
        break;
      default:
        content = <Home />;
        break;
    }
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" onClick={() => this.handleNav("home")}>
                Ledger Web Tool
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem
              eventKey={1}
              href="#"
              onClick={() => this.handleNav("pathFinder")}
            >
              Path Finder
            </NavItem>
            <NavItem
              eventKey={1}
              href="#"
              onClick={() => this.handleNav("fundsTransfer")}
            >
              Funds Transfer
            </NavItem>
            <NavItem
              eventKey={1}
              href="#"
              onClick={() => this.handleNav("addressChecker")}
            >
              Check Address
            </NavItem>
          </Nav>
        </Navbar>
        <div className="Content">{content}</div>
      </div>
    );
  }
}

export default App;
