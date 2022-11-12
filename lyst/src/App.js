import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import MainSlider from "./Components/Crousel/MainSlider";
import LandingPage from "./Components/HomePage/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSlider />
      <LandingPage />
    </div>
  );
}

export default App;
