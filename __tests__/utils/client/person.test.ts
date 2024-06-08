import { getPerson } from "@/utils/client/person";
import { mockUsers } from "@/utils/server/mock-users";
import { Person } from "@/utils/common/person";

describe("getPerson", () => {
  const result = mockUsers.PersonA;

  beforeEach(() => {
    global.AbortController = jest.fn(() => ({
      abort: jest.fn(),
    })) as jest.Mock;

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(result),
      }),
    ) as jest.Mock;
  });

  it("should fetch person api", async () => {
    const response = await getPerson({
      queryKey: ["person", Person.PersonA],
      meta: undefined,
      signal: jest.fn() as unknown as AbortSignal,
    });

    expect(response).toBe(result);
  });
});
