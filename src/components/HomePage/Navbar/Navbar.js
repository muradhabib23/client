import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        setLoggedInUser({
            isSignedIn: false,
            name: '',
            email: '',
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">

        <Link to='/' className="navbar-brand">
                    <img style={{height: "50px", paddingLeft: '120px', marginTop: "50px"}} src={logo} alt="logo"/>
        </Link>

        <div style={{marginTop:"50px"}} className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link mr-3" to="/"><b>Home</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-3" to="/portfolio"><b>Our Portfolio</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-3" to="/team"><b>Our Team</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-3" to="/contact"><b>Contact Us</b></Link>
                </li>
                <li className="nav-item ml-3 mr-5">
                            {<Link onClick={handleSignOut} to='/login' ><button className="text-white pb-1" style={{width:'134px', height: '45px', backgroundColor:'#111430', borderRadius: '5px'}}>
                            {loggedInUser.email || loggedInUser.name ? `${loggedInUser.name}/Logout` : 'Login'}</button></Link>}
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;