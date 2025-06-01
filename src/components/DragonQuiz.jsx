
import Quiz from "../styledComponents/Quiz2.jsx";
import {questions, answerToDragon} from "../data/dragonQuestions.js";

const DragonQuiz = () => {
  
  return (
    <div>
      <Quiz questions={questions} answers={answerToDragon} quizElement="Dragon"/>
    </div>
  );
};
export default DragonQuiz;