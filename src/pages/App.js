import * as Styled from "../styles";
// import Heading from "../components/Heading";
import Characters from "../components/Card";
import { DataProvider } from "../contexts";
import { FilterProvider } from "../contexts/FilterProvider";

function App() {
  return (
    <div className="App">
      <Styled.Wrapper>
        {/* <Heading light={true}>Olá</Heading> */}
        <DataProvider>
          <FilterProvider>
            <Characters />
          </FilterProvider>
        </DataProvider>
      </Styled.Wrapper>
    </div>
  );
}

export default App;
