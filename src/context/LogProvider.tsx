import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useState,
} from "react";
import { useSafeContext } from "@/utils/client/context";

type LogProviderProps = PropsWithChildren & {
  enableLogs?: boolean;
};

export type LogContextValue = {
  enableLogs: boolean;
  toggleLogs: (toggle: boolean) => void;
};

const defaultValue: LogContextValue = {
  enableLogs: true,
  toggleLogs: () => {},
};

export const LogContext = createContext<LogContextValue>(defaultValue);

export const useLog = () => useSafeContext(LogContext);

export const LogProvider: FunctionComponent<LogProviderProps> = ({
  enableLogs: initialEnableLogs = defaultValue.enableLogs,
  children,
}) => {
  const [enableLogs, setEnableLogs] = useState<boolean>(initialEnableLogs);

  return (
    <LogContext.Provider
      value={{
        enableLogs,
        toggleLogs: setEnableLogs,
      }}
    >
      {children}
    </LogContext.Provider>
  );
};
