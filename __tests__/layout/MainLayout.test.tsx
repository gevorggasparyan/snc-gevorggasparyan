import { FunctionComponent, PropsWithChildren } from "react";
import { render, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainLayout } from "@/layouts/MainLayout";
import { LogProvider } from "@/context/LogProvider";
import { formatFullDate } from "@/utils/client/date";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const mainLayoutWrapper: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LogProvider>{children}</LogProvider>
    </QueryClientProvider>
  );
};

describe("MainLayout", () => {
  it("should render", () => {
    const { getByRole } = render(<MainLayout />, {
      wrapper: mainLayoutWrapper,
    });

    const main = getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("should change current time each second", async () => {
    const { getByText } = render(<MainLayout />, {
      wrapper: mainLayoutWrapper,
    });

    expect(getByText(formatFullDate(new Date()))).toBeInTheDocument();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    expect(getByText(formatFullDate(new Date()))).toBeInTheDocument();
  });

  it("should not render person card when there is no person data", () => {
    const { getByText } = render(<MainLayout />, {
      wrapper: mainLayoutWrapper,
    });

    expect(() => getByText("Follow")).toThrow();
  });
});
