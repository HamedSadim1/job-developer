import { ReactNode } from "react";

/**
 * A container component that wraps its children in a div with the class name "container".
 *
 * @param {ReactNode} children - The content to be rendered inside the container.
 * @returns {JSX.Element} The container component.
 */
export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="container">{children}</div>;
};
