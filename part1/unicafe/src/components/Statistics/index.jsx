import StatisticLine from "./StatisticLine";

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
          <StatisticLine text="good" value={`${props.good}`} />
          <StatisticLine text="neutral" value={`${props.neutral}`} />
          <StatisticLine text="bad" value={`${props.bad}`} />
          <StatisticLine text="all" value={`${props.total}`} />
          <StatisticLine text="average" value={`${props.average}`} />
          <StatisticLine text="positive" value={`${props.positive}%`} />
        </>
      )}
    </div>
  );
};

export default Statistics;
