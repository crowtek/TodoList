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
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const handleCancel = () => {
      setProjectState((prevState) => {
        return{
          ...prevState,
          selectedProjectId: undefined,
        };
      });
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <Sidebar onStartProject={handleStartProject} projects={projectState.projects}/>
      
      {
        projectState.selectedProjectId === undefined ? 
        <NoProjectSelected onStartProject={handleStartProject}/> :
        <NewProject onAdd={handleAddProject} onCancel={handleCancel}/>
      }
    </main>
  );
}

export default App;
