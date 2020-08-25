import React, { Component } from 'react';
import ishaan from '../img/ishaan.png';
class Header extends Component 
{
render() 
    { 
        return ( 
        <div>
            <header>
                <nav className = "Header">
                    <ul>
                        <div>
                            <li><img src = {ishaan} height="30px" width="100px"/></li>
                        </div>
                        <li>
                            <strong>
                                <a href ="#">
                                    Home
                                </a>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <a href ="#">
                                    About Us
                                </a>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <a href ="#">
                                    Services
                                </a>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <a href ="#">
                                    Contact Us
                                </a>
                            </strong>
                        </li>
                        <div className="search">
                            <input type="text" name ="search" id = "search" placeholder="search this website">
                            </input>
                        </div>
                   </ul>
                </nav> 
            </header>
        </div> );
    }
}
export default Header ;