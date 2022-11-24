import { useState } from "react";
import QuizGenerator from "../QuizGenerator";
import QuestionDisplay from "../QuestionDisplay";
import './index.css'
const TOPICS = {
  react: 1,
  "html/css": 2,
  javascript: 3,
  sql: 4,
};

export default function QuizBody({ allQuestions, deleteQuestion }) {
  const [topics, setTopics] = useState([]);

  const filteredQuestions = allQuestions.filter((question) =>
    topics.some((topic) => topic === question.topic_id)
  );

  return (
    <div id="quiz-body">
      <QuizGenerator setTopics={setTopics} />
      
      <QuestionDisplay deleteQuestion={deleteQuestion} questions={filteredQuestions} />
    </div>
  );
}
