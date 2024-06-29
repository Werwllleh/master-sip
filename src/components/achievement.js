

const Achievement = ({icon, title, text}) => {
  return (
    <div className="achievement">
      <div className="achievement__body">
        <div className="achievement__icon">
          {icon}
        </div>
        <div className="achievement__info">
          <h4 className="achievement__title">{title}</h4>
          <h5 className="achievement__text">{text}</h5>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
