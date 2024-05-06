
import {
	DefaultContextMenu,
	DefaultContextMenuContent,
	TLUiContextMenuProps,
	TldrawUiMenuGroup,
	TldrawUiMenuItem,
} from 'tldraw'

import 'tldraw/tldraw.css'
import MakeMenu from '../MenuItems/menus' 


function ContextMenu(props: TLUiContextMenuProps) {
	let items = [
    MakeMenu('0x03', 'About', 'info', () => { console.log('About')})
  ]

  let menus = items.map((f) => {
    return <TldrawUiMenuItem
      id={f.id}
      label={f.label}
      icon={f.icon}
      readonlyOk
      onSelect={f.callback}
    />
  })

  return (
		<DefaultContextMenu {...props}>
			<TldrawUiMenuGroup id="ContextMenu">
        {menus}
			</TldrawUiMenuGroup>
			<DefaultContextMenuContent />
		</DefaultContextMenu>
	)
}

export default ContextMenu; 

