export type SkillLevel = "basic" | "intermediate" | "advanced";

interface Skill {
  name: string;
  level: SkillLevel;
}

export const skills: Skill[] = [
  { name: "React", level: "advanced" },
  { name: "React Native", level: "advanced" },
  { name: "TypeScript", level: "advanced" },
  { name: "Next.js", level: "intermediate" },
  { name: "Node.js", level: "intermediate" },
  { name: "PHP", level: "basic" },
  { name: "Swift", level: "intermediate" },
  { name: "Kotlin", level: "intermediate" },
  { name: "Java", level: "basic" },
];
