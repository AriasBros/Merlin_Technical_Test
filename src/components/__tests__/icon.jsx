import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Icon from "../icon";

describe("Icon", () => {
  function renderComponent() {
    render(<Icon id="close" />);
  }

  it("renders as aria hidden", async () => {
    renderComponent();

    expect(screen.getByRole("img", { hidden: true })).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("renders with alt attribute", async () => {
    renderComponent();

    expect(screen.getByRole("img", { hidden: true })).toHaveAttribute("alt");
  });
});
