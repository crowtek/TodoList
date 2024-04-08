import { useRef, useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = () => {
    const {handleAddProject, handleCancel} = useContext(ProjectContext);
    const modal = useRef();
    const title = useRef();
    const discription = useRef();
    const dueDate = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDiscription = discription.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === "" || enteredDiscription.trim() === "" || enteredDueDate.trim() === ""){
             modal.current.open();
             return;
        }

        handleAddProject({
            title: enteredTitle,
            description: enteredDiscription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className="text-xl font-bold text-stone-700 my-4 ">Invalid Input</h2>
                <p className="text-stone-600 mb-4 ">Ops... looks ike you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4 ">Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={discription} label="Description" textarea/>
                    <Input type="date" ref={dueDate} label="Due Date"/>
                </div>
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button className="text-stone-800 hover:text-stone-950" onClick={handleCancel}>Cancel</button></li>
                    <li>
                        <button 
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 hover:text-stone-100"
                        onClick={handleSave}
                        >
                            Save
                        </button>
                    </li>
                </menu>
            </div>
        </>
    )
}

export default NewProject;