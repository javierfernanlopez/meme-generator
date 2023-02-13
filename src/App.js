import './App.css';
import Nav from "./components/nav";
import Meme from "./components/meme";
import data from "./data"

function App() {

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Meme />
      </main>

    </div>
  );
}

export default App;
