import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Nav";

function Logical() {
    const [logical, setQuestion] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/logicalQuestion')
            .then(logical => setQuestion(logical.data))
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
        if (currentQuestion < logical.length - 1) {
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
            <h1>Logical Question</h1>
            {logical[currentQuestion] && (
                <div>
                    <p>{logical[currentQuestion].question}</p>
                    <ul>
                        {Object.entries(logical[currentQuestion].options).map(([option, value]) => (
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
                            Correct Answer: {logical[currentQuestion].correct_option}
                        </p>
                    )}
                    <button onClick={handleNextQuestion}>
                        {currentQuestion < logical.length - 1 ? 'Next Question' : <Link to="/practice">Finish</Link>}
                    </button>
                </div>
            )}
            {currentQuestion === logical.length && (
                <p>Congratulations! You've completed the Logical practice question.</p>
            )}
        </div>
    );
}
export default Logical;