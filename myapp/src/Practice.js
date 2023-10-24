import React from "react";
import Navbar from "./Nav";
import { Link } from "react-router-dom";
function Practice() {
    return (
        <div>
            <div>
                <header style={{ 'backgroundColor': 'aqua' }}>
                    <h1>Mental Math Trainer</h1>
                    <p>Practice your mental math skills with fun challenges!</p>
                </header>
                <div class="container">
                    <Navbar />
                    <br /><br />
                    <h4><p>
                        Practice Questions section is where you can hone your mental math skills through engaging exercises and challenges. Whether you're a student looking to improve your math proficiency or an adult seeking to boost your mental agility, our carefully crafted practice questions are designed to help you achieve your goals.
                    </p></h4>
                    <button type="button" href='/level1' >
                        <Link to='/level1'>Level 1 Questions</Link>
                    </button><br /><br />
                    <button type="button" >
                        <Link to="/level2">Level 2 Questions</Link>
                    </button><br /><br />
                    <button type="button" >
                        <Link to='/logical'>Logical Reasoning Practice</Link>
                    </button><br /><br />
                    <button type="button" >
                        <Link to='/tricky'>Tricky Questions Practice</Link>
                    </button><br /><br />
                    <br />
                </div>
            </div>
        </div>
    )
}
export default Practice;