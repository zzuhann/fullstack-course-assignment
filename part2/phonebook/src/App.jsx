import { useEffect, useState } from "react";
import personService from "./services/person";
import Filter from "../components/Filter";
import AddPersonForm from "../components/AddPersonForm";
import Persons from "../components/Persons";
import SuccessNotification from "../components/SuccessNotification";
import ErrorNotification from "../components/ErrorNotification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChangeFilterValue = (e) => {
    setFilter(e.target.value);
  };

  const filterPersons = filter
    ? persons.filter(
        (person) =>
          person.name.toLowerCase().includes(filter) ||
          person.number.includes(filter)
      ) || []
    : persons;

  const handleChangeNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
  };

  const showErrorMessage = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  const updatePerson = (personInPhoneBook) => {
    personService
      .updatePerson(personInPhoneBook.id, {
        ...personInPhoneBook,
        number: newNumber,
      })
      .then((res) => {
        setPersons(
          persons.map((person) => {
            if (person.id === res.id) {
              return {
                ...person,
                number: res.number,
              };
            }
            return person;
          })
        );
        showSuccessMessage(`Updated ${res.name}`);
      })
      .catch(() => {
        showErrorMessage(
          `Information of ${personInPhoneBook.name} has already been removed from server`
        );
      });
  };

  const addPerson = (e) => {
    e.preventDefault();
    const isNotComplete = !newName || !newNumber;
    if (isNotComplete) {
      window.alert("data not completed");
      return;
    }
    const personInPhoneBook = persons.find((person) => person.name === newName);
    const isAlreadyExistPerson = !!personInPhoneBook;
    if (isAlreadyExistPerson) {
      if (
        window.confirm(
          `${newName} is already added to phone book, replace the old number with a new one?`
        )
      ) {
        updatePerson(personInPhoneBook);
      }
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: `${persons.length + 1}`,
    };
    personService.createPerson(newPerson).then((res) => {
      setPersons(persons.concat(res));
      setNewName("");
      setNewNumber("");
      showSuccessMessage(`Added ${res.name}`);
    });
  };

  const deletePerson = (id) => {
    const targetPerson = persons.find((person) => person.id === id);
    if (targetPerson) {
      if (window.confirm(`Delete ${targetPerson.name}?`)) {
        personService.deletePerson(targetPerson.id).then((res) => {
          setPersons(persons.filter((person) => person.id !== res.id));
        });
      }
    }
  };

  useEffect(() => {
    personService.getAllPerson().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <div>
      <h2>PhoneBook</h2>
      {successMessage && <SuccessNotification message={successMessage} />}
      {errorMessage && <ErrorNotification message={errorMessage} />}
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
      <Persons persons={filterPersons || []} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
