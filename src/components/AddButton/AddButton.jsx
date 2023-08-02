import "./AddButton.css"

export const AddButton = ({onClick}) => {
  return (
    <button onClick={onClick} type='button' className="add-btn"><span data-notranslate className="material-symbols-outlined more-icon notranslate">
    add_circle
    </span> Add a new task</button>
  )
}
