import { useState, createContext } from "react"

export const ProjectContext = createContext();

const ProjectContextProvider = ({children}) => {
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    })

    const handleAddTask = (text) => {
        setProjectState(prevState => {
          const newTask = {
            text: text,
            projectId: prevState.selectedProjectId,
            id: Math.random()
          };
    
          return {
            ...prevState,
            tasks: [newTask, ...prevState.tasks]
          }
        })
      } 
    
      const handleDeleteTask = (id) => {
        setProjectState((prevState) => {
          return{
            ...prevState,
            tasks: prevState.tasks.filter((task) => task.id !== id)
          };
        });
      }
    
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


    const ContextValue = {
        projectState, 
        setProjectState,
        handleAddTask,
        handleDelete,
        handleSelectproject,
        handleCancel,
        handleAddProject,
        handleStartProject,
        handleDeleteTask,
        selectedProject
    }

    return (
        <ProjectContext.Provider value={ContextValue}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;