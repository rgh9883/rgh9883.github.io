import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "lineshift",
    name: "Line Shift",
    description:
      "Full-stack ML system that predicts MLB game outcomes and sizes simulated bets against a weekly budget.",
    stack: ["Python", "FastAPI", "scikit-learn", "React", "Supabase"],
    links: { repo: "https://github.com/rgh9883/LineShift" }
  },
  {
    id: "quiz-race",
    name: "Quiz Race",
    description:
      "Upload a document and instantly turn it into a multiplayer quiz, race to answer, and see results on a live leaderboard.",
    stack: ["React", "Firebase", "Tailwind CSS"],
    links: { repo: "https://github.com/rgh9883/quiz-race" },
    image: "/projects/quizrace.png"
  },
  {
    id: "pacquack",
    name: "PacQuack",
    description:
      "Duck themed Pacman clone developed for the QuackBox gaming console",
    stack: ["Godot", "C#"],
    links: { repo: "https://github.com/rgh9883/pacquack" },
    featured: true,
    image: "/projects/pacquack.png"
  },
  {
    id: "sports-iq",
    name: "Sports IQ Showdown",
    description:
      "Online sports trivia game with a leaderboard",
    stack: ["HTML", "JavaScript", "CSS", "Python", "Flask", "MongoDB"],
    links: { repo: "https://github.com/rgh9883/sports-iq-showdown" },
    image: "/projects/sportsIQ.jpg"
  },
  {
    id: "teach-me",
    name: "Teach Me",
    description:
      "A website for students to easily request student mentors and receive help in many different topics and subjects.",
    stack: ["React", "Bootstrap", "Node.js", "Express.js", "SQL"],
    links: { repo: "https://github.com/rgh9883/teach-me" },
    image: "/projects/teachme.png"
  },
];
