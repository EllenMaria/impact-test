import App from "./App";
import { renderTheme } from "../styles";

describe("<App />", () => {
  it("should render with default values", () => {
    renderTheme(<App />);
  });
});
