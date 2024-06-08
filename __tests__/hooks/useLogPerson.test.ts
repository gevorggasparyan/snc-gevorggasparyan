import { renderHook } from "@testing-library/react";
import { useLogPerson } from "@/hooks/useLogPerson";
import { mainLayoutWrapper } from "../layout/MainLayout.test";
import { mockUsers } from "@/utils/server/mock-users";

describe("useLogPerson", () => {
  beforeEach(() => {
    console.log = () => {};
  });

  it("should not log if date is not provided", () => {
    const logSpy = jest.spyOn(console, "log");

    const person = mockUsers.PersonB!;
    const date = null;

    renderHook(() => useLogPerson(person, date), {
      wrapper: mainLayoutWrapper,
    });

    expect(logSpy).not.toHaveBeenCalled();
  });

  it("should log if date is provided", () => {
    const logSpy = jest.spyOn(console, "log");

    const person = mockUsers.PersonA!;
    const date = new Date();

    renderHook(() => useLogPerson(person, date), {
      wrapper: mainLayoutWrapper,
    });

    expect(logSpy).toHaveBeenCalledWith(person, date);
  });
});
