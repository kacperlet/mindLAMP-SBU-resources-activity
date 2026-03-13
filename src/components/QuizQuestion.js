import { useState } from "react";

function QuizQuestion(props) {
    const { question, choices, correctChoice, test } = props;

    const [ selected, setSelected ] = useState(-1);
    const [ isCorrect, setIsCorrect ] = useState(null);

    const handleChange = (e) => {
        setSelected(e.target.value)
    }

    const handleClick = (e) => {
        if (selected == correctChoice)
        {
            setIsCorrect(true);
        }
        else
        {
            setIsCorrect(false);
        }
    }

    let message = ""
    let messageClass = "quiz-message"
    if (isCorrect === true)
    {
        message = "You got it right!"
        messageClass += " correct"
    }
    else if (isCorrect === false) // if null, message shouldn't be visible
    {
        message = "That's wrong :( \nTry again?"
        messageClass += " wrong"
    }

    return (
        <div className='quiz-question'>
            <span>{question}</span>
            <form className="quiz-choices">
                {
                choices.map((choice, index) => {
                    return (
                        <div key={index}>
                            <input type="radio" id={index} name="question" value={index} onChange={handleChange}></input>
                            <label htmlFor={index}>{choice}</label>
                        </div>
                    )
                })
            }
            </form>
            <span className={messageClass}>{message}</span>
            <button onClick={handleClick} disabled={selected===-1}>
                Check
            </button>
            
            
        </div>
    )
}

export default QuizQuestion