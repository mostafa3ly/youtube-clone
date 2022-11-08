import { ChangeEvent, useState } from "react";
import { fetchResults } from "./api/fetchResults";
import Content from "./components/Content";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import { DurationFilter } from "./enums/DurationFilter";
import { TypeFilter } from "./enums/TypeFilter";
import useIsMounted from "./hooks/useIsMounted";
import { BaseItem } from "./interfaces/BaseItem";
import "./App.css";

function App() {
  const isMounted = useIsMounted();

  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<BaseItem[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState(TypeFilter.all);
  const [duration, setDuration] = useState(DurationFilter.anyTime);

  const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  const handleChangeType = (e: ChangeEvent<HTMLSelectElement>): void => {
    setType(e.target.value as TypeFilter);
  };

  const handleChangeDuration = (e: ChangeEvent<HTMLSelectElement>): void => {
    setDuration(e.target.value as DurationFilter);
  };

  const handleFetchResults = async (
    e: ChangeEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      e.preventDefault();
      if (!searchText) return;
      setIsLoading(true);
      const result = await fetchResults(searchText, type);
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
      <FilterBar
        total={totalResults}
        onChangeType={handleChangeType}
        type={type}
        duration={duration}
        onChangeDuration={handleChangeDuration}
      />
      <Content isLoading={isLoading} results={results} />
    </div>
  );
}

export default App;
