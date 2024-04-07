import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

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

  const handleSelectproject = (id) => {
    setProjectState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  const handleDelete = () => {
    setProjectState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);


  return (
    <main className="h-screen my-8 flex gap-8 ">
      <Sidebar onStartProject={handleStartProject} projects={projectState.projects} onSelect={handleSelectproject} selectedProjectId={projectState.selectedProjectId}/>
      
      {
        projectState.selectedProjectId === undefined ? <NoProjectSelected onStartProject={handleStartProject}/> :
        projectState.selectedProjectId === null ? <NewProject onAdd={handleAddProject} onCancel={handleCancel}/> :
        <SelectedProject projects={selectedProject} deleteProject={handleDelete}/>
      }
    </main>
  );
}

export default App;
