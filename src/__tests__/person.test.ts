import { createMocks } from "node-mocks-http";
import handler from "../pages/api/person";
import { getToken } from "next-auth/jwt";
import { getPersonFromDB } from "../utils/server/db";
import { NextApiRequest, NextApiResponse } from "next";

jest.mock("next-auth/jwt");
jest.mock("../utils/server/db");

const mockGetToken = getToken as jest.Mock;
const mockGetPersonFromDB = getPersonFromDB as jest.Mock;

describe("/api/person", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should handle unauthorized requests", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "GET",
      query: {
        person: "PersonA",
      },
    });

    jest.mock("next-auth/jwt", () => ({
      getToken: jest.fn().mockResolvedValue(null),
    }));

    await handler(req, res);

    expect(res._getStatusCode()).toBe(401);
    expect(res._getData()).toBe("Error: Unauthorized");
  });

  it("should return 404 if person is not found", async () => {
    mockGetToken.mockResolvedValue("mock-token");
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "GET",
      query: {
        person: "UnknownPerson",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(404);
    expect(res._getData()).toBe("Error: Person not found");
  });

  it("should return 500 for PersonC", async () => {
    mockGetToken.mockResolvedValue("mock-token");
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "GET",
      query: {
        person: "PersonC",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(500);
    expect(res._getData()).toBe("Error: Request failed for Person C");
  });

  it("should return 200 and the user for valid person", async () => {
    mockGetToken.mockResolvedValue("mock-token");
    const mockUser = { name: "John Doe", person: "PersonA" };
    mockGetPersonFromDB.mockResolvedValue(mockUser);

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "GET",
      query: {
        person: "PersonA",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(mockUser);
  });

  it("should return 500 if getPersonFromDB fails", async () => {
    mockGetToken.mockResolvedValue("mock-token");
    mockGetPersonFromDB.mockResolvedValue(null);

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "GET",
      query: {
        person: "PersonA",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(500);
    expect(res._getData()).toBe("Error: Request failed");
  });

  it("should return 404 for non-GET requests", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "POST",
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(404);
    expect(res._getData()).toEqual({ user: null });
  });
});
