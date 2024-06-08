import { render } from "@testing-library/react";
import { Time } from "@/components/Time";
import { formatFullDate } from "@/utils/client/date";

describe("Time", () => {
  it("should render", () => {
    const date = new Date(0);

    const { getByText } = render(<Time date={date} />);

    const timeElement = getByText(formatFullDate(date));
    expect(timeElement).toBeInTheDocument();
    expect(timeElement.getAttribute("datetime")).toBe(date.toISOString());
  });
});
