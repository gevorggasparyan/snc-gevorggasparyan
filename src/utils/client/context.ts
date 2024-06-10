import { Context, useContext } from "react";

export const useSafeContext = <ContextValue>(
  context: Context<ContextValue>,
) => {
  const safeContext = useContext(context);

  if (!safeContext) {
    throw new Error("You can't use useContext outside of the provider");
  }

  return safeContext;
};
