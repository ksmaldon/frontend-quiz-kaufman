import Button from "../Button"
export default function QuizGenerator ({allOnClick}) {

    return (
        <div className="quiz-generator">
          <form>
            <label> React
            <input type="checkbox"></input>
            </label>
            <label> HTML/CSS
            <input type="checkbox"></input>
            </label>
            <label> SQL
            <input type="checkbox"></input>
            </label>
            <label> JS
            <input type="checkbox"></input>
            </label>
            <Button allOnClick={allOnClick} text="Generate Quiz"/>
          </form>
        </div>
    )
}