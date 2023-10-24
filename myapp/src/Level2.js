import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Nav";

function Level2() {
    const [level2, setQuestion] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/level2Question')
            .then(level2 => setQuestion(level2.data))
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
        if (currentQuestion < level2.length - 1) {
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
            <h1>Level 2</h1>
            {level2[currentQuestion] && (
                <div>
                    <p>{level2[currentQuestion].question}</p>
                    <ul>
                        {Object.entries(level2[currentQuestion].options).map(([option, value]) => (
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
                            Correct Answer: {level2[currentQuestion].correct_option}
                        </p>
                    )}
                    <button onClick={handleNextQuestion}>
                        {currentQuestion < level2.length - 1 ? 'Next Question' : <Link to="/practice">Finish</Link>}
                    </button>
                </div>
            )}
            {currentQuestion === level2.length && (
                <p>Congratulations! You've completed the Level 2 practice question.</p>
            )}
        </div>
    );
}
export default Level2;