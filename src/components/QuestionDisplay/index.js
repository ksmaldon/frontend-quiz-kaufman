import QuestionCard from "../QuestionCard";

export default function QuestionDisplay({ questions }) {
  // mapping into QuesitonCard
  return (
    <div>
      {/* {questions.length > 0 && <pre>{JSON.stringify(questions, null, 2)}</pre>} */}
      {questions.map((questionObject)=>{
                return <QuestionCard 
                key ={questionObject.question_id} 
                question={questionObject.question} 
                answer={questionObject.answer}

                />
            })} 
    </div>
  );
}
