import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {ReactComponent as IconMindlamp} from "../icons/mindlamp.svg";
import {ReactComponent as IconDots} from "../icons/dots.svg";
import QuizQuestion from './QuizQuestion';

function Quiz() {
    const navigate = useNavigate();
    const [ questionIndex, setQuestionIndex ] = useState(0);

    const questions = [
        {
            question: "This is a sample question?",
            choices: ["Sample Choice A", "Sample Choice B", "Sample Choice D", "Sample Choice D"],
            correctChoice: 2
        },

    ]

    const currentQuestion = questions[questionIndex];
    
    return (
        <div id="quiz">
            <div id="resource-header">
                <IconMindlamp onClick={() => navigate("/")} />
                <span>Practice</span>
                <IconDots  />
            </div>
            <div id="quiz-body">
                <span>Question {questionIndex+1} out of {questions.length}</span>
                <QuizQuestion 
                    question={currentQuestion.question}
                    choices={currentQuestion.choices}
                    correctChoice={currentQuestion.correctChoice}
                />
            </div>                    
        </div>
    )
}

export default Quiz