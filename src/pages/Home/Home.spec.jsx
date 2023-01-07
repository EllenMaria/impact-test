import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from ".";

describe("<Home />", () => {
  it("should render search, filters, and pagination", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  });
});
