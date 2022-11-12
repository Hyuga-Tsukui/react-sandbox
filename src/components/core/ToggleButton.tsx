import React, { forwardRef } from "react";

type ToggleButtonProps = {
  children: React.ReactNode;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

type ToggleButtonGroup = React.ComponentPropsWithRef<"div"> & {
  children: React.ReactNode;
};

export const ToggleButtonGroup: React.FC<ToggleButtonGroup> = forwardRef<
  HTMLDivElement,
  ToggleButtonGroup
>(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});
