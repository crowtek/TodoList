import { useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import NewTask from "./NewTask";

const Task = () => {
    const {projectState,handleDeleteTask,handleAddTask} = useContext(ProjectContext);

    return (
        <section >  
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
            <NewTask onAddTask={handleAddTask}/>
            {
                projectState.tasks.length === 0 ? 
                <p className="text-stone-800 my-4">This project doas not habe any task yet.</p> :
                <ul className="p-2 mt-4 rounded-md bg-stone-100">
                    {projectState.tasks.map((task) => {
                        return (                  
                            <li key={task.id} className="flex justify-between my-4 p-2">
                                <span>{task.text}</span>
                                <button onClick={() => handleDeleteTask(task.id)} className="text-stone-700 hover:text-red-500">Clear</button>
                            </li>
                        )
                    })}
                </ul>
            }
        </section>  
    )
}

export default Task;