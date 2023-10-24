import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Nav";

function Tricky() {
    const [tricky, setQuestion] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/trickyQuestion')
            .then(tricky => setQuestion(tricky.data))
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
        if (currentQuestion < tricky.length - 1) {
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
            <h1>Tricky Questions</h1>
            {tricky[currentQuestion] && (
                <div>
                    <p>{tricky[currentQuestion].question}</p>
                    <ul>
                        {Object.entries(tricky[currentQuestion].options).map(([option, value]) => (
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
                            Correct Answer: {tricky[currentQuestion].correct_option}
                        </p>
                    )}
                    <button onClick={handleNextQuestion}>
                        {currentQuestion < tricky.length - 1 ? 'Next Question' : <Link to="/practice">Finish</Link>}
                    </button>
                </div>
            )}
            {currentQuestion === tricky.length && (
                <p>Congratulations! You've completed the Tricky practice questions.</p>
            )}
        </div>
    );
}
export default Tricky;