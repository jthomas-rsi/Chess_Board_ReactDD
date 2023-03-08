import { Grid } from "@mui/material";
import renderSquare from "../hooks/renderSquare";

const Board = () => {
  const numSquares = Array.from(Array(64).keys());

  return (
    <Grid container columns={16}>
      {numSquares.map((_, index) => {
        return (
          <Grid item key={index} xs={2}>
            {renderSquare(index, 0, [index, 0])}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Board;
