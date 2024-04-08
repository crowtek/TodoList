
import Sidebar from "./components/Sidebar";
import ProjectContextProvider from "./components/ProjectContext";
import ProjectDisplay from "./components/ProjectDisplay";


function App() {
  return (
    <ProjectContextProvider>
      <main className="h-screen flex gap-32 ">
        <Sidebar/>
        <ProjectDisplay /> 
      </main>
    </ProjectContextProvider>
  );
}

export default App;
