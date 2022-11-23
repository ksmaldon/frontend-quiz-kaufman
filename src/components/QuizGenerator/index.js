import Button from "../Button";
import { useEffect, useState } from "react";

export default function QuizGenerator({ setTopics }) {
  const [reactChecked, setReactChecked] = useState(false);
  const [htmlChecked, setHtmlChecked] = useState(false);
  const [jsChecked, setJsChecked] = useState(false);
  const [sqlChecked, setSqlChecked] = useState(false);

  useEffect(() => {
    const stateArray = [reactChecked, htmlChecked, jsChecked, sqlChecked];
    let indexArray = [];

    stateArray.forEach((state, index) => {
      if (state) {
        indexArray.push(index + 1);
      }
    });

    setTopics(indexArray);
  }, [reactChecked, htmlChecked, jsChecked, sqlChecked, setTopics]);

  return (
    <div className="quiz-generator">
      <form>
        <label>
          React
          <input
            id="react"
            name="react"
            checked={reactChecked}
            onChange={() => setReactChecked(!reactChecked)}
            type="checkbox"
          />
        </label>
        <label>
          {" "}
          HTML/CSS
          <input
            id="HTML_CSS"
            type="checkbox"
            name="topics"
            checked={htmlChecked}
            onChange={() => setHtmlChecked(!htmlChecked)}
          ></input>
        </label>
        <label>
          {" "}
          SQL
          <input
            id="SQL"
            name="topics"
            checked={sqlChecked}
            onChange={() => setSqlChecked(!sqlChecked)}
            type="checkbox"
          ></input>
        </label>
        <label>
          {" "}
          JS
          <input
            id="JS"
            name="topics"
            checked={jsChecked}
            onChange={() => setJsChecked(!jsChecked)}
            type="checkbox"
          ></input>
        </label>
        {/* <button onClick={fiveQuestions}>Generate Quiz</button> */}
      </form>
    </div>
  );
}
