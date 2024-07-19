/**
 * @component
 * @param {Object} props
 * @param {number} props.good - good 的數量
 * @param {number} props.neutral - neutral 的數量
 * @param {number} props.bad - bad 的數量
 * @param {number} props.total - good+neutral+bad
 * @param {number} props.average - 分數總計/total
 * @param {number} props.positive - good/total
 * @returns {JSX.Element}
 */
const Statistics = (props) => {
  const isNoFeedback = props.total === 0;
  return (
    <div>
      <h2 className="title">statistics</h2>
      {isNoFeedback && <p>No feedback given</p>}
      {!isNoFeedback && (
        <>
          <p>good {props.good}</p>
          <p>neutral {props.neutral}</p>
          <p>bad {props.bad}</p>
          <p>all {props.total}</p>
          <p>average {props.average}</p>
          <p>positive {props.positive}%</p>
        </>
      )}
    </div>
  );
};

export default Statistics;
