import { render } from "@testing-library/react";
import { LogProvider, useLog } from "@/context/LogProvider";

const TestLogProviderChild = () => {
  const { enableLogs } = useLog();

  return <p>{String(enableLogs)}</p>;
};

describe("LogProvider", () => {
  it("should provide value for children components", () => {
    const enableLogs = true;

    const { getByText } = render(
      <LogProvider enableLogs={enableLogs}>
        <TestLogProviderChild />
      </LogProvider>,
    );

    const enableLogsElement = getByText(String(enableLogs));
    expect(enableLogsElement).toBeInTheDocument();
  });
});
