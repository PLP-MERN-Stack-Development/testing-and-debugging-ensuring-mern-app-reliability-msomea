// client/src/components/Button.jsx
export const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

// client/src/tests/unit/Button.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../components/Button";

test("renders button and handles click", () => {
  const handleClick = jest.fn();
  render(<Button text="Click me" onClick={handleClick} />);
  fireEvent.click(screen.getByText("Click me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
