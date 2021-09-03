import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skill/Skill";
import Work from "./components/Work/Work";
import { WorkData } from "./components/Work/WorkData";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sections">
        <Hero />
        <About />
        <Skill />
        {WorkData.map((data) => {
          return (
            <Work
              key={data.id}
              number={data.number}
              image={data.image}
              title={data.title}
              description={data.desicription}
              tech={data.tech}
              tooltip={data.tooltip}
            /> 
          );
        })}
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
