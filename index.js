const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <p className={className}>{text}</p>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <div className="yellow-box">
        <Box className="message" text="Small" />
      </div>
      <div className="blue-box">
        <Box className="message" text="Medium" />
      </div>
      <div className="pink-box">
        <Box className="message" text="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
