import QuestionCard from "../QuestionCard";

export default function QuestionDisplay({fiveQuestionsState}) {
    // mapping into QuesitonCard
    return(
        <div>
            {/* {fiveQuestionsState.map((questionObject)=>{
                return <QuestionCard 
                key ={questionObject.question_id} 
                question={questionObject.question} 
                answer={questionObject.answer}

                />
            })} */}
            

            
        </div>
    )
}