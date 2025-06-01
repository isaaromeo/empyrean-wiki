const questions = [
  {
    question: "What is your approach to rules and regulations?",
    name: "rules",
    options: [
      "I respect them, but I'm not afraid to bend them for a good cause.",
      "I keep my secrets and don’t trust easily, but I’d break any rule for those I care about.",
      "I’m a natural leader who values strategy and planning.",
      "I believe in order and structure, and I strictly adhere to the rules.",
      "I’m a compassionate friend and would break a few rules for them.",
      "I’m protective of those I care about and would do anything to keep them safe.",
    ],
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
      "I’m a protector, I step in when those I care about are threatened.",
    ],
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
      "Spending time with my loved ones.",
    ],
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
      "Protectiveness",
    ],
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
      "Find ways to protect them from any harm.",
    ],
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
      "I want to be a great parent!",
    ],
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
      "Protective communication, I often speak up for others.",
    ],
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
      "I make sure everyone is happy with the outcome.",
    ],
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
      "Action or adventure, I enjoy stories about heroes.",
    ],
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
      "I can be overprotective.",
    ],
  },
];

const answerToSignet = {
  intelligence: {
    possible_answers: ["Farsight", "Retrocognition", "Dream Walking"],
    description:
      "A signet that enhances mental capabilities, granting extraordinary perception, memory, or dream manipulation abilities. This power reflects a sharp, analytical mind.",
  },
  protection: {
    possible_answers: [
      "Ward Extension",
      "Mending",
      "Memory Erasure",
      "Heightened Emotions",
    ],
    description:
      "A defensive signet focused on shielding, healing, or emotional protection. This ability manifests in those with strong protective instincts and empathy.",
  },
  strategy: {
    possible_answers: [
      "Shadow Summoning",
      "Countering Signets",
      "Precognition",
    ],
    description:
      "A tactical signet that provides battlefield advantages through foresight, counters, or summoned allies. This power serves those who think several moves ahead.",
  },
  power: {
    possible_answers: ["Lightning Wielding", "Storm Wielding", "Ice Wielding"],
    description:
      "An offensive signet commanding elemental forces with devastating potential. This raw power matches those with strong will and intensity.",
  },
  stealth: {
    possible_answers: ["Object Summoning", "Intention Reading", "Siphon"],
    description:
      "A subtle signet specializing in information gathering, resource acquisition, or energy manipulation. This ability favors those who operate in the shadows.",
  },
  discipline: {
    possible_answers: ["Metallurgist", "Ward Extension"],
    description:
      "A controlled signet requiring precision and focus, often manipulating materials or reinforcing defenses. This structured power reflects mental discipline and order.",
  },
};

export {questions, answerToSignet};


