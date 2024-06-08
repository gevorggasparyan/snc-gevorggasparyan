import { renderHook } from "@testing-library/react";
import { useSafeContext } from "@/utils/client/context";
import { LogContext } from "@/context/LogProvider";
import { mainLayoutWrapper } from "../../layout/MainLayout.test";
import { createContext } from "react";

describe("useSafeContext", () => {
  it("should provide context value", () => {
    const { result } = renderHook(() => useSafeContext(LogContext), {
      wrapper: mainLayoutWrapper,
    });

    expect(result).toBeTruthy();
  });

  it("should throw", () => {
    console.error = () => {};

    expect(() => {
      renderHook(() => useSafeContext(createContext(undefined)));
    }).toThrow("You can't use useContext outside of the provider");
  });
});
