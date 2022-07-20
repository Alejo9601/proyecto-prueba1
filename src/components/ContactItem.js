const ContactItem = ({ img, refTo, descriptionTag }) => {
  return (
    <div className="flex-container contact-item" id="">
      <a href={refTo} target="_blank" rel="noreferrer">
        <img
          className="img-64px"
          src={require(`../assets/icons/${img}`)}
          alt=""
        />
      </a>
      <h3 className="img-description  contact-label">{descriptionTag}</h3>
    </div>
  );
};

export default ContactItem;
