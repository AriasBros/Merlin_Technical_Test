import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../button";

test("renders the attribute label", async () => {
  render(<Button label="Click me" />);

  expect(screen.getByRole("button")).toHaveTextContent("Click me");
});

test("renders the button as a link", async () => {
  render(<Button label="Click me" href="https://www.google.com" />);

  expect(screen.getByRole("link", { name: "Click me" })).toHaveAttribute(
    "href",
    "https://www.google.com",
  );
});

test("renders the button as dense", async () => {
  render(<Button dense label="Click me" />);

  expect(screen.getByRole("button")).toHaveClass("button--dense");
});

test("renders the button as primary type", async () => {
  render(<Button type="primary" label="Click me" />);

  expect(screen.getByRole("button")).toHaveClass("button--primary");
});

test("renders the button as disabled", async () => {
  render(<Button disabled label="Click me" />);

  expect(screen.getByRole("button")).toHaveClass("button--disabled");
  expect(screen.getByRole("button")).toBeDisabled();
});

test("renders the button with standard type even when type is provided as null or undefined", async () => {
  render(<Button type={null} label="Click me" />);

  expect(screen.getByRole("button")).toHaveClass("button--standard");
});
