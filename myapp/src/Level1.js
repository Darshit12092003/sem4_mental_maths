import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Nav";

function Level1() {
    const [level1, setQuestion] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/level1Question')
            .then(level1 => setQuestion(level1.data))
            .catch(err => console.log(err))
    }, [])
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleOptionSelect = (selectedOption) => {
        setUserAnswer(selectedOption);
        setShowAnswer(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < level1.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setUserAnswer(null);
            setShowAnswer(false);
        }
    };
    return (
        <div>
            <header style={{ 'backgroundColor': 'aqua' }}>
                <h1>Mental Math Trainer</h1>
                <p>Practice your mental math skills with fun challenges!</p>
            </header>
            <div class="container">
                <Navbar />
                <br /><br />
            </div>
            <h1>Level 1</h1>
            {level1[currentQuestion] && (
                <div>
                    <p>{level1[currentQuestion].question}</p>
                    <ul>
                        {Object.entries(level1[currentQuestion].options).map(([option, value]) => (
                            <li key={option}>
                                <label>
                                    <input
                                        type="radio"
                                        value={option}
                                        checked={userAnswer === option}
                                        onChange={() => handleOptionSelect(option)}
                                        disabled={showAnswer}
                                    />
                                    {`${option}: ${value}`}
                                </label>
                            </li>
                        ))}
                    </ul>
                    {showAnswer && (
                        <p>
                            Correct Answer: {level1[currentQuestion].correct_option}
                        </p>
                    )}
                    <button onClick={handleNextQuestion}>
                        {currentQuestion < level1.length - 1 ? 'Next Question' : <Link to="/practice">Finish</Link>}
                    </button>
                </div>
            )}
            {currentQuestion === level1.length && (
                <p>Congratulations! You've completed the Level 1 practice question.</p>
            )}
        </div>
    );
}
export default Level1;