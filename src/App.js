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
      <AboutMe />
      <WorkList />
    </div>
  );
}

export default App;
