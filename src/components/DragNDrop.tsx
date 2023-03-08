import Picture from "./Picture";
import pictureList from "../data/pictureList";

const DragNDrop = () => {
  return (
    <>
      <div className="Pictures">
        {pictureList.map((picture) => {
          return <Picture id={picture.id} src={picture.src} />;
        })}
      </div>
      <div className="Board"></div>
    </>
  );
};

export default DragNDrop;
