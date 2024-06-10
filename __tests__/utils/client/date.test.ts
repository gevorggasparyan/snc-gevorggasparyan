import { formatFullDate } from "@/utils/client/date";

describe("formatFullDate", () => {
  it("should format", () => {
    const date = new Date(0);

    const dateWithoutTimeZone = new Date(date)
      .toUTCString()
      .replace(" GMT", "");

    const formatted = formatFullDate(new Date(dateWithoutTimeZone));

    expect(formatted).toBe(`01-01-1970 : 00:00:00`);
  });
});
