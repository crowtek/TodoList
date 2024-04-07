import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  const handleStartProject = () => {
    setProjectState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  const handleAddProject = (projectData) => {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <Sidebar onStartProject={handleStartProject}/>
      
      {
        projectState.selectedProjectId === undefined ? 
        <NoProjectSelected onStartProject={handleStartProject}/> :
        <NewProject onAdd={handleAddProject}/>
      }
    </main>
  );
}

export default App;
