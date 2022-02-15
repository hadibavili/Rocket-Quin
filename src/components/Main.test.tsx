import Main from "./Main";
import { customRender } from "test/test-utils";
import { waitForElementToBeRemoved } from "@testing-library/react";

describe("Main", () => {
  describe("When the fetch operation is pending", () => {
    it("show a loading", () => {
      const { getByText } = customRender(<Main />);

      expect(getByText(/Loading/i)).toBeInTheDocument();
    });

    it("hide loading", async () => {
      const { queryByText } = customRender(<Main />);

      // wait for fetching data
      await waitForElementToBeRemoved(() => queryByText(/Loading/i), {
        timeout: 5000,
      });
    });
  });
});
