import { ChangeEvent, useState } from "react";
import { fetchResults } from "./api/fetchResults";
import "./App.css";
import Content from "./components/Content";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import useIsMounted from "./hooks/useIsMounted";
import { BaseItem } from "./interfaces/BaseItem";

function App() {
  const isMounted = useIsMounted();

  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<BaseItem[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  const handleFetchResults = async (): Promise<void> => {
    try {
      if (!searchText) return;
      setIsLoading(true);
      const result = await fetchResults(searchText);
      if (isMounted()) {
        setResults(result.items);
        setTotalResults(result.pageInfo.totalResults);
      }
    } catch {
    } finally {
      if (isMounted()) setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Header
        onChangeSearchText={handleChangeSearchText}
        searchText={searchText}
        onSubmit={handleFetchResults}
      />
      <FilterBar total={totalResults} />
      <Content isLoading={isLoading} results={results} />
    </div>
  );
}

export default App;
