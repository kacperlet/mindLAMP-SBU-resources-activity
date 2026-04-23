import {ReactComponent as IconConfetti} from "../icons/confetti.svg";

function QuizResults(props) {
    const {correctAnswers, questionCount, goBack} = props

    const percent = correctAnswers.length / questionCount * 100;

    return (
            <div className='quiz-question'>
                <span>You Finished!</span>
                <div>
                    {
                        `You got ${correctAnswers.length} out of ${questionCount} questions correct.`
                    }
                </div>
                <IconConfetti width={175} height={200}/>
                <div>
                        Thats a 
                    <b>
                        {` ${percent.toFixed(2)}%`}
                    </b>
                </div>
                <button onClick={goBack}>
                    Try Again
                </button>
            </div>
        )
}

export default QuizResults;