import Heading from ".";
import { renderTheme } from "../../styles";

describe("<Heading />", () => {
  it("should render with default values", () => {
    renderTheme(<Heading light={true}>Texto</Heading>);
  });
});
