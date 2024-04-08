
import { useState } from "react";
const NewTask = ({onAddTask}) => {
    const [enteredTask, setEnteredTask] = useState('');

    const handleChange = (event) => {
        setEnteredTask(event.target.value)
    }

    const handleClick = () => {
        onAddTask(enteredTask);
        setEnteredTask("");
    }

    return (
        <div className="flex item-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask}/>
            <button onClick={handleClick} className="text-stone-600 hover:text-stone-950">Add Task</button>
        </div>
    )
}

export default NewTask;