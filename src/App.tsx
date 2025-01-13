import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";

const App = () => {
  return (
    <div>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
      </main>
    </div>
  );
};

export default App;
