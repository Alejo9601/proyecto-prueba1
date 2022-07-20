import skills from "../assets/json/skills.json";
import SkillItem from "../components/SkillItem";

const AboutSkills = () => {
  return (
    <section className="grid-container about-skills">
      <h2 className="section-subtitle grid-title">My Skills</h2>
      {skills.map((skill) => {
        return <SkillItem skillName={skill.name} skillImg={skill.img} />;
      })}
    </section>
  );
};

export default AboutSkills;
