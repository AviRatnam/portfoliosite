import IntroPanel from "./IntroPanel";
import AboutMe from "./AboutMe";
import TechIUse from "./TechIUse";
import ProjectsPublisPapers from "./ProjectsPublisCerts";

function App() {
  return (
    <>
      <IntroPanel />
      <div class="md:w-screen md:h-screen pl-28">
        <AboutMe />
        <TechIUse />
        <ProjectsPublisPapers />
      </div>
    </>
  );
}

export default App;
