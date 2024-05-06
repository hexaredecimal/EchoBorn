
import { Tldraw, TLUiEventHandler, DefaultMainMenu, DefaultMainMenuContent, TldrawUiMenuGroup , TLComponents, TldrawUiMenuItem} from "tldraw"
import 'tldraw/tldraw.css'

import { useCallback, useState } from "react";
import MakeMenu from '../MenuItems/menus' 

import { HandleNewProject } from "../EventHandlers/editorevents";
import ContextMenu from "./contextmenu";

function ProjectMenu() {
  let items = [
    MakeMenu("0x00", "New Project", "Project", HandleNewProject),
    MakeMenu("0x01", "Open Project", "Open", HandleNewProject)
  ]

  let menus = items.map((item) => {
    return <TldrawUiMenuItem
      id={item.id}
      label={item.label}
      icon={item.icon}
      readonlyOk
      onSelect={item.callback}
    />
  })

  return (
    <TldrawUiMenuGroup id="Project">
      {menus}
    </TldrawUiMenuGroup>
  )
}

function CustomActionMenu() {
  return (
		<DefaultMainMenu>
      <ProjectMenu />
      <DefaultMainMenuContent />
		</DefaultMainMenu>
	)
}

const components: TLComponents = {
	MainMenu: CustomActionMenu,
  ContextMenu: ContextMenu
}

function App() {
  // const [count, setCount] = useState(0)

  const [ui_state, setUiState] = useState<any>()

  const handle_Ui = useCallback<TLUiEventHandler>((name, data:any) => {
    console.log(name, " ", data)
    setUiState
  }, [ui_state])

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw onUiEvent={handle_Ui} components={components}/>
		</div>
  )
}

export default App
