import Navbar from "./Navbar";
import Home from './Home';
import { BrowserRouter as Router }

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
       <Home />
      </div>
    </div>
  );
}

export default App;
