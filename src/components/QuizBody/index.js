import QuizGenerator from "../QuizGenerator"
import QuestionDisplay from "../QuestionDisplay"

export default function QuizBody() {
    return(
        <div>
            <QuizGenerator/>
            <QuestionDisplay/>
        </div>
    )
}