
import NewTask from "./NewTask";
const Task = ({tasks, onDeleteTask, onAddTask}) => {

    return (
        <section >  
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
            <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask}/>
            New Task
            {
                tasks.length === 0 ? 
                <p className="text-stone-800 my-4">This project doas not habe any task yet.</p> :
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((task) => {
                        return (                  
                            <li key={task.id} className="flex justify-between my-4">
                                <span>{task.text}</span>
                                <button onClick={() => onDeleteTask(task.id)} className="text-stone-700 hover:text-red-500">Clear</button>
                            </li>
                        )
                    })}
                </ul>
            }
        </section>  
    )
}

export default Task;