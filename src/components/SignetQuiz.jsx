
import Quiz from "../styledComponents/Quiz.jsx";
import {questions, answerToSignet} from "../data/signetQuestions";

const SignetQuiz = () => {
  
  return (
    <div>
      <Quiz questions={questions} answers={answerToSignet} quizElement="Signet" />
    </div>
  );
};
export default SignetQuiz;