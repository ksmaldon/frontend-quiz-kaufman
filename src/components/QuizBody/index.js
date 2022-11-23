import QuizGenerator from "../QuizGenerator"
import QuestionDisplay from "../QuestionDisplay"

export default function QuizBody({allOnClick, allQuestions}) {
    return(
        <div>
            <QuizGenerator allOnClick={allOnClick}/>
            <QuestionDisplay allQuestions={allQuestions}/>
        </div>
    )
}