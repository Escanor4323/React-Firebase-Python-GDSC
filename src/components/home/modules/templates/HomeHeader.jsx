import React from 'react';
import { useAuth } from "../../../../contexts/authContext";
import { doSignOut } from "../../../../firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo/logo.svg';

const HomeHeader = () => {
    const { currentUser} = useAuth(); // Assume doSignOut is provided by your authContext
    const navigate = useNavigate();
    const defaultProfilePic = 'https://via.placeholder.com/150';

    const handleLogout = () => {
        doSignOut().then(() => {
            navigate('/login');
        }).catch((error) => {
            console.error("Logout failed", error);
        });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <Link to="/">
                    <img src={logo} alt="Logo" width="130" height="30" className="d-inline-block align-top me-2"/>
                </Link>
                <div className="ms-auto d-flex align-items-center">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-bs-toggle="dropdown" aria-expanded="false"></button>
                        <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li>
                                <button className="dropdown-item" onClick={handleLogout}
                                        style={{textAlign: 'left'}}>Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                    <span
                        className="ms-2 me-2">{currentUser.displayName ? currentUser.displayName : currentUser.email}</span>
                    <img src={currentUser.photoURL ? currentUser.photoURL : defaultProfilePic}
                         className="rounded-circle me-2" alt="Profile" style={{width: '40px', height: '40px'}}/>
                </div>
            </div>
        </nav>
    );
};

export default HomeHeader;
