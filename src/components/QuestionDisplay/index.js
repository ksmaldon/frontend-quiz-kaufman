import QuestionCard from "../QuestionCard";

export default function QuestionDisplay({allQuestions}) {
    // mapping into QuesitonCard
    return(
        <div>
            {allQuestions.map((questionObject)=>{
                return <QuestionCard 
                key ={questionObject.question_id} 
                question={questionObject.question} 
                answer={questionObject.answer}

                />
            })}
            

            
        </div>
    )
}