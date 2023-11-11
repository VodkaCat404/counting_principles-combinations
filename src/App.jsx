import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="app">
      <div className="components-container">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
