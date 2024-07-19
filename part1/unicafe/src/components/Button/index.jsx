/**
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {import("react").MouseEventHandler<HTMLButtonElement>} props.onClick
 * @returns {JSX.Element}
 **/
const Button = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
