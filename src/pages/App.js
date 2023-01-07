import { CharactersProvider, FilterProvider } from "../contexts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./Detail";
import PageNotFound from "./PageNotFound";
import Home from "./Home";

function App() {
  return (
    <CharactersProvider>
      <FilterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="character/:name" element={<DetailPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </CharactersProvider>
  );
}

export default App;
