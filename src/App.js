import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
