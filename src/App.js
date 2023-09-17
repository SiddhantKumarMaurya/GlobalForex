import React, {useState, useEffect} from 'react';
import NavBar from "./components/navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader/>
      ) : (
        <div>
          <NavBar/>
          <Home/>
          <Contact/>
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default App;
