import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { Button, ThemeButton } from "shared/ui/Button/Button";

describe("Button", () => {
  test("render with text", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  test("with theme clear", () => {
    render(<Button theme={ThemeButton.CLEAR}/>);
    expect(screen.getByTestId("button")).toHaveClass('clear');;
  });
});
