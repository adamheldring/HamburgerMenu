import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {
  state = {
    active: false
  }

  toggleIcon = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <header>
        <label htmlFor="hamburger-checkbox" id="hamburger-label">
          <div
            className={this.state.active ? "hamburger transform" : "hamburger"}
            role="button"
            tabIndex={0}
            id="hamburgerIcon"
            onClick={this.toggleIcon}
            onKeyPress={this.toggleIcon}>
            <div className="hamburger-bar" id="bar1" />
            <div className="hamburger-bar" id="bar2" />
            <div className="hamburger-bar" id="bar3" />
          </div>
        </label>
        <input type="checkbox" id="hamburger-checkbox" />

        <Grid className="header-grid" id="menuOptions">
          <a href="http://technigo.io">Technigo</a>
          <a href="http://technigo.io">Boot Camp</a>
          <a href="http://technigo.io">Stories</a>
          <a href="http://technigo.io">About</a>
        </Grid>
      </header>
    )
  }
}

export default Header
