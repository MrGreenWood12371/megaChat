import { ReactNode } from "react";
import { Link as RouterLink, To } from "react-router-dom";
import "./style.css";

interface LinkProps {
  to: To;
  children: ReactNode;
}

const Link = ({ to, children }: LinkProps) => {
  return (
    <RouterLink className="link" to={to}>
      {children}
    </RouterLink>
  );
};

export default Link;
