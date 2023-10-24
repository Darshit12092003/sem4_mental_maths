import React from 'react'
import Navbar from './Nav'
import Content from './Home_content'
function Home() {
    return (
        <div>
            <header style={{ 'backgroundColor' : 'aqua' }}>
                <h1>Mental Math Trainer</h1>
                <p>Practice your mental math skills with fun challenges!</p>
            </header>
            <div class="container">
                <Navbar />
                <br/><br/>
                <Content/>
            </div>
            <footer>
                <p>&copy; 2023 Mental Math Trainer</p>
            </footer>
        </div>
    );
}
export default Home;