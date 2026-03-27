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
            question: "If you arrive at a four-way stop at the same time as another vehicle, what is the safest next step?",
            choices: ["Proceed quickly to avoid delaying traffic", "Yield and allow the other vehicle to go first", "Wait for the other driver to signal or proceed", "Honk to indicate your turn"],
            correctChoice: 1, // B
            explanation: "At a four-way stop, if two vehicles arrive at the same time, the safest choice is to yield and let the other vehicle go first (especially if there's any uncertainty). This helps prevent confusion and reduces the risk of a collision. Proceeding quickly or honking can startle other drivers and increase danger, and waiting for a signal can lead to hesitation or miscommunication. Yielding is predictable, calm, and keeps everyone safe."
        },
        {
            question: "If a driver is following you too closely, what are appropriate actions you can take?",
            choices: ["Speed up to increase distance", "Maintain a steady speed and allow space ahead", "Change lanes when safe to do so", "Pull over when it is safe and let the vehicle pass"],
            correctChoice: 2,
            explanation: "When someone is following too closely, the main hazard is that they don't have enough time to react if you need to slow down or stop. By safely changing lanes, you remove yourself from that immediate risk zone and allow the aggressive or inattentive driver to pass. This is a defensive driving strategy-it prioritizes avoiding conflict rather than trying to control the other driver's behavior."
        },
        {
            question: "This is a sample question?",
            choices: ["Sample Choice A", "Sample Choice B", "Sample Choice C", "Sample Choice D"],
            correctChoice: 2,
            explanation: "This is a sample explanation. This will explain why it is the correct answer choice."
        },

    ]

    const incrementQuestion = () => {
        if (questionIndex + 1 < questions.length)
            setQuestionIndex(questionIndex+1);
        else
            setQuestionIndex(0)
    }

    const currentQuestion = questions[questionIndex];
    const progress = (100 * (questionIndex+1.0)/questions.length) + '%'
    
    return (
        <div id="quiz">
            <div id="resource-header">
                <IconMindlamp onClick={() => navigate("/")} />
                <span>Practice</span>
                <IconDots  />
            </div>
            <div id="progress-bar" style={{width: progress}}></div>
            <div id="quiz-body">
                <span>Question {questionIndex+1} out of {questions.length}</span>
                <QuizQuestion 
                    key={questionIndex}
                    question={currentQuestion.question}
                    choices={currentQuestion.choices}
                    correctChoice={currentQuestion.correctChoice}
                    explanation={currentQuestion.explanation}
                    incrementQuestion={incrementQuestion}
                />
            </div>                    
        </div>
    )
}

export default Quiz