import Button from "../Button"
export default function QuizGenerator () {

    return (
        <div className="quiz-generator">
          <form>
            <label> topic1
            <input type="checkbox"></input>
            </label>
            <label> topic2
            <input type="checkbox"></input>
            </label>
            <label> topic3
            <input type="checkbox"></input>
            </label>
            <label> topic4
            <input type="checkbox"></input>
            </label>
            <Button/>
          </form>
        </div>
    )
}