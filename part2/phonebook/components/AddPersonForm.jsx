const AddPersonForm = ({
  newName,
  handleChangeNewName,
  newNumber,
  handleChangeNewNumber,
  addPerson,
}) => {
  return (
    <form>
      <div>
        name: <input onChange={handleChangeNewName} value={newName} />
      </div>
      <div>
        number: <input onChange={handleChangeNewNumber} value={newNumber} />
      </div>
      <div>
        <button type="submit" onClick={addPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default AddPersonForm;
