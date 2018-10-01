import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {

    const toggleIcon = () => {
      document.getElementById('hamburgerIcon').classList.toggle('transform')
    }

    return (
      <header>
        <label for="hamburger-checkbox" id="hamburger-label">
          <div className="hamburger" id="hamburgerIcon" onClick={toggleIcon}>
            <div className="hamburger-bar" id="bar1"></div>
            <div className="hamburger-bar" id="bar2"></div>
            <div className="hamburger-bar" id="bar3"></div>
          </div>
        </label>
        <input type="checkbox" id="hamburger-checkbox"/>

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
