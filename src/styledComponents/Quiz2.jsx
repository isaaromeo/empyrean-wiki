import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {
  FaSearch,
  FaMagic,
  FaHatWizard,
  FaCircle,
  FaDotCircle,
  FaArrowRight,
  FaChessKnight,
  FaDragon,
  FaGem,
  FaCrown,
  FaAward,
} from "react-icons/fa";

const QuizContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.containerBackground};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(51, 44, 58, 0.3);
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin:0rem;
  color: ${({ theme }) => theme.sectionTitle};

  @media (max-width: 500px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }
`;

const QuestionBlock = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 15px;
  background: ${({ theme }) => theme.quoteBackground};
  border-left: 4px solid ${({ theme }) => theme.accentColor};
  box-sizing: border-box;

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

const QuestionText = styled.h4`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.questionText};

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const OptionLabel = styled.label`
  display: block;
  background: ${({ theme }) => theme.navBarBackground};
  color: ${({ theme }) => theme.primaryText};
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 0.75rem 1rem;
  border-radius: 20px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.quoteBackground};
  }

  input {
    margin-right: 0.5rem;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.tagBackground};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accentHover || "#542773"};
  }
`;

const ResultCard = styled.div`
  margin-top: 2rem;
  background: ${({ theme }) => theme.signetBackground};
  border-left: 4px solid ${({ theme }) => theme.accentColor};
  padding: 1.5rem;
  border-radius: 8px;
`;

const ResultTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 0.5rem;
`;

const Quiz = ({questions, answers, quizElement}) => {

  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState(null);
  

  const getResult = (category) => {
    const options = answers[category];
    const answer = options.possible_answers[Math.floor(Math.random() * options.possible_answers.length)];
    console.log(answer);
    console.log(options.description);
    return {
        result: answer,
        resultDesc: options.description
  };
}

  const quizResult = (totalScore) => {
    if (totalScore >= 10 && totalScore <= 60) {
      if (totalScore >= 10 && totalScore < 20)
        return getResult("strategy");
      if (totalScore >= 20 && totalScore < 30)
        return getResult("protection");
      if (totalScore >= 30 && totalScore < 40)
        return getResult("intelligence");
      if (totalScore >= 40 && totalScore < 50) 
        return getResult("power");
      if (totalScore >= 50 && totalScore < 55)
        return getResult("stealth");
      if (totalScore >= 55 && totalScore <= 60)
        return getResult("discipline");
    }
    return getResult("power");
  };

  const onSubmit = (data) => {
    let totalScore = 0;

    // Calcular el puntaje total sumando los índices de las respuestas (1-6)
    questions.forEach((question) => {
      const answerIndex = question.options.indexOf(data[question.name]);
      if (answerIndex !== -1) {
        totalScore += answerIndex + 1; // +1 porque los índices empiezan en 0
      }
    });
    console.log(totalScore)
    const result = quizResult(totalScore);
    setResult(result);
    console.log(result)
  };

  return (
    <QuizContainer>
      <SectionTitle>
         Discover Your {quizElement}! 
      </SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        {questions.map((q, idx) => (
          <QuestionBlock key={idx}>
            <QuestionText>{q.question}</QuestionText>
            {q.options.map((opt, i) => (
              <OptionLabel key={i}>
                <input
                  type="radio"
                  value={opt}
                  {...register(q.name, { required: true })}
                />
                {opt}
              </OptionLabel>
            ))}
          </QuestionBlock>
        ))}
        <SubmitButton type="submit">Discover your {quizElement}</SubmitButton>
      </form>

      {result && (
        <ResultCard>
          <ResultTitle>
            🔮 Your {quizElement} is: {result.result}
          </ResultTitle>
          <p>{result.resultDesc}</p>
        </ResultCard>
      )}
    </QuizContainer>
  );
};

export default Quiz;
