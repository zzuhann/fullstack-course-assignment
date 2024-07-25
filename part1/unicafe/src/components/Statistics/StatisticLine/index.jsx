/**
 * @component
 * @param {Object} props
 * @param {string} props.text
 * @param {string} props.value
 * @returns {JSX.Element}
 **/
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

export default StatisticLine;
