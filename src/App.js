import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { WorkList } from "./components/WorkList";

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Header />
      <a name="about_me" href="/"></a>
      <AboutMe />
      <a name="projects" href="/"></a>
      <WorkList />
    </div>
  );
}

export default App;
