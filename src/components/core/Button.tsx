import React, { forwardRef } from "react";

type Props = React.ComponentPropsWithRef<"button">;

export const Button: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(
  ({ children }, ref) => {
    return <button ref={ref}>{children}</button>;
  }
);
