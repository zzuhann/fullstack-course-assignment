/**
 * @component
 * @param {Object} props
 * @param {string} props.text
 * @param {string} props.value
 * @returns {JSX.Element}
 **/
const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

export default StatisticLine;
