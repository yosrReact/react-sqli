import Task from "../../components/task/Task"
import TaskForm from "../../components/taskForm/TaskForm"

function TaskPage() {
  return (
    <div>
      <TaskForm />
      <Task />
      <Task />
      <Task />
    </div>
  )
}

export default TaskPage
