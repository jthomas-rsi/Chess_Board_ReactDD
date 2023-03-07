import { ReactNode, useState } from "react";

interface SquareProps {
  bgColor?: "black" | "white";
  children?: ReactNode;
  fillColor?: "black" | "white";
}

const Square = ({ bgColor, children }: SquareProps) => {
  const [bgC, setBgC] = useState(bgColor);
  const [fillC, setFillC] = useState("white");

  return (
    <div
      style={{
        backgroundColor: bgC,
        color: fillC,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default Square;
