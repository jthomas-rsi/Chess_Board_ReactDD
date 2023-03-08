import { type } from "os";
import { useDrag } from "react-dnd";

interface PictureProps {
  id: number | undefined;
  src: string;
}

const Picture = ({ id, src }: PictureProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={src}
      id={`${id}`}
      alt={`draggable number art-${id}`}
      width={"150px"}
      height={"200px"}
      style={{
        border: isDragging ? "%px solid grey" : "Opx",
      }}
    />
  );
};
export default Picture;
