import { ChangeEvent, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [searchText, setSearchText] = useState("");

  const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  return (
    <div className="App">
      <Header
        onChangeSearchText={handleChangeSearchText}
        searchText={searchText}
      />
    </div>
  );
}

export default App;
