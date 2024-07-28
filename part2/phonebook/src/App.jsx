import { useState } from "react";
import Filter from "../components/Filter";
import AddPersonForm from "../components/AddPersonForm";
import Persons from "../components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleChangeFilterValue = (e) => {
    setFilter(e.target.value);
  };

  const filterPersons = filter
    ? persons.filter(
        (person) =>
          person.name.toLowerCase().includes(filter) ||
          person.number.includes(filter)
      )
    : persons;

  const handleChangeNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const isNotComplete = !newName || !newNumber;
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
    setPersons(persons.concat({ name: newName, phone: setNewNumber }));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter
        filter={filter}
        handleChangeFilterValue={handleChangeFilterValue}
      />
      <h2>add a new</h2>
      <AddPersonForm
        newName={newName}
        handleChangeNewName={handleChangeNewName}
        newNumber={newNumber}
        handleChangeNewNumber={handleChangeNewNumber}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={filterPersons} />
    </div>
  );
};

export default App;
