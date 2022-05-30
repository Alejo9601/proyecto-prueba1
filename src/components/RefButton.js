const RefButton = ({ className, reference, btnText }) => {
  return (
    <div className="flex-container refButton">
      <a
        style={{ textDecoration: "none" }}
        href={reference}
        className={`${className} ${reference !== "" ? "" : "btn-disabled"}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        {btnText}
      </a>
    </div>
  );
};

export default RefButton;
