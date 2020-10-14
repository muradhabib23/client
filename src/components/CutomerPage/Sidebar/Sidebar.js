import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const Sidebar = () => {
    return (
        <div>
            <Link to='/' className="navbar-brand">
                    <img style={{height: "50px"}} src={logo} alt="logo"/>
            </Link>
            <ul className="list-unstyled ml-5 mt-5">
                <li>
                    <Link to="/order" className="text-dark">
                        <strong>Order</strong>
                    </Link>
                </li>
                <br/>
                <li>
                    <Link to="/serviceList" className="text-dark">
                        <strong>Service List</strong>
                    </Link>
                </li>
                <br/>
                    <li>
                        <Link to="/review" className="text-dark">
                             <strong>Review</strong>
                        </Link>
                    </li>
                    <br/>
                    <li>
                        <Link to="/serviceOrderList" className="text-dark">
                             <strong>Service Order List</strong>
                        </Link>
                    </li>
                    <br/>
                    <li>
                        <Link to="/addService" className="text-dark">
                             <strong>Add Service</strong>
                        </Link>
                    </li>
                    <br/>
                    <li>
                        <Link to="/makeAdmin" className="text-dark">
                             <strong>Make Admin</strong>
                        </Link>
                    </li>
              <br/>
              <br/>
              <br/>
            </ul>
            <div className="ml-5">
                <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <strong>Logout</strong></Link>
            </div>
        </div>
    );
};

export default Sidebar;