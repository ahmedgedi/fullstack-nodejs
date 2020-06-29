import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <a href="#" className="left brand-logo"> Emaily </a>
                <ul id="nav-mobile" className="right hide-on-sm-and-down">
                    <li><a>Login with Google</a></li>
                </ul>
                </div>
            </nav>
        )
    }
}
