import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BackBar from "../back_bar";

describe("BackBar", () => {
  const title = "This is a back bar";
  const href = "https://www.google.com";

  function renderBackBar() {
    render(<BackBar title={title} href={href} />);
  }

  it("renders a navigation bar", async () => {
    renderBackBar();

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders a link to href with title", async () => {
    renderBackBar();

    expect(screen.getByRole("link")).toHaveAttribute("href", href);
    expect(screen.getByRole("link")).toHaveAttribute("title", title);
  });
});
