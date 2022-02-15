import { fireEvent, waitForElementToBeRemoved } from "@testing-library/react";
import { customRender } from "test/test-utils";

import Map from "./Map";
import Main from "components/Main";

describe("Map", () => {
  it("Map should be rendered", () => {
    let { getByText } = customRender(<Map />);
    expect(getByText("Leaflet")).toBeInTheDocument();
  });

  it("Popup should be shown", async () => {
    let { queryByText, getAllByRole, getByText } = customRender(<Main />);

    // wait for fetching data
    await waitForElementToBeRemoved(() => queryByText(/Loading/i), {
      timeout: 5000,
    });

    // get the first point
    let firstPoint = getAllByRole("img")[0] as HTMLImageElement;

    // click on point
    fireEvent.click(firstPoint);

    // popup should be shown
    expect(getByText(/Lunch date/i)).toBeInTheDocument();
  });
});
