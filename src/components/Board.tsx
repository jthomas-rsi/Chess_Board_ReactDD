import Knight from "./Knight";
import Sqaure from "./Square";

interface BoardProps {
  knightPosition?: Number[];
}

const Board = ({ knightPosition }: BoardProps) => {
  return (
    <div>
      <Sqaure bgColor="black" children={<Knight />} />
    </div>
  );
};

export default Board;
