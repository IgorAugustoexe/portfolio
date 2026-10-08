export type SkillLevel = "basic" | "intermediate" | "advanced";

interface Skill {
  name: string;
  level: SkillLevel;
}

export const skills: Skill[] = [
  { name: "React", level: "advanced" },
  { name: "TypeScript", level: "basic" },
  { name: "Next.js", level: "intermediate" },
  { name: "Styled Components", level: "intermediate" },
];
