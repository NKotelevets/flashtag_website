// Minimal declaration to satisfy TypeScript when resolving `next/link`.
declare module "next/link" {
  import type { ReactNode } from "react";
  export interface LinkProps {
    href: string;
    children?: ReactNode;
    className?: string;
  }
  const Link: (props: LinkProps) => JSX.Element;
  export default Link;
}
