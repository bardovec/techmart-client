import { render } from "@testing-library/react";
import Contacts from './Contacts'

describe("Test Contacts", () => {
  it("Smoke test for Contact", () => {
    render(<Contacts />);
  });

  it("OnClick button in Contacts", () => {
    const onClick = jest.fn();
      render(<Contacts />);

    const button = document.getElementById("feedbackBtn");
    expect(button).toBeDefined();
    button.addEventListener("click", onClick);
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
