import { render } from "@testing-library/react";
import { PersonCardSkeleton } from "@/components/PersonCardSkeleton";

describe("PersonCardSkeleton", () => {
  it("should render", () => {
    const { getByLabelText } = render(<PersonCardSkeleton />);

    const loaderSkeleton = getByLabelText("Loading person data...");
    expect(loaderSkeleton).toBeInTheDocument();
  });
});
