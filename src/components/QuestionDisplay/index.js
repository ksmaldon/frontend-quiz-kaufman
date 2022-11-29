import QuestionCard from "../QuestionCard";
import './index.css'
export default function QuestionDisplay({ questions, deleteQuestion }) {
  // mapping into QuesitonCard
  questions.sort(() => Math.random() - 0.5)
  return (
    <div id="question-display">
    
      {/* {questions.length > 0 && <pre>{JSON.stringify(questions, null, 2)}</pre>} */}
      {questions.map((questionObject,id)=>{
                return <QuestionCard 
                key ={questionObject.question_id}
                questionNumber={id +1} 
                questionId={questionObject.question_id}
                question={questionObject.question} 
                answer={questionObject.answer}
                deleteQuestion={deleteQuestion}
                text_link={questionObject.text_link}
                video_link={questionObject.video_link}
                interactive_link={questionObject.interactive_link}

                />
            })} 
    </div>
  );
}
//this is a comment