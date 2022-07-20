const SkillItem = ({ skillName, skillImg }) => {
  return (
    <div className="flex-container skill-container">
      <img
        src={require(`../assets/icons/${skillImg}`)}
        className="img-64px"
        id={skillName}
        alt={skillName}
      />
      <h3 className="img-description">{skillName}</h3>
    </div>
  );
};

export default SkillItem;
