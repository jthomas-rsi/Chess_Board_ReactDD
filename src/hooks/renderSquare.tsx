// This function will render chess board squares and the knight piece
import Knight from "../components/Knight";
import Square from "../components/Square";

const renderSquare = (
  x: number,
  y: number,
  knightPos: number[]
): JSX.Element => {
  const backColor = (x + y) % 2 === 1;
  const isKnightHere = knightPos[0] === x && knightPos[1] === y;
  const knightPiece: JSX.Element | null = isKnightHere ? <Knight /> : null;
  return <Square isBlack={backColor} children={knightPiece} />;
};

export default renderSquare;
