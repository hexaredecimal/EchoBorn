

function MakeMenu(id: string, label: string, icon: string, callback: () => void) {
  return {
    id: id,
    label: label, 
    icon: icon,
    callback: callback
  }
}

export default MakeMenu; 

