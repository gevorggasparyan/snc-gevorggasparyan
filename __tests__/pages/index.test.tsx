import { render } from "@testing-library/react";
import Home from "@/pages";
import { mainLayoutWrapper } from "../layout/MainLayout.test";

describe("Home", () => {
  it("should render main layout", () => {
    const { getByRole } = render(<Home />, { wrapper: mainLayoutWrapper });

    const main = getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
