import QuestionCard from "../QuestionCard";
import "./index.css";
export default function QuestionDisplay({ questions, deleteQuestion }) {
  questions.sort(() => Math.random() - 0.5);
  return (
    <div id="question-display">
      {questions.map((questionObject, id) => {
        return (
          <QuestionCard
            key={questionObject.question_id}
            questionNumber={id + 1}
            questionId={questionObject.question_id}
            question={questionObject.question}
            answer={questionObject.answer}
            topicId={questionObject.topic_id}
            deleteQuestion={deleteQuestion}
            text_link={questionObject.text_link}
            video_link={questionObject.video_link}
            interactive_link={questionObject.interactive_link}
          />
        );
      })}
    </div>
  );
}
