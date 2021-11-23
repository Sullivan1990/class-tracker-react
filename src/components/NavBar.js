import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class='navbar navbar-expand-lg navbar-light bg-light'>
            <i
                className=' ml-2 fa fa-github fa-2x'
                style={{ marginLeft: '0.5rem' }}
            />
            <div className='navbar-brand mx-3'>Class Tracker</div>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/Teachers'>
                        Teachers
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
