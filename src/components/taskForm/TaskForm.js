import "./taskForm.css"
function TaskForm() {
  const add = "Add a task"
  function help() {
    return "help"
  }
  return (
    <form action="" className="form">
      <input type="text" name="task" id="" />
      <button type="submit">{add}</button>
      {help()}
    </form>
  )
}

export default TaskForm
