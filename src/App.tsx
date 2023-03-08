import Container from "@mui/material/Container";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragNDrop from "./components/DragNDrop";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container maxWidth={false}>
        <DragNDrop />
      </Container>
    </DndProvider>
  );
}

export default App;
