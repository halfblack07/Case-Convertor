import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>

            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexswitchCheckedDefault" />
                <label className="form-check-label" htmlFor="flexswitchCheckedDefault">Enable DarkMode</label>
            </div>
    
            </div>
        </nav>
    )
}

Navbar.propTypes = {
  title : PropTypes.string,
  abouttext : PropTypes.string,
};

Navbar.defaultProps = {
  title : "Set the Props",
  abouttext : "About the text",
};