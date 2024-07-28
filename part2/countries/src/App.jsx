import { useState, useEffect } from "react";
import countriesService from "./services/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterCountries, setFilterCountries] = useState(null);
  const [targetCountry, setTargetCountry] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
    generateCountriesResult(e.target.value, countries);
  };

  const changeTargetCountry = (country) => {
    setTargetCountry(country);
  };

  const generateCountriesResult = (inputValue, countries) => {
    if (!inputValue) {
      setFilterCountries(null);
      setErrorMessage("");
    }
    if (inputValue && countries.length > 0) {
      const targetCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue)
      );
      if (targetCountries.length > 10) {
        setErrorMessage("Too many matches, specify another filter");
        setFilterCountries(null);
        return;
      }
      if (targetCountries.length === 1) {
        setTargetCountry(targetCountries[0]);
      } else {
        setTargetCountry(null);
      }
      setFilterCountries(targetCountries);
      setErrorMessage("");
    }
  };

  useEffect(() => {
    const getAllCountries = async () => {
      countriesService.getAllCountries().then((res) => setCountries(res));
    };
    getAllCountries();
  }, []);

  if (countries.length === 0) return <div>Loading ...</div>;

  return (
    <div>
      <div>
        find countries{" "}
        <input value={inputValue} onChange={handleChangeInputValue} />
      </div>
      {errorMessage && <div>{errorMessage}</div>}
      {Array.isArray(filterCountries) && (
        <>
          {targetCountry && (
            <>
              <h2>{targetCountry.name.common}</h2>
              <div>capital {targetCountry.capital.join(", ")}</div>
              <div>area {targetCountry.area}</div>
              <h3>languages</h3>
              <ul>
                {Object.values(targetCountry.languages).map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
              <img
                src={targetCountry.flags.png}
                alt={targetCountry.flags.alt}
              />
            </>
          )}
          {filterCountries.length !== 1 &&
            !targetCountry &&
            filterCountries.map((country) => (
              <div key={country.name.official}>
                {country.name.common}{" "}
                <button onClick={() => changeTargetCountry(country)}>
                  show
                </button>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default App;
