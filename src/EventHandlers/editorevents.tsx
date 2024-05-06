
import { track, useEditor } from "tldraw";

export const HandleNewProject = () => {
  const editor = useEditor()
  editor.selectAll()
  
  for (let shape of editor.getSelectedShapes()) {
    editor.deleteShape(shape)
  }
  const path = editor.getPath()
  console.log(path)
}

