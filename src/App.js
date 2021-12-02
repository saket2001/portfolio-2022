import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { WorkList } from "./components/WorkList";

function App() {
  return (
    <div className="max-w-screen overflow-hidden bg-gray-900">
      <Navbar />
      <Header />
      <div id="about_me"></div>
      <AboutMe />
      <div id="projects"></div>
      <WorkList />
    </div>
  );
}

export default App;
