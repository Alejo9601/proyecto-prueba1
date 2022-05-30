const ServiceItem = ({ name, description, img }) => {
  return (
    <div className="flex-container service-item">
      <img
        className="service-img"
        alt={name}
        src={require(`../assets/icons/${img}`)}
      />
      <h3 className="service-name">{name}</h3>
      <p className="section-paragraph description">{description}</p>
    </div>
  );
};

export default ServiceItem;
