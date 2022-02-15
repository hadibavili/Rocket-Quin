import { cleanup, fireEvent } from "@testing-library/react";
import { customRender } from "test/test-utils";

import Main from "components/Main";

describe("Date picker", () => {
  it("Date picker popup should shown", async () => {
    let { getAllByRole, getByText } = customRender(<Main />);

    // get first input of date picker
    let firstInput = getAllByRole("textbox")[0] as HTMLInputElement;

    // click on the input
    fireEvent.click(firstInput);

    // get current year
    const currentYear = new Date().getFullYear().toString();
    const yearRegEx = new RegExp(currentYear);

    // popup should be shown
    expect(getByText(yearRegEx)).toBeInTheDocument();

    cleanup();
  });
});
