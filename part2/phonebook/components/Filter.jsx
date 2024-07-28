const Filter = ({ filter, handleChangeFilterValue }) => {
  return (
    <div>
      filter shown with{" "}
      <input onChange={handleChangeFilterValue} value={filter} />
    </div>
  );
};

export default Filter;
