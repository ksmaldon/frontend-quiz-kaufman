import { useState } from "react";
import QuizGenerator from "../QuizGenerator";
import QuestionDisplay from "../QuestionDisplay";

const TOPICS = {
  react: 1,
  "html/css": 2,
  javascript: 3,
  sql: 4,
};

export default function QuizBody({ allQuestions }) {
  const [topics, setTopics] = useState([]);

  const filteredQuestions = allQuestions.filter((question) =>
    topics.some((topic) => topic === question.topic_id)
  );

  return (
    <div>
      <QuizGenerator setTopics={setTopics} />
      <QuestionDisplay questions={filteredQuestions} />
    </div>
  );
}
