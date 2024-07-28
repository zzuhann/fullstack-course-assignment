import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChangeNewName = (e) => {
    setNewName(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const isAlreadyExistPerson = !!persons.find(
      (person) => person.name === newName
    );
    if (isAlreadyExistPerson) {
      window.alert(`${newName} is already added to phoneBook`);
      return;
    }
    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <form>
        <div>
          name: <input onChange={handleChangeNewName} value={newName} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;
