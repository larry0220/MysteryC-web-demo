const Button = ({ onPress, className, text }) => (
  <button className={className}
    onClick={onPress}>
    <span>{text}</span>
  </button>
);

window.App.Button = Button;