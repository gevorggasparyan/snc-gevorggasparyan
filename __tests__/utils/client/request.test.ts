import { request } from "@/utils/client/request";

describe("request", () => {
  const result = { test: 100 };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(result),
      }),
    ) as jest.Mock;
  });

  it("should fetch", async () => {
    const response = await request<typeof result>("GET", "test");

    expect(response).toBe(result);
  });
});
