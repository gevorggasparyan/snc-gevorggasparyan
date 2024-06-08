import { render, fireEvent } from "@testing-library/react";
import { Button } from "@/components/Button";

describe("Button", () => {
  it("should render children", () => {
    const { getByText } = render(<Button>Hello World</Button>);

    const buttonElement = getByText("Hello World");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should apply className", () => {
    const { container } = render(
      <Button className="some-class">Hello World</Button>,
    );
    const buttonElement = container.querySelector(".some-class");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should handle click events", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Hello World</Button>,
    );
    const buttonElement = getByRole("button");

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalled();
  });
});
