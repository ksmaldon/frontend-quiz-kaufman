import QuizGenerator from "../QuizGenerator"
import QuestionDisplay from "../QuestionDisplay"

export default function QuizBody({fiveQuestions, fiveQuestionsState}) {
    return(
        <div>
            <QuizGenerator fiveQuestions = {fiveQuestions} />
            <QuestionDisplay fiveQuestions = {fiveQuestionsState}/>
        </div>
    )
}