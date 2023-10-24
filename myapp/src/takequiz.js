import React, { useEffect, useState } from 'react';
import Navbar from './Nav';
import axios from 'axios';
// import Signup from './signup';
function TakeQuiz() {
    const [quizData, setQuestion] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/finalQuestion')
            .then(quizData => setQuestion(quizData.data))
            .catch(err => console.log(err))
    }, [])
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(null);

    const handleOptionSelect = (questionNum, selectedOption) => {
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionNum]: selectedOption,
        }));
    };

    const calculateScore = () => {
        let totalScore = 0;
        for (const question of quizData) {
            if (userAnswers[question.num] === question.correct_option) {
                totalScore++;
            }
        }
        setScore(totalScore);
    };

    const handleSubmit = () => {
        calculateScore();
    };

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
                    <p>
                        Welcome to the Ultimate Quiz Challenge! This quiz consists of 10 questions designed to test your logical thinking and wit. Please follow these instructions carefully:
                        <ul>
                            <li>Read each question thoroughly before attempting to answer it.</li>
                            <li>There are no time constraints, so take your time to think before selecting your answer.</li>
                            <li>Choose the best-fitting answer for each question by clicking on the corresponding option.</li>
                            <li>Once you've selected an answer, it cannot be changed, so choose wisely.</li>
                            <li>After you've completed all 10 questions, click the "Submit" button at the end.</li>
                            <li>You will receive your score and correct answers after submitting the quiz.</li>
                            <li>Feel free to challenge your friends or retake the quiz to improve your score.</li>
                            <li>Remember, this quiz is meant to be enjoyable and thought-provoking, so have fun and give it your best shot! Good luck!</li>
                        </ul>
                    </p>
                    <br />
                </div>
            </div>
            <div>
                <h1>Quiz Questions</h1>
                {quizData.map((question) => (
                    <div key={question.num}>
                        <p>{question.question}</p>
                        <ul>
                            {Object.entries(question.options).map(([option, value]) => (
                                <li key={option}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`question${question.num}`}
                                            value={option}
                                            checked={userAnswers[question.num] === option}
                                            onChange={() => handleOptionSelect(question.num, option)}
                                        />
                                        {`${option}: ${value}`}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <button onClick={handleSubmit}>Submit Quiz</button>
                {score !== null && (
                    <div>
                        <h2>Result</h2>
                        <p>Your Score: {score} out of {quizData.length}</p>
                        {quizData.map((question) => (
                            <p key={question.num}>
                                Question {question.num}:{' '}
                                {userAnswers[question.num] === question.correct_option ? 'Correct' : 'Incorrect'}
                            </p>
                        ))}
                    </div>
                )}
            </div>
            <footer>
                <p>&copy; 2023 Mental Math Trainer</p>
            </footer>
        </div >
    )
}
export default TakeQuiz;