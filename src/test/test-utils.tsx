import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { store } from "app/store";

const customRender = (ui: React.ReactNode) => {
   return render(<Provider store={store}>{ui}</Provider>);
};

export { customRender };
