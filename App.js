import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./JsComponents/Home";
import TaskForm from "./JsComponents/AddTask";

import HeroSection from "./JsComponents/HeroSection";
import Task from "./JsComponents/ListTask";
import Navbar from "./JsComponents/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <HeroSection />
        <TaskForm />
        <Task />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
