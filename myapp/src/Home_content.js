import React from "react";
import I1 from "./HomeImg1.png"
import I2 from "./HomeImg2.png"
import I3 from "./HomeImg3.png"
function Content() {
    return (
        <>
            <br/>
            <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'padding': '20px' }}>
                <div>
                    <p style={{ 'margin-right': '40%' }}>
                        Welcome to the Mental Math Trainer! Sharpen your mind, boost your calculation speed, and become a mental math master. Join us on a journey to improve your math skills effortlessly.
                    </p>
                </div>
                <div>
                    <img src={I1} alt="Image1" style={{ 'height': '200px', 'border': '1px black solid'}} />
                </div>
            </div>
            <br/><br/>
            <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                <div>
                    <img src={I2} alt="Image1" style={{ 'height': '200px', 'border': '1px black solid'}} />
                </div>
                <div>
                    <p style={{ 'margin-left': '40%' , 'paddingLeft': '50px' }}>
                        Practice Questions section is where you can hone your mental math skills through engaging exercises and challenges. Whether you're a student looking to improve your math proficiency or an adult seeking to boost your mental agility, our carefully crafted practice questions are designed to help you achieve your goals.
                    </p>
                </div>
            </div>
            <br/><br/>
            <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'padding': '20px' }}>
                <div>
                    <p style={{ 'margin-right': '40%' }}>
                    Are you ready to put your mental math skills to the test? Our "Take Quiz" section offers a fun and interactive way to challenge yourself and sharpen your mathematical abilities. Whether you're a student looking to improve your math proficiency or someone who simply enjoys a good math challenge, our quizzes are designed to engage and inspire.
                    </p>
                </div>
                <div>
                    <img src={I3} alt="Image1" style={{ 'height': '200px', 'border': '1px black solid'}} />
                </div>
            </div>
        </>
    )
}
export default Content