import {
  ButtonHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
} from "react";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  outline?: boolean;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  outline = false,
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={classNames(
        "shadow border-2 border-blue-600 px-6 py-2 text-center text-blue-600 rounded focus:outline-none transition font-bold",
        {
          "bg-blue-600 hover:border-blue-800 hover:bg-blue-800 active:bg-blue-900 active:border-blue-900 text-white":
            !outline,
        },
        {
          "hover:bg-blue-600 hover:text-white active:bg-blue-800 active:border-blue-800":
            outline,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
