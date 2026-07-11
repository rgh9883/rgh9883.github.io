import type { Project } from "./types";

export const projects: Project[] = [
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
    links: { repo: "https://github.com/rgh9883/BrickHack11" },
    image: "/projects/sportsIQ.jpg"
  },
  {
    id: "teach-me",
    name: "Teach Me",
    description:
      "A website for students to easily request student mentors and receive help in many different topics and subjects.",
    stack: ["React", "Bootstrap", "Node.js", "Express.js", "SQL"],
    links: { repo: "https://github.com/rgh9883/Hack.COMS"},
    image: "/projects/teachme.png"
  },
];
