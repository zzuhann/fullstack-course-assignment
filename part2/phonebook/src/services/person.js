import axios from "axios";

const BASE_URL = "http://localhost:3001/persons";

const getAllPerson = () => {
  return axios
    .get(BASE_URL)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const createPerson = (newPerson) => {
  return axios.post(BASE_URL, newPerson).then((res) => res.data);
};

const deletePerson = (id) => {
  return axios
    .delete(`${BASE_URL}/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const updatePerson = (id, updatePerson) => {
  return axios
    .put(`${BASE_URL}/${id}`, updatePerson)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default {
  getAllPerson,
  createPerson,
  deletePerson,
  updatePerson,
};
