import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-light" style={{'margin':'auto','border':'1px black solid'}}>
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <button class="nav-link">
                                    <Link to='/'>Home</Link>
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" >
                                    <Link to='/practice'>Practice</Link>
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" >
                                    <Link to="/takequiz">Take Quiz</Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="ml-auto">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <button class="nav-link" >
                                    <Link to='/signin'>Login</Link>
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link">
                                    <Link to='/signup'>Sign Up</Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;