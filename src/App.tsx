import { ChangeEvent, useState } from "react";
import { api } from "./api";
import "./App.css";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import { SearchResult } from "./interfaces/SearchResult";
import { Video } from "./interfaces/Video";

function App() {
  const [searchText, setSearchText] = useState("");
  const [, setResults] = useState<Video[]>([]);

  const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  const handleFetchResults = async (): Promise<void> => {
    try {
      const { data } = await api.get<SearchResult>("/", {
        params: { q: searchText },
      });
      setResults(data.items);
    } catch {}
  };

  return (
    <div className="App">
      <Header
        onChangeSearchText={handleChangeSearchText}
        searchText={searchText}
        onSubmit={handleFetchResults}
      />
      <FilterBar />
    </div>
  );
}

export default App;
