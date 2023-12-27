import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component
{
    render() {
      return(
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="ml-5 navbar-brand" to={'/'} >
            <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/FFFFFF/external-flight-interface-kiranshastry-solid-kiranshastry.png" width="30" height="30" className="d-inline-block align-top" alt="Logo"/>
                &ensp; Flight Try
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex justify-content-end mr-5 collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <Link className="nav-link" to={'/dashboard'} activeStyle={{color:"white"}}>
                    Dashboard
                  </Link>
                </li> */}
                <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">Flight</a> */}
                  <Link className="nav-link" to={'/flights'} activeStyle={{color:"white"}}>
                    Flight
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/airports'} activeStyle={{color:"white"}}>
                    Airport
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/'} activeStyle={{color:"white"}}>
                    Logout
                  </Link>
                </li>
            </ul>
            </div>
          </nav>
        )
    }
}
export default Header