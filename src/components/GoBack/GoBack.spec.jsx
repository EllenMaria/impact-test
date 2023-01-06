import { render, screen } from "@testing-library/react";
import { GoBack } from ".";
import { BrowserRouter } from "react-router-dom";

describe("<GoBack />", () => {
  it("should render the button with the text 'Go Back'", () => {
    render(
      <BrowserRouter>
        <GoBack />
      </BrowserRouter>,
    );

    const button = screen.getByRole("button", { name: /go back/i });
    expect(button).toBeInTheDocument();
  });
});
