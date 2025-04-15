import logo from './logo.svg';
import './App.css';
import Select, { components } from "react-select";
import { useState } from 'react';

const options = [
  { value: "space1", label: "Space 1" },
  { value: "space2", label: "Space 2" },
  { value: "spacfde3", label: "Space 3" },
  { value: "dfsv", label: "Space 1" },
  { value: "sfdv", label: "Space 2" },
  { value: "spasdfsdce3", label: "Space 3" },
  { value: "spaxbce1", label: "Space 1" },
  { value: "spaxvsce2", label: "Space 2" },
  { value: "spacsfdse3", label: "Space 3" },
  { value: "spacwerwe1", label: "Space 1" },
  { value: "s34643pace2", label: "Space 2" },
  { value: "spacgfndge3", label: "Space 3" },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#e6f7ff" : "#fff",
    borderColor: state.isFocused ? "#1890ff" : "#ccc",
    boxShadow: state.isFocused ? "0 0 0 1px #1890ff" : "none",
    '&:hover': {
      borderColor: "#1890ff"
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#1890ff"
      : state.isFocused
      ? "#e6f7ff"
      : "white",
    color: state.isSelected ? "white" : "#333",
  }),
};

function App() {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>Input 1</h2>
        <Select
          value={selectedOption1}
          onChange={setSelectedOption1}
          options={options}
          placeholder="Select Space"
          isSearchable={false}
          styles={customStyles}
        />

        <h2>Input 2</h2>
        <Select
          value={selectedOption2}
          onChange={setSelectedOption2}
          options={options}
          placeholder="Select Space"
          isSearchable={false}
          styles={customStyles}
        />

        <h2>Input 3</h2>
        <Select
          value={selectedOption3}
          onChange={setSelectedOption3}
          options={options}
          placeholder="Select Space"
          isSearchable={false}
          styles={customStyles}
        />
      </header>
    </div>
  );
}

export default App;
