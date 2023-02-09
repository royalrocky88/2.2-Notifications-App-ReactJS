const Notification = (props) => {
  //  Write your code here.
  const { className, text, image } = props;
  return (
    <div className={`notification-container ${className}`}>
      <img src={image} className="icon" />
      <p className="message">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="header">Notifications</h1>
    <div className="img-card">
      <Notification
        className="primary"
        text="Information Message"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success"
        text="Success Message"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning"
        text="Warning Message"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="danger"
        text="Danger Message"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
