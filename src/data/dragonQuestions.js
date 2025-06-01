const questions = [
  {
    question: "How do you handle conflict?",
    name: "conflict",
    options: [
      "I face it head-on, ready for a fight.",
      "I try to avoid it if possible, but will stand my ground if necessary.",
      "I am ruthless and use my intelligence to navigate through it.",
      "I am patient and wait for the right moment to act.",
      "I am quick to anger and quite ferocious.",
    ],
  },
  {
    question: "What is your preferred environment?",
    name: "environment",
    options: [
      "I prefer the thrill of a thunderstorm.",
      "I love the calm and peace of a sunny day.",
      "I feel at home when I read on a rainy, dark afternoon.",
      "I thrive in smart conversations with friends.",
      "I am comfortable in a tense and challenging environment.",
    ],
  },
  {
    question: "How would your friends describe you?",
    name: "friendsDescription",
    options: [
      "The most cunning.",
      "Calm and honourable.",
      "Ruthless and intelligent.",
      "Cool-headed and witty.",
      "Quick-tempered but reliable.",
    ],
  },
  {
    question: "What is your greatest strength?",
    name: "strength",
    options: [
      "My power and cunning nature.",
      "My honour and calm demeanor.",
      "My intelligence and ruthlessness.",
      "My wits which help me make strategic decisions.",
      "My quick temper, which fuels my determination.",
    ],
  },
  {
    question: "What is your greatest weakness?",
    name: "weakness",
    options: [
      "I can be too aggressive.",
      "I can be too passive.",
      "I can be too secretive.",
      "I can sometimes overthink things.",
      "I have a quick temper.",
    ],
  },
  {
    question: "What kind of friend are you?",
    name: "friendType",
    options: [
      "I am the protector, always ready to defend my friends.",
      "I am the calm and reliable one, always there when my friends need me.",
      "I am the mysterious one, always surprising my friends.",
      "I am the unpredictable one, and a touch cruel.",
      "I am the witty one, always making my friends laugh.",
      "I am the passionate one, always full of energy and ready for an adventure.",
    ],
  },
  {
    question: "You're going to a party. Your outfit is...",
    name: "outfit",
    options: [
      "Elegant and regal.",
      "Joyful and colourful.",
      "Powerful and mysterious.",
      "Refreshing and calm.",
      "Passionate and bold.",
    ],
  },
  {
    question: "How do you approach a challenge?",
    name: "challengeApproach",
    options: [
      "I was born ready! Let's do this.",
      "I approach it calmly.",
      "I am ruthless until I come on top.",
      "I usually am on defence.",
      "I approach it with a quick temper, ready to fight my way through it.",
    ],
  },
  {
    question: "What is your leadership style?",
    name: "leadership",
    options: [
      "I lead with power and I am most cunning.",
      "I lead with honour and calmness.",
      "I use my intelligence to guide my team.",
      "I lead with a composed disposition and am reasonable.",
      "I lead with a quick temper, pushing my team to their limits.",
    ],
  },
  {
    question: "How do you handle loss?",
    name: "lossHandling",
    options: [
      "I will probably die with them.",
      "Even the thought of it makes me too sad.",
      "I will be seeking revenge at all costs.",
      "I handle it by remembering the fallen and learning from the loss.",
      "I handle it with a quick temper, vowing to avenge the fallen.",
    ],
  },
];

const answerToDragon = {
  intelligence: {
    possible_answers: ["Tairneanach", "Codagh", "Cuir", "Chradh"],
    description:
      "A dragon known for its cunning, discernment, and strategic abilities. This type of dragon is considered the smartest of its kind, with an exceptional ability to plan and outthink opponents.",
  },
  protection: {
    possible_answers: ["Andarna", "Teine", "Feirge", "Sliseag"],
    description:
      "A protective dragon with strong defensive capabilities. This dragon prioritizes the safety of its rider and allies, often putting itself in harm's way to shield others.",
  },
  strategy: {
    possible_answers: ["Sgaeyl", "Marbh", "Aotrom"],
    description:
      "A tactical and calculating dragon that excels at planning several moves ahead. This dragon approaches every situation with careful consideration and strategic thinking.",
  },
  power: {
    possible_answers: ["Baide", "Deigh"],
    description:
      "A powerful and destructive dragon with formidable offensive capabilities. This dragon is known for its raw strength and ability to unleash devastating attacks.",
  },
  stealth: {
    possible_answers: ["Chradh", "Aotrom"],
    description:
      "A stealthy dragon skilled in infiltration and subtle maneuvers. This dragon excels at moving unseen and striking when least expected.",
  },
  discipline: {
    possible_answers: ["Codagh", "Cath", "Teine"],
    description:
      "A disciplined dragon with strong self-control and adherence to rules. This dragon values order and structure, following commands with precision.",
  },
};


export { questions, answerToDragon };
