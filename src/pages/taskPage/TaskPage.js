import Task from "../../components/task/Task"
import TaskForm from "../../components/taskForm/TaskForm"
import TasksList from "../../components/tasksList/TasksList"

function TaskPage() {
  const steps = ["enter the title", "click on button"]
  const loading = false
  const tasks = [
    {
      _id: "1",
      title: "learn html",
      duration: 50,
    },
    {
      _id: "2",
      title: "learn angular",
      duration: 120,
    },
    {
      _id: "3",
      title: "learn react",
      duration: 100,
    },
  ]
  return (
    <div>
      <ul>
        {steps.map((s) => {
          return <li>{s}</li>
        })}
      </ul>
      <TaskForm />
      {loading && <div>loading...</div>}
      {!loading && <TasksList myTasks={tasks} />}
    </div>
  )
}

export default TaskPage
