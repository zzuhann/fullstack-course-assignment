import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleChangeNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeNewPhone = (e) => {
    setNewPhone(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const isNotComplete = !newName || !newPhone;
    if (isNotComplete) {
      window.alert("data not completed");
      return;
    }
    const isAlreadyExistPerson = !!persons.find(
      (person) => person.name === newName
    );
    if (isAlreadyExistPerson) {
      window.alert(`${newName} is already added to phoneBook`);
      return;
    }
    setPersons(persons.concat({ name: newName, phone: newPhone }));
    setNewName("");
    setNewPhone("");
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <form>
        <div>
          name: <input onChange={handleChangeNewName} value={newName} />
        </div>
        <div>
          number: <input onChange={handleChangeNewPhone} value={newPhone} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.phone}
        </div>
      ))}
    </div>
  );
};

export default App;
