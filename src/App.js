import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EducationPage from "./education_component/EducationPage";
import HomePage from "./home_component/HomePage";
import ProjectPage from "./project_component/ProjectPage";
import WorkPage from "./work_component/WorkPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
