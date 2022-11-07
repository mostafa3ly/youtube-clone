import { ChangeEvent, useState } from "react";
import { api } from "./api";
import "./App.css";
import Content from "./components/Content";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import useIsMounted from "./hooks/useIsMounted";
import { SearchResult } from "./interfaces/SearchResult";
import { Video } from "./interfaces/Video";

function App() {
  const isMounted = useIsMounted();

  const [searchText, setSearchText] = useState("");
  const [, setResults] = useState<Video[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  const handleFetchResults = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const { data } = await api.get<SearchResult>("/", {
        params: { q: searchText },
      });
      if (isMounted()) {
        setResults(data.items);
        setTotalResults(data.pageInfo.totalResults);
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
      <Content isLoading={isLoading} />
    </div>
  );
}

export default App;
