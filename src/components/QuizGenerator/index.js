import { useEffect, useState } from "react";
import "./index.css";

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
      <h3>Test by Topic</h3>
      <form>
        <div className="checkbox-input">
          <label htmlFor="react">React</label>
          <input
            className="checkbox"
            id="react"
            name="react"
            checked={reactChecked}
            onChange={() => setReactChecked(!reactChecked)}
            type="checkbox"
          />
        </div>
        <div className="checkbox-input">
          <label htmlFor="HTML_CSS">HTML/CSS</label>
          <input
            className="checkbox"
            id="HTML_CSS"
            type="checkbox"
            name="topics"
            checked={htmlChecked}
            onChange={() => setHtmlChecked(!htmlChecked)}
          />
        </div>
        <div className="checkbox-input">
          <label htmlFor="SQL">SQL</label>
          <input
            className="checkbox"
            id="SQL"
            name="topics"
            checked={sqlChecked}
            onChange={() => setSqlChecked(!sqlChecked)}
            type="checkbox"
          />
        </div>

        <div className="checkbox-input">
          <label htmlFor="JS">JS</label>
          <input
            className="checkbox"
            id="JS"
            name="topics"
            checked={jsChecked}
            onChange={() => setJsChecked(!jsChecked)}
            type="checkbox"
          />
        </div>
      </form>
    </div>
  );
}
