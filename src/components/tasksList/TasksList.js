import Task from "../task/Task"

function TasksList(props) {
  return (
    <div>
      {props.myTasks.map((t) => {
        return <Task _id={t._id} title={t.title} duration={t.duration} />
      })}
    </div>
  )
}

export default TasksList
