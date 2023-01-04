import Characters from "../components/Card";
import { CharactersProvider } from "../contexts/CharactersProvider/CharactersProvider";
import { FilterProvider } from "../contexts/FilterProvider/FilterProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./DetailPage";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <CharactersProvider>
      <FilterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="character/:name" element={<DetailPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </CharactersProvider>
  );
}

export default App;
