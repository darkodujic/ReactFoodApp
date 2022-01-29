import React from 'react';
import './Footer.css';
import whiteLogo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer bg-color py-3'>
            <div className='container'>
                <div className='row footer-top py-5'>
                    <div className='col-md-6'>
                        <ul className='list-unstyled'>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/signup'>Sign Up</Link></li>
    
                        </ul>
                    </div>
                    <div className='col-md-5'>
                        <ul className="list-unstyled">
                            <li><Link to='/signup'>Cart</Link></li>
                            <li><a href='https://github.com/darkodujic'>Github</a></li>
        
                        </ul>
                    </div>
                </div>

                <div className='footer-bottom d-flex justify-content-between'>
                    <small className='text-secondary'>Copyright &copy; 2022 Red Rogos Online Food. Created by
                        <span><a className='text-color' href="https://github.com/darkodujic"> Darko Dujic</a></span>
                    </small>
                  
                </div>
            </div>
        </footer>
    );
};

export default Footer;