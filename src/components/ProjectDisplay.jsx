import { useContext } from "react";
import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import SelectedProject from "./SelectedProject";
import {ProjectContext} from "./ProjectContext";


const ProjectDisplay = () => {
    const { projectState } = useContext(ProjectContext);
  
    return (
      <>
        {
          projectState.selectedProjectId === undefined ? <NoProjectSelected /> :
          projectState.selectedProjectId === null ? <NewProject /> :
          <SelectedProject />
        }
      </>
    );
};

export default ProjectDisplay;