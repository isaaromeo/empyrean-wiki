import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const QUESTIONS = [
  {
    question: "What is your approach to rules and regulations?",
    name: "rules",
    options: [
      "I respect them, but I'm not afraid to bend them for a good cause.",
      "I keep my secrets and don’t trust easily, but I’d break any rule for those I care about.",
      "I’m a natural leader who values strategy and planning.",
      "I believe in order and structure, and I strictly adhere to the rules.",
      "I’m a compassionate friend and would break a few rules for them.",
      "I’m protective of those I care about and would do anything to keep them safe."
    ]
  },
  {
    question: "How do you handle conflict?",
    name: "conflict",
    options: [
      "I use my wit and intelligence to navigate tricky situations.",
      "I am raw and a little scary.",
      "I’m a strategist, I plan my moves carefully.",
      "I believe in the power of knowledge and use it to my advantage.",
      "I’m a peacemaker, I try to resolve conflicts peacefully.",
      "I’m a protector, I step in when those I care about are threatened."
    ]
  },
  {
    question: "What is your preferred way to spend your free time?",
    name: "freeTime",
    options: [
      "Reading, learning or creating.",
      "Keeping to myself, I value my privacy.",
      "Strategizing and problem-solving, I enjoy a good challenge.",
      "Organizing and tidying, I like to have everything in order.",
      "Finding exciting new lovers.",
      "Spending time with my loved ones."
    ]
  },
  {
    question: "What trait do you value most in others?",
    name: "value",
    options: [
      "Intelligence",
      "Loyalty",
      "Strategic thinking",
      "Discipline",
      "Compassion",
      "Protectiveness"
    ]
  },
  {
    question: "What would you do if you saw someone being treated unfairly?",
    name: "unfairness",
    options: [
      "Use my intelligence to outwit the oppressor.",
      "Be all ready to fight for the weak!",
      "Devise a plan to help them without causing a scene.",
      "Follow the rules, and call the authorities.",
      "Find necessary tools to help me take down their enemy.",
      "Find ways to protect them from any harm."
    ]
  },
  {
    question: "What is your ideal job or career?",
    name: "career",
    options: [
      "Researcher or professor",
      "Private investigator",
      "Chess player",
      "Military officer",
      "Social worker or counselor",
      "I want to be a great parent!"
    ]
  },
  {
    question: "What is your preferred method of communication?",
    name: "communication",
    options: [
      "Written communication, I express myself best in writing.",
      "Non-verbal communication, I prefer to keep my thoughts to myself.",
      "Strategic communication, I think carefully about what I say.",
      "Direct and clear communication, I like to keep things orderly.",
      "Open and honest communication, I believe in expressing my feelings.",
      "Protective communication, I often speak up for others."
    ]
  },
  {
    question: "How do you approach a new project or task?",
    name: "approach",
    options: [
      "I research and gather all the information I can.",
      "I keep my plans to myself until I’m ready to share.",
      "I think several steps ahead.",
      "I follow a strict plan to finish asap.",
      "I try to do a very thorough job.",
      "I make sure everyone is happy with the outcome."
    ]
  },
  {
    question: "What is your favorite type of book or movie?",
    name: "genre",
    options: [
      "Mystery or thriller, I love solving puzzles.",
      "Drama or romance, I enjoy stories with depth and emotion.",
      "Strategy or war, I enjoy seeing plans unfold.",
      "Historical or documentary, I appreciate facts and order.",
      "Self-help or inspirational, I like learning how to help others.",
      "Action or adventure, I enjoy stories about heroes."
    ]
  },
  {
    question: "What is your biggest weakness?",
    name: "weakness",
    options: [
      "I can be too focused on my books.",
      "I have a hard time trusting others.",
      "I can overthink things.",
      "I can be too rigid and inflexible.",
      "I can be too selfless.",
      "I can be overprotective."
    ]
  }
];

// Mapeo simple entre respuestas clave y posibles signets
const answerToSignetMap = {
  intelligence: ["Farsight", "Retrocognition", "Dream Walking"],
  protection: ["Ward Extension", "Mending", "Memory Erasure", "Heightened Emotions"],
  strategy: ["Shadow Summoning", "Countering Signets", "Precognition"],
  power: ["Lightning Wielding", "Storm Wielding", "Ice Wielding"],
  stealth: ["Object Summoning", "Intention Reading", "Siphon"],
  discipline: ["Metallurgist", "Ward Extension"]
};

const determineSignet = (answers) => {
  const values = Object.values(answers).join(" ").toLowerCase();

  if (values.includes("strategy")) return "Precognition";
  if (values.includes("protective") || values.includes("protect")) return "Ward Extension";
  if (values.includes("intelligence") || values.includes("puzzle")) return "Retrocognition";
  if (values.includes("power") || values.includes("storm")) return "Storm Wielding";
  if (values.includes("secret") || values.includes("stealth")) return "Siphon";
  if (values.includes("compassion")) return "Mending";
  return "Shadow Summoning"; // Valor por defecto
};

const Quiz = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState(null);

  const onSubmit = (data) => {
    const signet = determineSignet(data);
    setResult(signet);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>🧠 Signet Quiz</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {QUESTIONS.map((q, idx) => (
          <div key={idx} style={{ marginBottom: "1.5rem" }}>
            <h4>{q.question}</h4>
            {q.options.map((opt, i) => (
              <label key={i} style={{ display: "block", marginBottom: "0.5rem" }}>
                <input
                  type="radio"
                  value={opt}
                  {...register(q.name, { required: true })}
                />{" "}
                {opt}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Discover your Signet</button>
      </form>
      {result && (
        <div style={{ marginTop: "2rem" }}>
          <h3>🔮 Your Signet is: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default Quiz;
