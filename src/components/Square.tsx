import { ReactNode, useState } from "react";

interface SquareProps {
  isBlack?: boolean;
  children?: ReactNode | null;
}

const Square = ({ isBlack, children }: SquareProps) => {
  const [bgC, setBgC] = useState(isBlack ? "black" : "white");
  const [fillC, setFillC] = useState(isBlack ? "white" : "black");
  return (
    <div
      style={{
        backgroundColor: bgC,
        color: fillC,
        minWidth: "100%",
        minHeight: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default Square;
