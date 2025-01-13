import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
      </main>
    </div>
  );
};

export default App;
